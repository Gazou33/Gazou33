export interface Recipe {
  id: string;
  name: string;
  prepTime: number; // in minutes
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
  category: 'quick' | 'intermediate' | 'advanced';
}