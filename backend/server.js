import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Vectorroutes from './routes/vectorRoutes.js';
import Ragroutes from './routes/ragRoutes.js'
dotenv.config();
const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT'],
  credentials: true
}));

app.use(bodyParser.json());
app.use('/api/vector', Vectorroutes);// route to create vector embeddings
app.use('/api/rag',Ragroutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));