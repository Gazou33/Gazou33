import { useState } from 'react';
import { analyzeImage } from '../services/openai/api';
import type { OpenAIResponse } from '../types/openai';

export const useImageAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<OpenAIResponse[]>([]);

  const analyzeIngredients = async (imageData: string) => {
    setIsAnalyzing(true);
    setError(null);

    try {
      const results = await analyzeImage(imageData);
      setRecipes(results);
    } catch (err) {
      const error = err as { message: string };
      setError(error.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    isAnalyzing,
    error,
    recipes,
    analyzeIngredients
  };
};