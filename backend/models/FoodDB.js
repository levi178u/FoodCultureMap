
const mongoose = require('mongoose');

const FoodCultureSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  timeOrigin: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  culturalSignificance: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    default: [],
  },
   embedding: {
    type: [Number], // Array of numbers (the embedding vector)
  }
}, {
  timestamps: true // Optional: adds createdAt and updatedAt
});

module.exports = mongoose.model('Food', FoodCultureSchema);


