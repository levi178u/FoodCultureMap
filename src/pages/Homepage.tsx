import  { useState } from 'react';
import MapComponent from '../components/MapComponent';
import ChatBot from '../components/ChatBot';
import { FoodCultureDoc, ChatMessage, StoryStep } from '../types/FoodCulture';
import { foodCultureDatabase } from '../data/foodCultureData';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MessageCircle, LogOut,Sparkles } from 'lucide-react';
import useEmbeddings from "../hooks/useEmbeddings";
import FoodCard from '../components/FoodCard'
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
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

      const story = createStoryFromDocs(relevantDocs, message);
      setStorySteps(story);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: `Fascinating question! Let me take you on a journey through ${relevantDocs.length} remarkable cultures that shaped fermentation history. Watch as I guide you through each region...`,
        isUser: false,
        timestamp: new Date()
      };
      
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
    console.log(embeds)
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
    return data.topDocs as FoodCultureDoc[]; // assuming backend sends { topDocs: [...] }
  } catch (error) {
    console.error('Error fetching relevant docs:', error);
    return [];
  }
};

/// we have to use RAG here IGuess...
  const createStoryFromDocs = (docs: FoodCultureDoc[], query: string): StoryStep[] => {
    const getContextualNarrative = (doc: FoodCultureDoc, index: number): string => {
      const isFirst = index === 0;
      const isLast = index === docs.length - 1;
      let narrative = '';
      
      if (isFirst) {
        narrative = `Our fermentation journey begins in ancient ${doc.country}, around ${doc.timeOrigin}. Here in ${doc.location}, the people discovered ${doc.foodName} through ${doc.type}. `;
      } else if (isLast) {
        narrative = `Finally, our journey brings us to ${doc.country}, where ${doc.foodName} represents the culmination of fermentation mastery. `;
      } else {
        narrative = `Next, we travel to ${doc.country} in the ${doc.region} region, where ${doc.foodName} emerged around ${doc.timeOrigin}. `;
      }
      
      narrative += `${doc.culturalSignificance} This ${doc.type} technique created a food that would become central to ${doc.country}'s culinary identity.`;
      
      return narrative;
    };

    return docs.map((doc, index) => ({
      doc,
      narrative: getContextualNarrative(doc, index),
      delay: index * 5000 // 5 seconds between each story step
    }));
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
            text: step.narrative,
            isUser: false,
            timestamp: new Date()
          };
          
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
        text: "What an incredible journey through fermentation history! Each culture contributed unique techniques that shaped how we preserve and enjoy food today. Feel free to ask me more questions about any specific region or fermentation method!",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, endMessage]);
    }, story.length * 5000 + 3000);
  };
  const handleLogout = () => {
  localStorage.removeItem('token');
  navigate('/login');
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
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
        <Globe className="w-6 h-6 text-white" />
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
                <h2 className="font-semibold">FC Guide</h2>
              </div>
              <p className="text-sm text-orange-100 mt-1">Ask me about food-culture history!</p>
            </div>
            <div className="h-full flex flex-col max-h-[600px] border rounded-xl shadow-lg">
            <ChatBot
              messages={messages}
              onSendMessage={handleChatMessage}
              isProcessing={isStoryMode}
            />
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
    </div>
  );
}

export default Homepage;