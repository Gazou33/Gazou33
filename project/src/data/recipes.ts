import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Quick Avocado Toast',
    prepTime: 10,
    imageUrl: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&q=80',
    ingredients: ['Bread', 'Avocado', 'Salt', 'Pepper', 'Red pepper flakes'],
    instructions: ['Toast bread', 'Mash avocado', 'Season and serve'],
    category: 'quick'
  },
  {
    id: '2',
    name: 'Pasta Primavera',
    prepTime: 25,
    imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80',
    ingredients: ['Pasta', 'Mixed vegetables', 'Olive oil', 'Garlic', 'Parmesan'],
    instructions: ['Boil pasta', 'Sauté vegetables', 'Combine and season'],
    category: 'intermediate'
  },
  {
    id: '3',
    name: 'Homemade Lasagna',
    prepTime: 45,
    imageUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80',
    ingredients: ['Lasagna sheets', 'Ground beef', 'Tomato sauce', 'Cheese', 'Herbs'],
    instructions: ['Prepare sauce', 'Layer ingredients', 'Bake until golden'],
    category: 'advanced'
  }
];