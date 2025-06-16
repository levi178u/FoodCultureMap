import { MongoClient }  from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const dbName = 'foodDB';
const collectionName = 'dishes';
async function searchSimilarDishes(queryEmbedding) { // this function is used to take the input user query as embeddings and does a similarity search in mongodb vector store 
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const results = await collection.aggregate([
    {
      $vectorSearch: {
        index: 'vectorIndex',
        path: 'embedding',
        queryVector: queryEmbedding,
        numCandidates: 100,
        limit: 5,
        similarity: 'cosine',
      },
    },
  ]).toArray(); // retrieves top 5 docs that are semantically same to the user query

  return results;
}

export { searchSimilarDishes };

