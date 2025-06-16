// middleware/authMiddleware.ts
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer <token>"
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
