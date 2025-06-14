from sentence_transformers import SentenceTransformer
import google.generativeai as genai
from typing import List, Dict, Any
import os
from dotenv import load_dotenv
from datetime import datetime
import json
from .database import db
from .database import Database
# from aiocache import Cache

load_dotenv()

model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
gemini = genai.GenerativeModel('gemini-pro')

CACHE_TTL = 3600
# cache = Cache(Cache.MEMORY)

def create_embedding(text: str) -> List[float]:
    return model.encode(text).tolist()

def create_prompt(query: str, context: List[Dict[str, Any]], conversation_history: List[Dict[str, Any]] = None) -> str:
    
    def sanitize_text(text: str) -> str:
        return text.replace("\n", " ").replace("\r", " ").strip()
    
    query = sanitize_text(query)
    
    history_context = ""
    if conversation_history:
        history_context = "\nPrevious conversation context:\n" + "\n".join(
            f"User: {msg['content']}\nAssistant: {msg['response']}"
            for msg in conversation_history[-3:]  # Last 3 messages
        )
    context_json = json.dumps([
        {k: sanitize_text(v) for k, v in dish.items() if k in ['dish', 'description', 'country', 'region', 'ingredients', 'culturalSignificance']}
        for dish in context
    ],
        indent=2
    )

    return f"""You are an expert food and culture consultant with deep knowledge of global cuisines, culinary traditions, and cultural significance of food. Your role is to provide detailed, accurate, and engaging responses about food and culture.

{history_context}
Context Information:
{context_json}

User Question: {query}

Guidelines for your response:
1. Focus on the cultural and historical aspects of the dishes
2. Highlight unique ingredients and preparation methods
3. Explain the significance of the dish in its cultural context
4. If the context doesn't provide enough information, acknowledge this and provide general knowledge
5. Keep the response engaging and informative
6. Include interesting facts or anecdotes if relevant
7. Maintain a professional yet conversational tone
8. If this is a follow-up question, maintain context from the previous conversation
9. If the question is unclear, ask for clarification

Please provide a comprehensive response:"""

async def generate_response(query: str, context: List[Dict[str, Any]], conversation_history: List[Dict[str, Any]] = None) -> str:
    prompt = create_prompt(query, context, conversation_history)
    
    try:
        response = await gemini.generate_content(prompt)
        return response.text
    except Exception as e:
        print(f"Error generating response: {e}")
        raise

async def chat_with_food_expert(query: str, session_id: str = None) -> Dict[str, Any]:
    try:
        # cache
        # cache_key = sha256(f"{query}_{session_id}".encode()).hexdigest()
        cached = await db.get_cache(query, session_id)
        if cached:
            return json.loads(cached)

        # conversation history
        conversation_history = []
        if session_id:
            session = await db.get_chat_session(session_id)
            if session:
                conversation_history = session.get('messages', [])

        # embedding for query
        query_embedding = create_embedding(query)

        similar_dishes = await db.search_similar_dishes(query_embedding)
        
        if not similar_dishes:
            response = {
                "response": "I couldn't find any specific dishes related to your query. Could you please rephrase your question or ask about a different aspect of food and culture?",
                "relevantDishes": [],
                "session_id": session_id
            }
            return response

        response_text = await generate_response(query, similar_dishes, conversation_history)

        response = {
            "response": response_text,
            "relevantDishes": [
                {
                    "name": dish["dish"],
                    "description": dish["description"],
                    "country": dish["country"],
                    "region": dish["region"],
                    "ingredients": dish["ingredients"],
                    "culturalSignificance": dish["culturalSignificance"]
                }
                for dish in similar_dishes
            ],
            "session_id": session_id
        }

        if session_id:
            await db.update_chat_session(session_id, {
                "role": "user",
                "content": query,
                "response": response_text,
                "timestamp": datetime.utcnow()
            })

        await db.set_cache(query, session_id, response)
        return response

    except Exception as e:
        print(f"Error in chat: {e}")
        raise 