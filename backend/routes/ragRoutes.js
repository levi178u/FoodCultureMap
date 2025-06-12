import  express from 'express';
const router = express.Router();
import { searchSimilarDishes } from '../vectorStore.js';
import  { generateResponse } from '../rag.js';

router.post('/ask', async (req, res) => {
  const { queryEmbedding, originalQuery } = req.body;
  console.log( "Original Query", originalQuery)
  const docs = await searchSimilarDishes(queryEmbedding);
  const ragResponse = await generateResponse(originalQuery, docs);
  res.json({ answer: ragResponse });
});

export default router;

