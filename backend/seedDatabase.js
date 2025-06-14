import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { HuggingFaceInference } from '@langchain/community/embeddings/hf';
// import {GoogleGenerativeAI} from '@langchain/community/embeddings/google'; 
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const dbName = 'foodDB';
const collectionName = 'dishes';
const embeddingDimensions = 384;

// Initialize Hugging Face embeddings
const embeddings = new HuggingFaceInference({
  apiKey: process.env.HUGGINGFACE_API_KEY,
  model: "sentence-transformers/all-MiniLM-L6-v2" 
});

// const genAI = new GoogleGenerativeAI({
//   apiKey: process.env.GEMINI_API_KEY,
//   model: "gemini-1.5-flash",
// });

async function createEmbedding(text) {
  try {
    const embedding = await embeddings.embedQuery(text);
    return embedding;
  } catch (error) {
    console.error('Error creating embedding:', error);
    throw error;
  }
}

async function createVectorIndex(db){

  await db.command(
    {
      "createIndexes": "dishes",
      "indexes": [{
        "name": "vectorIndex",
        "key": {"embedding": "vector"},
        "vectorOptions": {
          "dimensions": embeddingDimensions,
          "similarity": "cosine"
        }
      }]
    }
  )
}

async function seedDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Read dataset file
    const dataPath = path.join(process.cwd(), 'Database', 'food_culture_data.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const foodData = JSON.parse(rawData);

    // Process each food item
    for (const item of foodData) {
      // embedding for the description
      const embedding = await createEmbedding(item.description);

      // Prepare docs with embedding
      const document = {
        dish: item.dish,
        description: item.description,
        embedding: embedding,
        region: item.region,
        country: item.country,
        culturalSignificance: item.culturalSignificance,
        ingredients: item.ingredients,
        preparationMethod: item.preparationMethod,
        occasions: item.occasions
      };

      // Insert into MongoDB
      await collection.insertOne(document);
      console.log(`Inserted ${item.dish} into database`);
    }

    await createVectorIndex(db);
    await collection.createIndex(
      { dish: "text", description: "text", ingredients: "text" },
      { name: "textSearchIndex", default_language: "english" }
    );
    console.log('Database seeding completed successfully');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase(); 