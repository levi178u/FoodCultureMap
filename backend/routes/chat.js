import express from 'express';
import { chatWithFoodExpert } from '../rag.js';

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await chatWithFoodExpert(message, sessionId);
    res.json(response);
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

export default router; 