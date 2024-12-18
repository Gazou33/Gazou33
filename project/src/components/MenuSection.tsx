import React from 'react';
import { Recipe } from '../types/Recipe';
import { RecipeCard } from './RecipeCard';

interface MenuSectionProps {
  title: string;
  recipes: Recipe[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, recipes }) => {
  if (recipes.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 px-2 md:px-0">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 px-2 md:px-0">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};