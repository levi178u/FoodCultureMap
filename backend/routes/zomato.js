import express from 'express';
import axios from 'axios';
import { getLocation } from '../utils/ipLocation.js'; // wrapper for IPLocation API

const router = express.Router();
const ZOMATO_KEY = process.env.ZOMATO_API_KEY;
const IP_GEO_KEY = process.env.IP_GEOLOCATION_KEY;
const BASE = 'https://developers.zomato.com/api/v2.1';

const zomatoClient = axios.create({
  baseURL: BASE,
  headers: {
    'user-key': ZOMATO_KEY,
    Accept: 'application/json',
  },
});

// Search restaurants by query + location
router.get('/search', async (req, res) => {
  try {
    const { query, city } = req.query;
    const response = await zomatoClient.get('/search', {
      params: { q: query, city },
    });
    console.log(response.data);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Find nearby restaurants by lat/lon
router.get('/nearby', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const resp = await zomatoClient.get('/geocode', {
      params: { lat, lon },
    });
    res.json(resp.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get restaurant details including delivery availability
router.get('/restaurant/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await zomatoClient.get('/restaurant', {
      params: { res_id: id },
    });
    const data = resp.data;
    res.json({
      ...data,
      delivery: data.has_online_delivery,
      takeaway: data.has_table_booking,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user location from IP
router.get('/my-location', async (req, res) => {
  try {
    const ip = req.ip;
    const location = await getLocation(ip, IP_GEO_KEY);
    res.json(location);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
