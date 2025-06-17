from typing import List, Optional, Dict
from pydantic import BaseModel, Field
from datetime import datetime
from enum import Enum

class Role(str, Enum):
    USER = "user"
    ASSISTANT = "assistant"
    SYSTEM = "system"

class Dish(BaseModel):
    id: str
    name: str
    dish: str
    description: str
    embedding: List[float]
    region: str
    country: str
    culturalSignificance: str
    ingredients: List[str]
    preparationMethod: str
    occasions: List[str]
    tags: List[str]
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)


class ChatMessage(BaseModel):
    role: Role
    content: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    metadata: Dict[str, str] = Field(default_factory=dict)

class ChatSession(BaseModel):
    session_id: str
    messages: List[ChatMessage] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    relevantDishes: List[dict]
    session_id: str 

class RelevantDish(BaseModel):
    dish_id: str
    name: str
    similarity_score: float
    matching_fields: Dict[str, str] = Field(default_factory=dict)