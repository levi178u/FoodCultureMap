export interface FoodCultureDoc {
  id: string;
  foodName: string;
  region: string;
  country: string;
  image: string;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  timeOrigin: string;
  type: string;
  culturalSignificance: string;
  ingredients: string[];
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface StoryStep {
  doc: FoodCultureDoc;
  narrative: string;
  delay: number;
}