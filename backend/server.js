import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Ragroutes from './routes/ragRoutes.js'
import authRoutes from './routes/auth.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'https://frontend-app-575377833580.asia-south1.run.app'],
  credentials: true
}));


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/rag', Ragroutes);
app.use('/api/auth', authRoutes);

// MongoDB Connection and Start Server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    const PORT = process.env.PORT || 8080; // ✅ Cloud Run expects 8080
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
