import  express from 'express';
const router = express.Router();
import { searchSimilarDishes } from '../vectorStore.js';
import  { generateNarrativeFromRAG } from '../rag.js';

router.post('/ask', async (req, res) => {
  const { embeds, query } = req.body;
  console.log( "Original Query", query)
  //console.log(embeds)
  const docs = await searchSimilarDishes(embeds);
  res.json({ topDocs: docs});
});

router.post('/askRag', async (req, res) => {
  const {docs, query } = req.body;
  console.log( "Original Query", query)
  const ragResponse = await generateNarrativeFromRAG(query, docs);
  console.log(ragResponse)
  res.json({ rag: ragResponse});
});

export default router;

