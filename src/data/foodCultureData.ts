import { FoodCultureDoc } from '../types/FoodCulture';

export const foodCultureDatabase: FoodCultureDoc[] = [
  {
    "id": 1,
    "foodName": "Kimchi",
    "region": "East Asia",
    "country": "South Korea",
    "image": "https://th.bing.com/th/id/R.04042080ad242eb6b29b13642302ffdd?rik=dBVopsi6aXtcrA&riu=http%3a%2f%2fmaangchi.com%2fwp-content%2fuploads%2f2015%2f04%2fkimchi3.jpg&ehk=V0YFi5OZ7zYz5I%2bkxKK5RXoVaIdoCSar7KWzjGinH2k%3d&risl=&pid=ImgRaw&r=0",
    "description": "Kimchi is a traditional Korean dish of fermented vegetables, primarily napa cabbage and Korean radishes, flavored with chili pepper, garlic, ginger, and jeotgal (salted seafood).",
    "location": "Seoul, South Korea",
    "latitude": 37.5665,
    "longitude": 126.978,
    "timeOrigin": "7th century AD",
    "fermentationType": "Lactic acid fermentation",
    "culturalSignificance": "Kimchi is a staple in Korean cuisine and is celebrated for its health benefits and cultural heritage, often considered the national dish of Korea.",
    "ingredients": [
      "napa cabbage",
      "daikon radish",
      "red chili pepper",
      "garlic",
      "ginger"
    ]
  },
  {
        "id": 2,

    "foodName": "Sauerkraut",
    "region": "Europe",
    "country": "Germany",
    "image": "https://th.bing.com/th/id/OIP.F981BDlM6UvxJ029tJAMswHaE5?rs=1&pid=ImgDetMain",
    "description": "Sauerkraut consists of finely cut cabbage that has been fermented by various lactic acid bacteria, giving it a distinct sour flavor.",
    "location": "Berlin, Germany",
    "latitude": 52.52,
    "longitude": 13.405,
    "timeOrigin": "Medieval period",
    "fermentationType": "Lactic acid fermentation",
    "culturalSignificance": "Sauerkraut is a traditional German side dish and symbolizes German cuisine. It was also carried by sailors to prevent scurvy during long sea voyages.",
    "ingredients": [
      "cabbage",
      "salt"
    ]
  },
  {
        "id": 3,

    "foodName": "Miso",
    "region": "East Asia",
    "country": "Japan",
    "image": "https://th.bing.com/th/id/OIP.Er8PPhQappzY6UZ921QhUwHaE8?rs=1&pid=ImgDetMain",
    "description": "Miso is a savory paste made from fermented soybeans, salt, and koji (fermented rice or barley). It is a fundamental seasoning in Japanese cuisine.",
    "location": "Kyoto, Japan",
    "latitude": 35.0116,
    "longitude": 135.7681,
    "timeOrigin": "7th century AD",
    "fermentationType": "Koji fermentation (fungal)",
    "culturalSignificance": "Miso soup is a daily staple in Japan, and miso itself is valued for its umami flavor and nutritional benefits, reflecting Japanese culinary tradition.",
    "ingredients": [
      "soybeans",
      "salt",
      "rice koji"
    ]
  },
  {
        "id": 4,

    "foodName": "Natto",
    "region": "East Asia",
    "country": "Japan",
    "image": "https://th.bing.com/th/id/OIP.6ENGJoQgmr1vEvLQnx7qkQHaEK?rs=1&pid=ImgDetMain",
    "description": "Natto is a traditional Japanese dish of fermented soybeans, known for its strong aroma, sticky texture, and rich flavor.",
    "location": "Tochigi, Japan",
    "latitude": 36.5656,
    "longitude": 139.8836,
    "timeOrigin": "8th century AD",
    "fermentationType": "Bacterial fermentation (Bacillus subtilis)",
    "culturalSignificance": "Natto is especially popular in Japanese breakfast culture and is considered a healthy food due to its high protein and probiotic content.",
    "ingredients": [
      "soybeans",
      "natto bacteria (Bacillus subtilis)",
      "salt"
    ]
  },
  {
        "id": 5,

    "foodName": "Kombucha",
    "region": "East Asia",
    "country": "China",
    "image": "https://th.bing.com/th/id/OIP.qi8IGGlGV82hLemzobDXZwHaEK?w=3820&h=2149&rs=1&pid=ImgDetMain",
    "description": "Kombucha is a fermented sweet tea beverage made with a symbiotic culture of bacteria and yeast (SCOBY), which produces a tangy, effervescent drink.",
    "location": "Changbai Mountains, China",
    "latitude": 42.01,
    "longitude": 128.15,
    "timeOrigin": "220 BC (approx.)",
    "fermentationType": "Symbiotic fermentation (SCOBY)",
    "culturalSignificance": "Originating in Northeast China, kombucha has become popular worldwide for its purported health benefits and unique taste.",
    "ingredients": [
      "tea",
      "sugar",
      "SCOBY culture"
    ]
  },
  {
    "id": 6,
    "foodName": "Tempeh",
    "region": "Southeast Asia",
    "country": "Indonesia",
    "image": "https://example.com/images/tempeh.jpg",
    "description": "Tempeh is a traditional Indonesian soy product made by fermenting cooked soybeans with a Rhizopusmold, resulting in a firm cake.",
    "location": "Central Java, Indonesia",
    "latitude": -7.5361,
    "longitude": 110.5518,
    "timeOrigin": "12th century AD",
    "fermentationType": "Fungal fermentation (Rhizopus mold)",
    "culturalSignificance": "Tempeh is a staple protein source in Indonesian cuisine and reflects the ingenuity of traditional fermentation methods in Southeast Asia.",
    "ingredients": [
      "soybeans",
      "Rhizopus mold starter"
    ]
  },
  {
    "id": 7,
    "foodName": "Kefir",
    "region": "West Asia",
    "country": "Georgia",
    "image": "https://example.com/images/kefir.jpg",
    "description": "Kefir is a fermented milk drink made by inoculating milk with kefir grains, containing lactic acid bacteria and yeast, resulting in a tangy, slightly effervescent beverage.",
    "location": "Tbilisi, Georgia",
    "latitude": 41.7151,
    "longitude": 44.8271,
    "timeOrigin": "2000 years ago (legend)",
    "fermentationType": "Lactic acid and yeast fermentation",
    "culturalSignificance": "Kefir originates from the Caucasus region and has been traditionally enjoyed for its probiotic qualities and nutritional richness.",
    "ingredients": [
      "milk",
      "kefir grains"
    ]
  },
  {
    "id": 8,
    "foodName": "Lassi",
    "region": "South Asia",
    "country": "India",
    "image": "https://example.com/images/lassi.jpg",
    "description": "Lassi is a traditional yogurt-based drink from the Indian subcontinent, blended with water, salt or sugar, and sometimes flavored with fruits or spices.",
    "location": "Punjab, India",
    "latitude": 31.1471,
    "longitude": 75.3412,
    "timeOrigin": "Ancient times",
    "fermentationType": "Lactic acid fermentation",
    "culturalSignificance": "Lassi has cultural importance in Punjabi cuisine, often consumed to cool the body in hotclimates and as part of festive meals.",
    "ingredients": [
      "yogurt",
      "water",
      "salt",
      "sugar",
      "fruit (optional)"
    ]
  },
  {
    "id": 9,
    "foodName": "Yogurt",
    "region": "West Asia",
    "country": "Armenia",
    "image": "https://example.com/images/yogurt.jpg",
    "description": "Yogurt is a thick, creamy dairy product made by fermenting milk with live bacterial cultures, commonly eaten plain or with sweeteners.",
    "location": "Yerevan, Armenia",
    "latitude": 40.1792,
    "longitude": 44.4991,
    "timeOrigin": "5000 BC (approx.)",
    "fermentationType": "Lactic acid fermentation",
    "culturalSignificance": "Yogurt is an ancient food with deep roots in Armenian culture and cuisine, valued for its cooling properties and probiotics.",
    "ingredients": [
      "milk",
      "yogurt cultures"
    ]
  },
  {
    "id": 10,
    "foodName": "Idli",
    "region": "South Asia",
    "country": "India",
    "image": "https://media.istockphoto.com/id/2157231879/vector/south-indian-breakfast-idli-and-vada-served-with-coconut-chutney-and-sambar.jpg?s=612x612&w=0&k=20&c=7SBOVGXr1z5cI86JRWgvhOZMaEVflgPcHMxco3i-UhE=",
    "description": "Idli is a savory South Indian cake made from a fermented batter of rice and black lentils, steamed to produce a light, fluffy texture.",
    "location": "Chennai, India",
    "latitude": 21.0827,
    "longitude": 80.2707,
    "timeOrigin": "1100 BC (approx.)",
    "fermentationType": "Lactic acid fermentation (sourdough rice batter)",
    "culturalSignificance": "Idli is a staple breakfast dish in South India, reflecting the South Indian tradition ofbreakfast foods and fermented cuisine.",
    "ingredients": [
      "rice",
      "black lentils (urad dal)",
      "water"
    ]
  },
  {
    "id": 11,
    "foodName": "Dosa",
    "region": "South Asia",
    "country": "India",
    "image": "https://example.com/images/dosa.jpg",
    "description": "Dosa is a thin, crispy pancake from South India made from a fermented batter of rice and black lentils, often served with chutneys and sambar.",
    "location": "Bengaluru, India",
    "latitude": 12.9716,
    "longitude": 77.5946,
    "timeOrigin": "1000 BC (approx.)",
    "fermentationType": "Lactic acid fermentation",
    "culturalSignificance": "Dosa is a popular breakfast dish across South India, symbolizing the long tradition of fermented foods in Indian cuisine.",
    "ingredients": [
      "rice",
      "black lentils (urad dal)",
      "fenugreek seeds",
      "water"
    ]
  },
  {
    "id": 12,
    "foodName": "Injera",
    "region": "Africa",
    "country": "Ethiopia",
    "image": "https://www.bing.com/images/search?view=detailV2&ccid=eLzWMoNL&id=6C369ECBFDA4F7AEFBE344AC523F2DC63166084A&thid=OIP.eLzWMoNLiMesVTLQ_tPJkQHaE6&mediaurl=https%3a%2f%2fchipabythedozen.com%2fwp-content%2fuploads%2f2019%2f11%2fInjera-Ethiopian-flatbread.jpg&exph=1284&expw=1936&q=Injera+image&simid=607993003165090154&FORM=IRPRST&ck=AD66B071830F7354660D3928A8F0F847&selectedIndex=1&itb=0",
    "description": "Injera is a spongy, sourdough flatbread from Ethiopia, made by fermenting teff flour batter, and is used as both a plate and utensil in meals.",
    "location": "Addis Ababa, Ethiopia",
    "latitude": 9.145,
    "longitude": 40.4897,
    "timeOrigin": "2000 years ago (approx.)",
    "fermentationType": "Lactic acid and yeast fermentation",
    "culturalSignificance": "Injera is a staple in Ethiopian and Eritrean cuisine, central to communal dining and cultural identity.",
    "ingredients": [
      "teff flour",
      "water"
    ]
  },
  {
    "id": 13,
    "foodName": "Poi",
    "region": "Oceania",
    "country": "Hawaii (USA)",
    "image": "https://th.bing.com/th/id/OIP.oPAp0YavvqTyiukWqLnDugHaE7?rs=1&pid=ImgDetMain",
    "description": "Poi is a traditional Hawaiian food made by fermenting and mashing cooked taro root into a paste, which has a tangy flavor and pudding-like texture.",
    "location": "Honolulu, Hawaii",
    "latitude": 21.3069,
    "longitude": -157.8583,
    "timeOrigin": "Ancient Polynesian times",
    "fermentationType": "Lactic acid fermentation",
    "culturalSignificance": "Poi holds cultural significance in Hawaiian cuisine and is often served at luaus and family gatherings as a symbol of community.",
    "ingredients": [
      "taro root",
      "water"
    ]
  },
  {
    "id": 14,
    "foodName": "Kefalograviera Cheese",
    "region": "Europe",
    "country": "Greece",
    "image": "https://example.com/images/kefalograviera.jpg",
    "description": "Kefalograviera is a hard Greek cheese made from sheep's milk or a mixture of sheep and goat's milk, aged to develop a sharp, salty flavor.",
    "location": "Crete, Greece",
    "latitude": 35.2401,
    "longitude": 24.8093,
    "timeOrigin": "Medieval period",
    "fermentationType": "Enzymatic milk fermentation (cheese making)",
    "culturalSignificance": "Kefalograviera is a protected traditional cheese in Greece, often used in Greek cuisine for dishes like saganaki and reflects the pastoral culture.",
    "ingredients": [
      "sheep's milk",
      "goat's milk",
      "salt",
      "rennet"
    ]
  },
  {
    "id": 15,
    "foodName": "Sauce Poisson (Fish Sauce)",
    "region": "Southeast Asia",
    "country": "Vietnam",
    "image": "https://example.com/images/nuocmam.jpg",
    "description": "Fish sauce (Nuoc Mam) is a pungent, salty condiment made by fermenting anchovies or other fish with salt, resulting in a liquid seasoning crucial in Vietnamese cooking.",
    "location": "Phu Quoc, Vietnam",
    "latitude": 10.2874,
    "longitude": 103.9521,
    "timeOrigin": "15th century AD",
    "fermentationType": "Anaerobic salt fermentation",
    "culturalSignificance": "Nuoc Mam is an essential ingredient in Vietnamese cuisine, used as a dip and flavor enhancer, integral to national dishes like pho and bun cha.",
    "ingredients": [
      "anchovies",
      "salt"
    ]
  },
  {
    "id": 16,
    "foodName": "Chicha Morada",
    "region": "South America",
    "country": "Peru",
    "image": "https://example.com/images/chicha.jpg",
    "description": "Chicha Morada is a traditional Peruvian drink made from fermented purple corn mixed with pineapple, cinnamon, and cloves, served as a sweet beverage.",
    "location": "Cusco, Peru",
    "latitude": -13.5319,
    "longitude": -71.9675,
    "timeOrigin": "Inca era",
    "fermentationType": "Yeast fermentation (corn)",
    "culturalSignificance": "Chicha has been a part of Andean culture for millennia, used in ceremonies and daily life, symbolizing hospitality and cultural heritage.",
    "ingredients": [
      "purple corn",
      "pineapple",
      "cinnamon",
      "cloves",
      "sugar",
      "water"
    ]
  },
  {
    "id": 17,
    "foodName": "Tepache",
    "region": "North America",
    "country": "Mexico",
    "image": "https://example.com/images/tepache.jpg",
    "description": "Tepache is a traditional Mexican fermented beverage made from pineapple rinds, brown sugar, and spices, resulting in a lightly alcoholic, tangy drink.",
    "location": "Mexico City, Mexico",
    "latitude": 19.4326,
    "longitude": -99.1332,
    "timeOrigin": "Pre-Columbian era",
    "fermentationType": "Yeast fermentation (pineapple)",
    "culturalSignificance": "Tepache is often sold by street vendors and enjoyed during festivals, reflecting Mexico's indigenous fermentation traditions.",
    "ingredients": [
      "pineapple rinds",
      "brown sugar",
      "cinnamon",
      "water"
    ]
  },
  {
    "id": 18,
    "foodName": "Kvass",
    "region": "Eastern Europe",
    "country": "Russia",
    "image": "https://example.com/images/kvass.jpg",
    "description": "Kvass is a traditional Russian fermented beverage made from black or rye bread, giving it a slightly sour taste and low alcohol content.",
    "location": "Moscow, Russia",
    "latitude": 55.7558,
    "longitude": 37.6173,
    "timeOrigin": "10th century AD",
    "fermentationType": "Lactic acid and yeast fermentation (bread)",
    "culturalSignificance": "Kvass is a popular soft drink in Russia and Eastern Europe, historically served as a refreshing beverage and regarded as a folk remedy.",
    "ingredients": [
      "rye bread",
      "water",
      "sugar",
      "yeast"
    ]
  },
  {
    "id": 19,
    "foodName": "Garum (Fish Sauce)",
    "region": "Europe",
    "country": "Italy",
    "image": "https://example.com/images/garum.jpg",
    "description": "Garum was a fermented fish sauce used in ancient Roman cuisine, made by layering fish and salt and allowing it to ferment and liquefy in the sun.",
    "location": "Pompeii, Italy",
    "latitude": 40.75,
    "longitude": 14.4869,
    "timeOrigin": "1st century AD",
    "fermentationType": "Anaerobic salt fermentation (fish)",
    "culturalSignificance": "Garum was a staple condiment in ancient Rome and was used widely to flavor foods, reflecting the importance of fermentation in Roman culinary tradition.",
    "ingredients": [
      "fish entrails",
      "salt"
    ]
  },
  {
    "id": 20,
    "foodName": "Marmite",
    "region": "Europe",
    "country": "United Kingdom",
    "image": "https://example.com/images/marmite.jpg",
    "description": "Marmite is a savory spread made from yeast extract, a byproduct of beer brewing, resulting in a rich, salty flavor.",
    "location": "London, United Kingdom",
    "latitude": 51.5074,
    "longitude": -0.1278,
    "timeOrigin": "1902",
    "fermentationType": "Yeast extract (brewing)",
    "culturalSignificance": "Marmite is an iconic British food product, often eaten on toast; it is famously divisivewith the slogan 'love it or hate it'.",
    "ingredients": [
      "yeast extract",
      "vegetable juice concentrate",
      "spice extracts",
      "salt"
    ]
  },
  {
    "id": 21,
    "foodName": "Vegemite",
    "region": "Oceania",
    "country": "Australia",
    "image": "https://example.com/images/vegemite.jpg",
    "description": "Vegemite is a thick, dark brown spread made from leftover brewers' yeast extract with various vegetable and spice additives, known for its strong, salty flavor.",
    "location": "Melbourne, Australia",
    "latitude": -37.8136,
    "longitude": 144.9631,
    "timeOrigin": "1922",
    "fermentationType": "Yeast extract (brewing)",
    "culturalSignificance": "Vegemite is a beloved Australian staple, commonly spread on toast or crackers, symbolizing Australian identity.",
    "ingredients": [
      "yeast extract",
      "salt",
      "malt extract",
      "vegetable extracts"
    ]
  },
  {
    "id": 22,
    "foodName": "Sauerkraut (Polish Style - Kiszona kapusta)",
    "region": "Europe",
    "country": "Poland",
    "image": "https://example.com/images/polish_sauerkraut.jpg",
    "description": "Kiszona kapusta is a Polish version of sauerkraut, consisting of fermented cabbage often mixed with apples or cranberries, with a tart and fruity flavor.",
    "location": "Warsaw, Poland",
    "latitude": 52.2297,
    "longitude": 21.0122,
    "timeOrigin": "Medieval period",
    "fermentationType": "Lactic acid fermentation",
    "culturalSignificance": "Fermented cabbage dishes are common in Eastern Europe, and Polish sauerkraut is served at traditional meals and holidays.",
    "ingredients": [
      "cabbage",
      "salt",
      "apple",
      "cranberries"
    ]
  },
  {
    "id": 23,
    "foodName": "Cheddar Cheese",
    "region": "Europe",
    "country": "United Kingdom",
    "image": "https://example.com/images/cheddar.jpg",
    "description": "Cheddar is a hard, smooth-textured cheese originating from the English village of Cheddar in Somerset, made from cow's milk.",
    "location": "Somerset, England",
    "latitude": 51.1999,
    "longitude": -3.1339,
    "timeOrigin": "12th century AD",
    "fermentationType": "Milk fermentation and aging (cheese ripening)",
    "culturalSignificance": "Cheddar is one of the most popular cheeses worldwide and is a symbol of traditional British cheese-making.",
    "ingredients": [
      "cow's milk",
      "rennet",
      "salt",
      "cultures"
    ]
  },
  {
    "id": 24,
    "foodName": "Pizza Margherita",
    "region": "Europe",
    "country": "Italy",
    "image": "https://example.com/images/pizza.jpg",
    "description": "Pizza Margherita is a classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, and basil, representing the colors of the Italian flag.",
    "location": "Naples, Italy",
    "latitude": 40.8518,
    "longitude": 14.2681,
    "timeOrigin": "1889",
    "fermentationType": "Fermentation in dough (sourdough-like) and yeast fermentation (dough)",
    "culturalSignificance": "Pizza Margherita is considered a quintessential Italian dish, symbolizing Neapolitan pizza-making tradition and national pride.",
    "ingredients": [
      "flour",
      "yeast",
      "tomatoes",
      "mozzarella cheese",
      "basil",
      "olive oil",
      "salt"
    ]
  },
  {
    "id": 25,
    "foodName": "Paella",
    "region": "Europe",
    "country": "Spain",
    "image": "https://example.com/images/paella.jpg",
    "description": "Paella is a traditional Spanish rice dish originating from Valencia, cooked with saffron, meats like chicken or rabbit, seafood, and vegetables.",
    "location": "Valencia, Spain",
    "latitude": 39.4699,
    "longitude": -0.3763,
    "timeOrigin": "19th century AD",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Paella is Spain's most famous dish and represents communal cooking culture, often sharedamong families and during festivals.",
    "ingredients": [
      "rice",
      "saffron",
      "olive oil",
      "chicken",
      "rabbit",
      "beans",
      "vegetables"
    ]
  },
  {
    "id": 26,
    "foodName": "Sushi",
    "region": "East Asia",
    "country": "Japan",
    "image": "https://example.com/images/sushi.jpg",
    "description": "Sushi is a Japanese dish consisting of vinegared rice combined with various ingredients such as raw fish, vegetables, and seaweed.",
    "location": "Tokyo, Japan",
    "latitude": 35.6895,
    "longitude": 139.6917,
    "timeOrigin": "8th century AD (origin as fermented fish)",
    "fermentationType": "Originally lactic acid fermentation (now vinegar used)",
    "culturalSignificance": "Modern sushi evolved in Japan and is a symbol of Japanese cuisine worldwide, known for its precision and fresh ingredients.",
    "ingredients": [
      "rice",
      "vinegar",
      "nori (seaweed)",
      "fish",
      "vegetables"
    ]
  },
  {
    "id": 27,
    "foodName": "Tacos",
    "region": "North America",
    "country": "Mexico",
    "image": "https://example.com/images/tacos.jpg",
    "description": "Tacos are a traditional Mexican street food consisting of corn tortillas filled with a variety ofingredients like meats, beans, cheese, and vegetables.",
    "location": "Mexico City, Mexico",
    "latitude": 19.4326,
    "longitude": -99.1332,
    "timeOrigin": "Early 20th century",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Tacos are an integral part of Mexican cuisine and culture, often enjoyed as a casual meal and a source of national pride.",
    "ingredients": [
      "corn tortillas",
      "beef",
      "pork",
      "chicken",
      "beans",
      "cheese",
      "salsa"
    ]
  },
  {
    "id": 28,
    "foodName": "Jollof Rice",
    "region": "West Africa",
    "country": "Nigeria",
    "image": "https://example.com/images/jollof.jpg",
    "description": "Jollof Rice is a one-pot West African rice dish cooked with tomatoes, onions, peppers, and spices, often served with meat or fish.",
    "location": "Lagos, Nigeria",
    "latitude": 6.5244,
    "longitude": 3.3792,
    "timeOrigin": "17th century AD",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Jollof Rice is a beloved dish across West Africa, with regional variations; it is a symbol of celebration and is often featured at gatherings.",
    "ingredients": [
      "rice",
      "tomatoes",
      "onions",
      "bell peppers",
      "spices",
      "vegetable oil"
    ]
  },
  {
    "id": 29,
    "foodName": "Pad Thai",
    "region": "Southeast Asia",
    "country": "Thailand",
    "image": "https://example.com/images/pad_thai.jpg",
    "description": "Pad Thai is a stir-fried rice noodle dish from Thailand, typically made with shrimp or chicken, eggs, tofu, tamarind, fish sauce, and peanuts.",
    "location": "Bangkok, Thailand",
    "latitude": 13.7563,
    "longitude": 100.5018,
    "timeOrigin": "1930s (modern dish)",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Pad Thai is a national dish of Thailand, often served as street food and known for its balanced flavors of sweet, salty, and sour.",
    "ingredients": [
      "rice noodles",
      "shrimp",
      "tofu",
      "eggs",
      "tamarind",
      "fish sauce",
      "peanuts",
      "bean sprouts"
    ]
  },
  {
    "id": 30,
    "foodName": "Masala Dosa",
    "region": "South Asia",
    "country": "India",
    "image": "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
    "description": "Masala Dosa is a South Indian dish featuring a crispy fermented rice pancake (dosa) wrapped around a spicy potato filling (masala).",
    "location": "Madras (Chennai), India",
    "latitude": 13.0827,
    "longitude": 80.2707,
    "timeOrigin": "16th century AD",
    "fermentationType": "Lactic acid fermentation",
    "culturalSignificance": "Masala Dosa is a beloved Indian street food and breakfast item, reflecting the importance of fermented rice batter in South Indian cuisine.",
    "ingredients": [
      "rice",
      "black lentils",
      "potatoes",
      "onions",
      "turmeric",
      "mustard seeds",
      "curry leaves"
    ]
  },
  {
    "id": 31,
    "foodName": "Falafel",
    "region": "Middle East",
    "country": "Egypt",
    "image": "https://th.bing.com/th/id/OIP.rtNqMjt0rHYLrZL-rrPgPgHaE8?rs=1&pid=ImgDetMain",
    "description": "Falafel are deep-fried balls or patties made from ground chickpeas or fava beans, mixed with herbs and spices, traditionally served in pita bread.",
    "location": "Cairo, Egypt",
    "latitude": 30.0444,
    "longitude": 31.2357,
    "timeOrigin": "5th century BC",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Falafel is a popular street food across the Middle East and has cultural significance asa symbol of vegetarian cuisine, often eaten during Lent in some traditions.",
    "ingredients": [
      "chickpeas",
      "fava beans",
      "garlic",
      "parsley",
      "cumin",
      "coriander",
      "salt"
    ]
  },
  {
    "id": 32,
    "foodName": "Hummus",
    "region": "Middle East",
    "country": "Lebanon",
    "image": "https://example.com/images/hummus.jpg",
    "description": "Hummus is a creamy dip made from mashed chickpeas blended with tahini, olive oil, lemon juice, and garlic, commonly eaten with pita bread.",
    "location": "Beirut, Lebanon",
    "latitude": 33.8938,
    "longitude": 35.5018,
    "timeOrigin": "13th century AD",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Hummus is a staple in Middle Eastern cuisine, enjoyed across the region and symbolizing hospitality when served to guests.",
    "ingredients": [
      "chickpeas",
      "tahini",
      "olive oil",
      "lemon juice",
      "garlic",
      "salt"
    ]
  },
  {
    "id": 33,
    "foodName": "Pho",
    "region": "Southeast Asia",
    "country": "Vietnam",
    "image": "https://example.com/images/pho.jpg",
    "description": "Pho is a Vietnamese soup consisting of broth, rice noodles, herbs, and meat (usually beef or chicken), often enjoyed for breakfast or lunch.",
    "location": "Hanoi, Vietnam",
    "latitude": 21.0278,
    "longitude": 105.8342,
    "timeOrigin": "Early 20th century",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Pho is Vietnam's national dish and holds cultural importance, reflecting French and Asian culinary influences in Vietnamese cuisine.",
    "ingredients": [
      "rice noodles",
      "beef or chicken",
      "star anise",
      "cloves",
      "ginger",
      "fish sauce",
      "herbs"
    ]
  },
  {
    "id": 34,
    "foodName": "Ramen",
    "region": "East Asia",
    "country": "Japan",
    "image": "https://example.com/images/ramen.jpg",
    "description": "Ramen is a Japanese noodle soup dish with wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and topped with meat, seaweed, and vegetables.",
    "location": "Fukuoka, Japan",
    "latitude": 33.5902,
    "longitude": 130.4017,
    "timeOrigin": "19th century AD (influenced by Chinese noodle soup)",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Ramen has evolved from street food to a cultural phenomenon in Japan, with countless regional styles and a dedicated fan base worldwide.",
    "ingredients": [
      "wheat noodles",
      "pork or chicken",
      "soy sauce or miso",
      "scallions",
      "seaweed",
      "egg"
    ]
  },
  {
    "id": 35,
    "foodName": "Tajine",
    "region": "North Africa",
    "country": "Morocco",
    "image": "https://example.com/images/tajine.jpg",
    "description": "Tagine is a slow-cooked North African stew named after the earthenware pot in which it is cooked,typically containing meat or fish, vegetables, and aromatic spices.",
    "location": "Marrakech, Morocco",
    "latitude": 31.6295,
    "longitude": -7.9811,
    "timeOrigin": "Berber origins (ancient)",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Tagine is a quintessential Moroccan dish, reflecting the country’s spice trade history and communal dining customs.",
    "ingredients": [
      "lamb",
      "olive oil",
      "onions",
      "garlic",
      "ginger",
      "saffron",
      "preserved lemons",
      "olives"
    ]
  },
  {
    "id": 36,
    "foodName": "Empanadas",
    "region": "South America",
    "country": "Argentina",
    "image": "https://example.com/images/empanadas.jpg",
    "description": "Empanadas are baked or fried pastry turnovers filled with various ingredients like minced beef, chicken, cheese, or corn, often served as appetizers or snacks.",
    "location": "Buenos Aires, Argentina",
    "latitude": -34.6037,
    "longitude": -58.3816,
    "timeOrigin": "Colonial era",
    "fermentationType": "None (non-fermented)",
    "culturalSignificance": "Empanadas are a popular dish across Latin America, with Argentina's version being famous, representing regional diversity and festive occasions.",
    "ingredients": [
      "flour",
      "beef",
      "onion",
      "paprika",
      "olives",
      "raisins",
      "eggs",
      "salt"
    ]
  },
  {
    "id": 37,
    "foodName": "Gari",
    "region": "West Africa",
    "country": "Ghana",
    "image": "https://example.com/images/gari.jpg",
    "description": "Gari is a granular flour made from fermented and roasted cassava, often used to make a porridge or dough called 'eba' in West African cuisine.",
    "location": "Accra, Ghana",
    "latitude": 5.6037,
    "longitude": -0.187,
    "timeOrigin": "Ancient times",
    "fermentationType": "Lactic acid fermentation (cassava)",
    "culturalSignificance": "Gari is a staple food in Ghana and surrounding countries, valued for its shelf stabilityand energy content in West African diets.",
    "ingredients": [
      "cassava",
      "water"
    ]
  },
  {
    "id": 38,
    "foodName": "Ogi",
    "region": "West Africa",
    "country": "Nigeria",
    "image": "https://example.com/images/ogi.jpg",
    "description": "Ogi is a fermented cereal pudding made from maize or millet, a traditional West African breakfastporridge with a tangy taste.",
    "location": "Lagos, Nigeria",
    "latitude": 6.5244,
    "longitude": 3.3792,
    "timeOrigin": "Ancient times",
    "fermentationType": "Lactic acid fermentation (cereal)",
    "culturalSignificance": "Ogi is commonly consumed in Nigeria and neighboring countries, reflecting the traditional fermentation of grains for preservation and nutrition.",
    "ingredients": [
      "maize",
      "water"
    ]
  },
  {
    "id": 39,
    "foodName": "Bagoong",
    "region": "Southeast Asia",
    "country": "Philippines",
    "image": "https://example.com/images/bagoong.jpg",
    "description": "Bagoong is a Filipino fermented condiment made from fish or shrimp, salted and fermented into a pungent paste used for seasoning and dips.",
    "location": "Manila, Philippines",
    "latitude": 14.5995,
    "longitude": 120.9842,
    "timeOrigin": "Pre-colonial times",
    "fermentationType": "Anaerobic salt fermentation (shrimp or fish)",
    "culturalSignificance": "Bagoong is integral to Philippine cuisine, used in dishes like kare-kare and as a table condiment, reflecting local preservation methods.",
    "ingredients": [
      "shrimp",
      "salt"
    ]
  },
  {
    "id": 40,
    "foodName": "Doubanjiang",
    "region": "East Asia",
    "country": "China",
    "image": "https://example.com/images/doubanjiang.jpg",
    "description": "Doubanjiang is a spicy fermented paste from Sichuan, China, made primarily from broad beans, soybeans, chili peppers, and salt, used to add depth and heat to dishes.",
    "location": "Chengdu, China",
    "latitude": 30.5728,
    "longitude": 104.0668,
    "timeOrigin": "Qing Dynasty",
    "fermentationType": "Mixed fermentation (Aspergillus mold and lactic acid)",
    "culturalSignificance": "Doubanjiang is a hallmark of Sichuan cuisine, imparting the characteristic spicy and savory flavors to many dishes like mapo tofu.",
    "ingredients": [
      "broad beans",
      "soybeans",
      "chili peppers",
      "salt",
      "Aspergillus mold"
    ]
  },
  {
    "id": 41,
    "foodName": "Fufu",
    "region": "West Africa",
    "country": "Nigeria",
    "image": "https://example.com/images/fufu.jpg",
    "description": "Fufu is a dough-like staple food in West and Central Africa, traditionally made by boiling and pounding starchy crops like cassava or plantains.",
    "location": "Lagos, Nigeria",
    "latitude": 6.5244,
    "longitude": 3.3792,
    "timeOrigin": "Ancient times",
    "fermentationType": "Lactic acid fermentation (cassava or plantains)",
    "culturalSignificance": "Fufu is eaten across many African cultures, often served with soups or stews, symbolizing communal dining and cultural heritage.",
    "ingredients": [
      "cassava",
      "plantains",
      "water"
    ]
  },
  {
    "id": 42,
    "foodName": "Soy Sauce",
    "region": "East Asia",
    "country": "Japan",
    "image": "https://example.com/images/soy_sauce.jpg",
    "description": "Soy sauce is a liquid condiment made from fermented soybeans and wheat, known for its salty umamiflavor, widely used in East Asian cuisines.",
    "location": "Tokyo, Japan",
    "latitude": 35.6762,
    "longitude": 139.6503,
    "timeOrigin": "17th century AD",
    "fermentationType": "Koji fermentation (Aspergillus mold) and brine fermentation",
    "culturalSignificance": "Soy sauce is fundamental in Japanese cuisine and also used globally, exemplifying traditional fermentation techniques and flavors of East Asia.",
    "ingredients": [
      "soybeans",
      "wheat",
      "salt",
      "Aspergillus mold"
    ]
  },
  {
    "id": 43,
    "foodName": "Pickled Cucumber",
    "region": "North America",
    "country": "United States",
    "image": "https://example.com/images/pickles.jpg",
    "description": "Pickled cucumbers are cucumbers fermented in a brine of water, vinegar, and spices, resulting in crunchy, tangy pickles.",
    "location": "New York City, USA",
    "latitude": 40.7128,
    "longitude": -74.006,
    "timeOrigin": "19th century AD (immigrant tradition)",
    "fermentationType": "Lactic acid fermentation (vegetables)",
    "culturalSignificance": "Pickles are popular in American cuisine, often featured in sandwiches and as a snack, reflecting immigrant influences and preservation techniques.",
    "ingredients": [
      "cucumbers",
      "water",
      "vinegar",
      "salt",
      "dill",
      "garlic"
    ]
  },
  {
    "id": 44,
    "foodName": "Apple Cider",
    "region": "Europe",
    "country": "United Kingdom",
    "image": "https://example.com/images/cider.jpg",
    "description": "Apple cider is an alcoholic beverage made from the fermentation of apple juice, ranging from sweet to dry, and often spiced or served warm in winter.",
    "location": "Somerset, England",
    "latitude": 51.1999,
    "longitude": -3.1339,
    "timeOrigin": "Roman era",
    "fermentationType": "Ethanol fermentation (fruit)",
    "culturalSignificance": "Cider has a long history in English culture, associated with rural traditions and festivals, and is also popular in many cider-producing countries.",
    "ingredients": [
      "apple juice",
      "yeast"
    ]
  },
  {
    "id": 45,
    "foodName": "Mead",
    "region": "Northern Europe",
    "country": "Norway",
    "image": "https://example.com/images/mead.jpg",
    "description": "Mead is an ancient alcoholic drink created by fermenting honey with water, sometimes with fruits or spices, known as 'honey wine'.",
    "location": "Oslo, Norway",
    "latitude": 59.9139,
    "longitude": 10.7522,
    "timeOrigin": "Ancient era",
    "fermentationType": "Ethanol fermentation (honey)",
    "culturalSignificance": "Mead holds historical significance in Norse and Celtic cultures and has seen a resurgence as a craft beverage reflecting tradition.",
    "ingredients": [
      "honey",
      "water",
      "yeast",
      "fruits (optional)"
    ]
  },
  {
    "id": 46,
    "foodName": "Kumis",
    "region": "Central Asia",
    "country": "Kazakhstan",
    "image": "https://example.com/images/kumis.jpg",
    "description": "Kumis is a traditional fermented dairy drink made from mare's (horse) milk, enjoyed in Central Asia for its slightly sour taste and effervescence.",
    "location": "Astana, Kazakhstan",
    "latitude": 51.1694,
    "longitude": 71.4491,
    "timeOrigin": "Ancient times",
    "fermentationType": "Lactic acid and ethanol fermentation (mare's milk)",
    "culturalSignificance": "Kumis is a cultural beverage of nomadic peoples of Central Asia, valued for its nutrients and as a symbol of pastoral tradition.",
    "ingredients": [
      "mare's milk",
      "starter culture"
    ]
  },
  {
    "id": 47,
    "foodName": "Palm Wine",
    "region": "West Africa",
    "country": "Ghana",
    "image": "https://example.com/images/palm_wine.jpg",
    "description": "Palm wine is a traditional alcoholic beverage created from the natural fermentation of sap extracted from various species of palm trees.",
    "location": "Accra, Ghana",
    "latitude": 5.6037,
    "longitude": -0.187,
    "timeOrigin": "Ancient times",
    "fermentationType": "Ethanol fermentation (wild yeasts)",
    "culturalSignificance": "Palm wine is widely consumed in West and Central Africa as well as parts of Asia, and often features in social ceremonies and rituals.",
    "ingredients": [
      "palm sap"
    ]
  },
  {
    "id": 48,
    "foodName": "Tapuy",
    "region": "Southeast Asia",
    "country": "Philippines",
    "image": "https://example.com/images/tapuy.jpg",
    "description": "Tapuy is a traditional Filipino rice wine, brewed by fermenting glutinous rice with anamalà (starter cultures) and then filtering the mixture.",
    "location": "Baguio, Philippines",
    "latitude": 16.4023,
    "longitude": 120.596,
    "timeOrigin": "Indigenous tradition",
    "fermentationType": "Ethanol fermentation (rice)",
    "culturalSignificance": "Tapuy is an important ceremonial drink among indigenous groups in the Philippines, symbolizing hospitality and celebration.",
    "ingredients": [
      "glutinous rice",
      "water",
      "anamalà starter culture"
    ]
  },
  {
    "id": 49,
    "foodName": "San Francisco Sourdough Bread",
    "region": "North America",
    "country": "United States",
    "image": "https://weekendbakery.com/posts/san-francisco-style-sourdough-bread/",
    "description": "San Francisco sourdough is a tangy, chewy bread made from a naturally fermented starter of wild yeasts and lactobacilli, unique for its local microbial culture.",
    "location": "San Francisco, USA",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "timeOrigin": "19th century AD (Gold Rush era)",
    "fermentationType": "Wild yeast and lactic acid fermentation (sourdough)",
    "culturalSignificance": "This bread is iconic to San Francisco and reflects the city’s gold rush history, remaining a popular artisan bread worldwide.",
    "ingredients": [
      "flour",
      "water",
      "salt"
    ]
  },
  {
    "id": 50,
    "foodName": "Gundruk",
    "region": "South Asia",
    "country": "Nepal",
    "image": "https://junifoods.com/wp-content/uploads/2024/02/Gundruk-High-Nutrition-Fermented-Greens-%E0%A4%97%E0%A5%81%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%81%E0%A4%95.jpg",
    "description": "Gundruk is a Nepalese fermented leafy green dish made from mustard greens, radish leaves, and other vegetables, sun-dried then fermented.",
    "location": "Kathmandu, Nepal",
    "latitude": 27.7172,
    "longitude": 85.324,
    "timeOrigin": "Ancient tradition",
    "fermentationType": "Lactic acid fermentation (vegetables)",
    "culturalSignificance": "Gundruk is an important source of nutrients during the winter months in Nepal and is a traditional part of rural cuisine.",
    "ingredients": [
      "mustard greens",
      "radish leaves",
      "salt"
    ]
  }
];