import React from 'react';
import { Utensils } from 'lucide-react';

interface IngredientAnalysisProps {
  ingredients: string[];
  imageUrl: string | null;
}

export const IngredientAnalysis: React.FC<IngredientAnalysisProps> = ({
  ingredients,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center">
        <Utensils className="w-5 h-5 mr-2 text-indigo-600" />
        Detected Ingredients
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {imageUrl && (
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt="Captured ingredients"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Ingredient List</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 flex-shrink-0"></span>
                  <span className="line-clamp-1">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};