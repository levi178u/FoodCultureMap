from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .models import ChatRequest, ChatResponse
from .rag import chat_with_food_expert
from .database import db
import uvicorn
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Food Culture Chat API", 
              description="API for chatting with a food culture expert.")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    await db.connect()
    await db.create_vector_index()

@app.on_event("shutdown")
async def shutdown_db_client():
    await db.close()

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        response = await chat_with_food_expert(request.message, request.session_id)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=5000, reload=True) 