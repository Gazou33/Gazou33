import React from 'react';
import { Clock } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-3 md:p-4">
        <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">{recipe.name}</h3>
        <div className="flex items-center text-gray-600 mb-3 text-sm">
          <Clock className="w-4 h-4 mr-1 flex-shrink-0" />
          <span>{recipe.prepTime} mins</span>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-sm md:text-base">Ingredients:</h4>
          <ul className="list-disc list-inside text-xs md:text-sm text-gray-600">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index} className="line-clamp-1">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};