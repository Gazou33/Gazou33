import React from 'react';
import { Camera } from 'lucide-react';

interface WelcomeSectionProps {
  onCameraClick: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onCameraClick }) => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 px-4">
        Take a picture of your ingredients to get the best recipes
      </h2>
      <p className="text-gray-600 mb-6 px-4 text-sm md:text-base">
        Our AI will analyze your ingredients and suggest personalized recipes based on preparation time
      </p>
      
      <button
        onClick={onCameraClick}
        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-base md:text-lg font-medium mb-8 touch-manipulation"
      >
        <Camera className="w-5 h-5 md:w-6 md:h-6" />
        Take Picture
        <span className="hidden md:inline"> of Ingredients</span>
      </button>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 px-2 md:px-0">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
            alt="Fresh vegetables"
            className="w-full h-full object-cover hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80"
            alt="Fresh fruits"
            className="w-full h-full object-cover hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80"
            alt="Spices and herbs"
            className="w-full h-full object-cover hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&q=80"
            alt="Pantry ingredients"
            className="w-full h-full object-cover hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};