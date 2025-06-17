import { useLocation, useNavigate } from 'react-router-dom';
import { StoryStep } from '../types/FoodCulture';
import { motion } from 'framer-motion';

function ViewStoryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const story = location.state?.story as StoryStep[];

  if (!story || story.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">
        No story data available. Please go back and generate a story first.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-orange-600">🌍 Food-Culture Story Journey</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-orange-500 hover:underline text-sm"
          >
            ← Go Back
          </button>
        </div>

        {story.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white rounded-xl shadow-md mb-6 p-6 border-l-4 border-orange-400"
          >
            <h2 className="text-xl font-semibold text-red-500 mb-2">{step.narrative.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{step.narrative.story}</p>

            <div className="mt-4">
              <img
                src={step.doc.image} // random image based on food
                alt={step.doc.foodName}
                className="rounded-md shadow-lg w-full object-cover max-h-60"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ViewStoryPage;
