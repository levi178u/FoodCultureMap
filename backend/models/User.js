// models/User.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // hashed password
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
