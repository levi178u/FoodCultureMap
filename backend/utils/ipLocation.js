import axios from 'axios';

export async function getLocation(ip, apiKey) {
  const resp = await axios.get(
    `https://ipgeolocation.io/api/ipgeo?apiKey=${apiKey}&ip=${ip}`
  );
  return resp.data;
}
