import { useState, useEffect } from 'react';
import { Recipe } from '../types/Recipe';

interface HistoryEntry {
  id: string;
  date: Date;
  ingredients: string[];
  recipes: Recipe[];
  imageUrl: string;
}

export const useRecipeHistory = () => {
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    const saved = localStorage.getItem('recipe-history');
    return saved ? JSON.parse(saved, (key, value) => {
      if (key === 'date') return new Date(value);
      return value;
    }) : [];
  });

  useEffect(() => {
    localStorage.setItem('recipe-history', JSON.stringify(history));
  }, [history]);

  const addToHistory = (entry: Omit<HistoryEntry, 'id' | 'date'>) => {
    const newEntry: HistoryEntry = {
      ...entry,
      id: crypto.randomUUID(),
      date: new Date(),
    };
    setHistory(prev => [newEntry, ...prev]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history,
    addToHistory,
    clearHistory,
  };
};