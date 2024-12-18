import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface HistoryEntry {
  id: string;
  date: Date;
  ingredients: string[];
  recipes: Recipe[];
  imageUrl: string;
}

interface HistorySectionProps {
  history: HistoryEntry[];
}

export const HistorySection: React.FC<HistorySectionProps> = ({ history }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold flex items-center">
        <Calendar className="w-6 h-6 mr-2 text-indigo-600" />
        Analysis History
      </h2>
      
      {history.map((entry) => (
        <div key={entry.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              {entry.date.toLocaleDateString()}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <img
                src={entry.imageUrl}
                alt="Historical ingredients"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Ingredients Used</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {entry.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="font-medium text-gray-900 mb-4">Generated Recipes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {entry.recipes.map((recipe) => (
                <div key={recipe.id} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">{recipe.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {recipe.prepTime} minutes
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};