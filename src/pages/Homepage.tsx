import  { useState } from 'react';
import MapComponent from '../components/MapComponent';
import ChatBot from '../components/ChatBot';
import { FoodCultureDoc, ChatMessage, StoryStep, StorySegment } from '../types/FoodCulture';
import { foodCultureDatabase } from '../data/foodCultureData';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MessageCircle, LogOut,Sparkles } from 'lucide-react';
import useEmbeddings from "../hooks/useEmbeddings";
import FoodCard from '../components/FoodCard'
import { useNavigate } from 'react-router-dom';

function Homepage() {
 const speak = (text: string) => {
  const synth = window.speechSynthesis;
  if (!synth) return;

  // Cancel any ongoing speech
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 1;
  utterance.pitch = 1;

  utterance.onstart = () => setIsSpeaking(true);
  utterance.onend = () => setIsSpeaking(false);

  synth.speak(utterance);
};
const stopSpeaking = () => {
  window.speechSynthesis.cancel();
  setIsSpeaking(false);
};

  const navigate = useNavigate();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm your Food-Culture Explorer guide. Ask me about how Food evolved across cultures, and I'll take you on an animated journey through history!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isStoryMode, setIsStoryMode] = useState(false);
  const [currentStoryStep, setCurrentStoryStep] = useState(0);
  const [storySteps, setStorySteps] = useState<StoryStep[]>([]);
  const [ docs, setDocs] = useState<FoodCultureDoc[]|null>([])
  const [selectedFood, setSelectedFood] = useState<FoodCultureDoc | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 0]);
  const [mapZoom, setMapZoom] = useState(2);

  const handleChatMessage = async (message: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI processing
    setTimeout(async() => {
      const relevantDocs = await getRelevantDocs(message);
        
      if (relevantDocs.length === 0) {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          text: "Hmm, I couldn’t find much on that. Try rephrasing your question?",
          isUser: false,
          timestamp: new Date()
        }]);
        return;
      }

      const story = await createStoryFromDocs(relevantDocs, message);
      setStorySteps(story);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: `Fascinating question! Let me take you on a journey through ${relevantDocs.length} remarkable cultures that shaped Food history. Watch as I guide you through each region...`,
        isUser: false,
        timestamp: new Date()
      };
      speak(botMessage.text); // Speak intro
      setMessages(prev => [...prev, botMessage]);
      setIsStoryMode(true);
      setCurrentStoryStep(0);
      
      // Start the story animation sequence
      setTimeout(() => {
        startStoryAnimation(story);
      }, 1500);
    }, 1000);
  };
///send user query backend and get top 5 docs using semantic search
  const getRelevantDocs = async (query: string): Promise<FoodCultureDoc[]> => {
  try {
    const embeds = await useEmbeddings(query);
    //console.log(embeds)
    const response = await fetch('http://localhost:5000/api/rag/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query , embeds })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch relevant documents');
    }

    const data = await response.json();
    console.log(data.topDocs)
    setDocs(data.topDocs)
    return data.topDocs as FoodCultureDoc[]; // assuming backend sends { topDocs: [...] }
  } catch (error) {
    console.error('Error fetching relevant docs:', error);
    return [];
  }
};

/// we have to use RAG here IGuess...
  const createStoryFromDocs = async (
  docs: FoodCultureDoc[],
  query: string
): Promise<StoryStep[]> => {
  const getContextualNarrative = async (): Promise<StorySegment[]> => {
    try {
      const response = await fetch('http://localhost:5000/api/rag/askRag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, docs }), // sending all docs at once
      });

      if (!response.ok) {
        throw new Error('Failed to fetch relevant documents');
      }

      const data = await response.json();
      console.log(data.rag); // should be array of { title, story }
      return data.rag as StorySegment[];
    } catch (error) {
      console.error('Error fetching RAG narrative:', error);
      return [];
    }
  };

  const narratives = await getContextualNarrative();

  // Map each document with its corresponding narrative segment
  const storySteps: StoryStep[] = docs.map((doc, index) => ({
    doc,
    narrative: narratives[index] || { title: 'N/A', story: 'No story found.' },
    delay: index * 5000,
  }));

  return storySteps;
};

  const startStoryAnimation = (story: StoryStep[]) => {
    // Reset map to world view first
    setMapCenter([20, 0]);
    setMapZoom(2);
    setSelectedFood(null);
    
    story.forEach((step, index) => {
      setTimeout(() => {
        // Update current step
        setCurrentStoryStep(index);
        // Animate to the location
        setMapCenter([step.doc.latitude, step.doc.longitude]);
        setMapZoom(6);
        // Show the food card after a brief delay
        setTimeout(() => {
          setSelectedFood(step.doc);
        }, 1000);
        
        // Add narrative message
        setTimeout(() => {
          const narrativeMessage: ChatMessage = {
            id: `story-${Date.now()}-${index}`,
            text: step.narrative.story,
            isUser: false,
            timestamp: new Date()
          };
           // 🔊 Speak the story text here

          
          setMessages(prev => [...prev, narrativeMessage]);
        }, 1500);
        
      }, step.delay);
    });
    
    // End story mode and return to world view
    setTimeout(() => {
      setIsStoryMode(false);
      setCurrentStoryStep(0);
      setMapZoom(2);
      setMapCenter([20, 0]);
      setSelectedFood(null);
      
      const endMessage: ChatMessage = {
        id: `story-end-${Date.now()}`,
        text: "What an incredible journey through Food-Culture Evloution history! Each culture contributed unique techniques that shaped how we preserve and enjoy food today. Feel free to ask me more questions about any specific region or Food Culture!",
        isUser: false,
        timestamp: new Date()
      };
      speak(endMessage.text)
      
      setMessages(prev => [...prev, endMessage]);
    }, story.length * 5000 + 3000);
  };
  const handleLogout = () => {
  localStorage.removeItem('token');
  navigate('/login');
};
const handleViewStory = () => {
  navigate('/viewStory', { state: { story: storySteps } }); // Pass the storySteps
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
  <motion.header 
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-orange-200/50 px-6 py-4"
>
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    
    {/* Logo and Title */}
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br  rounded-full flex items-center justify-center">
        <img src="/logo2.png"></img>
        
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Food Culture Explorer</h1>
        <p className="text-sm text-gray-600">Discover the world through mapping Food-Culture</p>
      </div>
    </div>

    {/* Right-side Nav Items */}
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1 text-sm text-gray-600">
        <Sparkles className="w-4 h-4" />
        <span>AI-Powered Cultural Journey</span>
      </div>
      <div 
        onClick={handleViewStory}
        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600 cursor-pointer transition"
      >
        <Globe className="w-4 h-4" />
        <span>View Story</span>
      </div>
      <div 
        onClick={handleLogout}
        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600 cursor-pointer transition"
      >
        <LogOut className="w-4 h-4" />
        <span>Logout</span>
      </div>
    </div>
  </div>
</motion.header>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
          
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-200/30"
          >
            <div className="h-full relative">
              <MapComponent 
                foods={foodCultureDatabase}
                center={mapCenter}
                zoom={mapZoom}
                selectedFood={selectedFood}
                onFoodSelect={setSelectedFood}
                isStoryMode={isStoryMode}
                storySteps={storySteps}
                currentStoryStep={currentStoryStep}
              />
              
              {/* Story Mode Indicator */}
              <AnimatePresence>
                {isStoryMode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-3 z-20"
                  >
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <div>
                      <div className="text-sm font-medium">Story Mode Active</div>
                      <div className="text-xs text-orange-100">
                        Step {currentStoryStep + 1} of {storySteps.length}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Chat Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl border border-orange-200/30 flex flex-col"
          >
            <div className="p-4 border-b border-orange-200/30 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5" />
                <h2 className="font-semibold">Ask KalFu Bot</h2>
              </div>
              <p className="text-sm text-orange-100 mt-1">Ask me about food-culture history!</p>
            </div>
            <div className="h-full flex flex-col max-h-[600px] border rounded-xl shadow-lg">
            <ChatBot
              messages={messages}
              onSendMessage={handleChatMessage}
              isProcessing={isStoryMode}
            />
           {storySteps.length > 0 && !isStoryMode && (
  <button
    onClick={handleViewStory}
    className="mt-4 bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-lg hover:brightness-110 transition"
  >
    📖 View Generated Story
  </button>
)}
          </div>
         

          </motion.div>
        </div>

        {/* Selected Food Card */}
  <AnimatePresence>
  {selectedFood && (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="fixed top-[120px] right-4 w-full max-w-md bg-white shadow-xl rounded-xl z-[60] overflow-hidden"
    >
      <FoodCard food={selectedFood} onClose={() => setSelectedFood(null)} />
    </motion.div>
  )}
</AnimatePresence>



      </div>
      {isSpeaking && (
      <button
        onClick={stopSpeaking}
        className="fixed top-4 right-4 z-50 bg-red-500 text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        🔇 Stop Narration
      </button>
    )}

    </div>
  );
}

export default Homepage;