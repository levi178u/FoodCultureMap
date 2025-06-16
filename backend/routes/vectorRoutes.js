import express from "express"
const router = express.Router()
import { searchSimilarDishes } from '../vectorStore.js';

router.post('/search', async (req, res) => {
  const { queryEmbedding } = req.body;
  const results = await searchSimilarDishes(queryEmbedding);
  res.json(results);
});

export default router;
