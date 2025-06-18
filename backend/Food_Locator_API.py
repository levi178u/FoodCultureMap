from IP_geolocation import IPLocationAPI 

class FoodServiceAPI:
    def __init__(self, api_key, ip_geolocation_api_key):
        self.api_key = api_key
        self.base_url = "https://developers.zomato.com/api/v2.1"
        self.headers = {
            'user-key': self.api_key,
            'Accept': 'application/json'
        }
        self.ip_location_service = IPLocationAPI(ip_geolocation_api_key)

    def get_user_location(self, ip_address=None):
        return self.ip_location_service.get_location(ip_address)
