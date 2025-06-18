import requests
import math 

class FoodServiceAPI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://developers.zomato.com/api/v2.1"
        self.headers = {
            'user-key': self.api_key,
            'Accept': 'application/json'
        }

    def search_restaurants(self, query, location):
        url = f"{self.base_url}/search"
        params = {
            'q': query,
            'location': location
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json()
    def get_restaurant_details(self, restaurant_id):
        url = f"{self.base_url}/restaurant"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json()  
    def find_nearby_restaurants(self, latitude, longitude):
        url = f"{self.base_url}/geocode"
        params = {
            'lat': latitude,
            'lon': longitude
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json()
    
    def get_cuisines(self, city_id):
        url = f"{self.base_url}/cuisines"
        params = {
            'city_id': city_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json()
    
    def get_city_details(self, city_name):
        url = f"{self.base_url}/cities"
        params = {
            'q': city_name
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None
    def get_reviews(self, restaurant_id):
        url = f"{self.base_url}/reviews"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None
    def get_daily_menu(self, restaurant_id):
        url = f"{self.base_url}/dailymenu"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None
    def get_collections(self, city_id):
        url = f"{self.base_url}/collections"
        params = {
            'city_id': city_id
        }   

        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None
    
    def delivery_details(self, restaurant_id):
        url = f"{self.base_url}/restaurant"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        if response.status_code == 200:
            data = response.json()
            return {
                'delivery': data.get('has_online_delivery', False),
                'takeaway': data.get('has_table_booking', False)
            }
        return None
    def get_timings(self, restaurant_id):
        url = f"{self.base_url}/restaurant"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        if response.status_code == 200:
            data = response.json()
            timings = data.get('timings', 'Not available')
            return timings
        return None
    
    def feedback(self, restaurant_id, feedback_text):
        url = f"{self.base_url}/feedback"
        params = {
            'res_id': restaurant_id,
            'feedback_text': feedback_text
        }
        response = requests.post(url, headers=self.headers, json=params)
        return response.json() if response.status_code == 200 else None
    
    # def get_user_details(self, user_id):
    #     url = f"{self.base_url}/user"
    #     params = {
    #         'user_id': user_id
    #     }
    #     response = requests.get(url, headers=self.headers, params=params)
    #     return response.json() if response.status_code == 200 else None

    def distance_matrix(self, origins, destinations):
        url = f"{self.base_url}/distance_matrix"
        params = {
            'origins': origins,
            'destinations': destinations
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None
    def get_event_details(self, event_id):
        url = f"{self.base_url}/events"
        params = {
            'event_id': event_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None
    def get_top_restaurants(self, city_id, count=10):
        url = f"{self.base_url}/top_restaurants"
        params = {
            'city_id': city_id,
            'count': count
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None 
    def get_restaurant_photos(self, restaurant_id):
        url = f"{self.base_url}/photos"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None     
    def get_restaurant_menu(self, restaurant_id):

        url = f"{self.base_url}/menu"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None
    def get_restaurant_ratings(self, restaurant_id):
        url = f"{self.base_url}/restaurant"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        if response.status_code == 200: 
            data = response.json()
            return {
                'rating': data.get('user_rating', {}).get('aggregate_rating', 'Not available'),
                'votes': data.get('user_rating', {}).get('votes', 0)
            }
        return None
    def get_restaurant_special_offers(self, restaurant_id):
        url = f"{self.base_url}/restaurant"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        if response.status_code == 200:
            data = response.json()
            return data.get('offers', [])
        return []
    def notify_dishes_availability(self, restaurant_id, dish_name): 
        url = f"{self.base_url}/notify_dish"
        params = {
            'res_id': restaurant_id,
            'dish_name': dish_name  
        }
        response = requests.post(url, headers=self.headers, json=params)
        return response.json() if response.status_code == 200 else None
    def get_restaurant_videos(self, restaurant_id):
        url = f"{self.base_url}/videos"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None     
    def get_restaurant_faqs(self, restaurant_id):
        url = f"{self.base_url}/faqs"
        params = {
            'res_id': restaurant_id
        }
        response = requests.get(url, headers=self.headers, params=params)
        return response.json() if response.status_code == 200 else None
    
    def calculate_distance(self, lat1: float, lon1: float, lat2: float, lon2: float) -> float:
       
        R = 6371  # Radius of the earth in km
        dlat = math.radians(lat2 - lat1)
        dlon = math.radians(lon2 - lon1)
        
        a = (math.sin(dlat/2) * math.sin(dlat/2) + 
             math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * 
             math.sin(dlon/2) * math.sin(dlon/2))
        
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
        d = R * c  # Distance in km
        
        return d
    
