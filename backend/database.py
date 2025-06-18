from motor.motor_asyncio import AsyncIOMotorClient as client_io
from typing import List, Dict, Any
import os
from dotenv import load_dotenv
from datetime import datetime
import asyncio
import json
from langchain.embeddings import HuggingFaceInferenceAPIEmbeddings as APS
from hashlib import sha256

load_dotenv()

def hash_query(query: str) -> str:
    return sha256(query.encode()).hexdigest()
class Database:
    def __init__(self):
        self.client = None
        self.db = None
        self.dishes_collection = None
        self.sessions_collection = None
        self.response_cache = None

    async def connect(self):
        self.client = client_io(os.getenv("MONGO_URI"))
        self.db = self.client.foodDB
        self.dishes_collection = self.db.dishes
        self.sessions_collection = self.db.sessions
        self.embeddings = APS(
            api_key=os.getenv("HUGGING_FACE_API_KEY"),
            model="sentence-transformers/all-MiniLM-L6-v2"
        )
        self.response_cache = self.db.response_cache

    async def close(self):
        if self.client:
            self.client.close()

    async def create_vector_index(self):
        if self.dishes_collection is None:
            await self.connect()
        # Created vector search index
        try:
            await self.db.command({
                "createIndexes": "dishes",
                "indexes": [{
                    "name": "vectorIndex",
                    "key": {"embedding": "vector"},
                    "vectorOptions": {
                        "dimensions": 384,
                        "similarity": "cosine"
                    }
                }]
            })
        except Exception as e:
            print(f"Index might already exist: {e}")
        
        try:
            await self.dishes_collection.create_index(
                [("name", "text"), ("description", "text"), ("ingredients", "text")],
                name="textIndex",
                default_language="english"
            )
        except Exception as e:
            print(f"Text index might already exist: {e}")

    async def search_similar_dishes(self, query_embedding: List[float], limit: int = 3) -> List[Dict[str, Any]]:
        pipeline = [
            {
                "$vectorSearch": {
                    "index": "vectorIndex",
                    "path": "embedding",
                    "queryVector": query_embedding,
                    "numCandidates": limit * 10,
                    "limit": limit,
                    "similarity": "cosine"
                }
            }
        ]
        
        pointer = self.dishes_collection.aggregate(pipeline)
        results = await pointer.to_list(length=limit)
        return results

    async def get_chat_session(self, session_id: str) -> Dict[str, Any]:
        session = await self.sessions_collection.find_one({"session_id": session_id})
        return session

    async def update_chat_session(self, session_id: str, message: Dict[str, Any]):
        await self.sessions_collection.update_one(
            {"session_id": session_id},
            {
                "$push": {"messages": message},
                "$set": {"updated_at": datetime.utcnow().isoformat()}
            },
            upsert=True
        )

    async def seed_dishes(self, json_file: str):
        if self.dishes_collection is None:
            await self.connect()
        with open(json_file, 'r', encoding='utf-8') as file:
            dishes_data = json.load(file)

            total = len(dishes_data)
            dishes_with_embeddings = []
            for item in dishes_data:
                dish = f"{item['dish']} {item['description']} {' '.join(item['ingredients'])}"
                item['id'] = str(item.get('id', item['dish'].replace(" ", "_").lower()))
                item['created_at'] = datetime.utcnow().isoformat()
                item['updated_at'] = datetime.utcnow().isoformat()
                
                embedding = await self.model.embed_query(dish)
                item['embedding'] = embedding
                dishes_with_embeddings.append(item)
        if dishes_with_embeddings:
            await self.dishes_collection.insert_many(dishes_with_embeddings)
            print(f"Inserted {len(dishes_with_embeddings)} dishes out of {total}")

    async def get_cache(self, query: str, session_id: str = None) -> [Dict[str, Any]]:
        cache_key = hash_query(f"{query}_{session_id}")
        cached_response = await self.response_cache.find_one({"_id": cache_key})
        return cached_response["response"] if cached_response else None

    async def set_cache(self, query: str, session_id: str, response: Dict[str, Any]):
        cache_key = hash_query(f"{query}_{session_id}")
        await self.response_cache.update_one(
            {"_id": cache_key},
            {"$set": {"response": response, "timestamp": datetime.utcnow().isoformat()}},
            upsert=True
        )

db = Database()