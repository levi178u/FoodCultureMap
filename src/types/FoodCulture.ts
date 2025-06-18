export interface FoodCultureDoc {
  id: number;
  foodName: string;
  region: string;
  country: string;
  image: string;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  timeOrigin: string;
  fermentationType: string;
  culturalSignificance: string;
  ingredients: string[];
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}


export interface StorySegment  {
  title: string;
  story: string;
};

export interface StoryStep  {
  doc: FoodCultureDoc;
  narrative: StorySegment;
  delay: number;
};
