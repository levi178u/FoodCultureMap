import  express from 'express';
const router = express.Router();
import { searchSimilarDishes } from '../vectorStore.js';
import  { generateResponse } from '../rag.js';
const docs = [
  {
    id: '1',
    foodName: 'Kimchi',
    region: 'East Asia',
    country: 'Korea',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
    description: 'Traditional Korean fermented vegetables...',
    location: 'Seoul, South Korea',
    latitude: 37.5665,
    longitude: 126.9780,
    timeOrigin: '2000 BCE',
    type: 'Lactic acid fermentation',
    culturalSignificance: 'Central to Korean identity...',
    ingredients: ['Napa cabbage', 'Korean chili flakes', 'Garlic', 'Ginger', 'Fish sauce', 'Salt']
  },
  {
    id: '2',
    foodName: 'Sauerkraut',
    region: 'Central Europe',
    country: 'Germany',
    image: 'https://images.pexels.com/photos/5840032/pexels-photo-5840032.jpeg',
    description: 'Finely cut fermented cabbage...',
    location: 'Bavaria, Germany',
    latitude: 48.7904,
    longitude: 11.4979,
    timeOrigin: '400 BCE',
    type: 'Lactic acid fermentation',
    culturalSignificance: 'Symbol of German cuisine...',
    ingredients: ['White cabbage', 'Salt', 'Caraway seeds', 'Juniper berries']
  },
 {
    id: '3',
    foodName: 'Miso',
    region: 'East Asia',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/5640081/pexels-photo-5640081.jpeg',
    description: 'Traditional Japanese seasoning produced by fermenting soybeans with salt and koji fungus.',
    location: 'Kyoto, Japan',
    latitude: 35.0116,
    longitude: 135.7681,
    timeOrigin: '710 CE',
    type: 'Koji fermentation',
    culturalSignificance: 'Foundation of Japanese cuisine, represents harmony between nature and human craft',
    ingredients: ['Soybeans', 'Salt', 'Koji starter', 'Rice or barley']
  },
  {
    id: '4',
    foodName: 'Kefir',
    region: 'Caucasus',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/6529425/pexels-photo-6529425.jpeg',
    description: 'Fermented milk drink made using kefir grains, originating from the Caucasus Mountains.',
    location: 'Tbilisi, Georgia',
    latitude: 41.7151,
    longitude: 44.8271,
    timeOrigin: '1000 BCE',
    type: 'Kefir grain fermentation',
    culturalSignificance: 'Known as the "grains of the Prophet", considered a gift from the gods',
    ingredients: ['Milk', 'Kefir grains', 'Natural bacterial cultures']
  },
  {
    id: '5',
    foodName: 'Sourdough',
    region: 'Middle East',
    country: 'Egypt',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    description: 'Bread made using a fermented starter culture containing wild yeasts and lactobacilli.',
    location: 'Cairo, Egypt',
    latitude: 30.0444,
    longitude: 31.2357,
    timeOrigin: '3700 BCE',
    type: 'Wild yeast fermentation',
    culturalSignificance: 'Ancient bread-making technique, symbol of civilization and sustenance',
    ingredients: ['Flour', 'Water', 'Wild yeast starter', 'Salt']
  },
];

router.post('/ask', async (req, res) => {
  const { queryEmbedding, query } = req.body;
  console.log( "Original Query", query)
  //const docs = await searchSimilarDishes(queryEmbedding);
  //const ragResponse = await generateResponse(originalQuery, docs);
  res.json({ topDocs: docs });
});

export default router;

