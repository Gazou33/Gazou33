export interface OpenAIResponse {
  id: string;
  name: string;
  prepTime: number;
  ingredients: string[];
  instructions: string[];
  category: 'quick' | 'intermediate' | 'advanced';
  imageUrl?: string;
}

export interface OpenAIError {
  message: string;
  code?: string;
  status?: number;
}