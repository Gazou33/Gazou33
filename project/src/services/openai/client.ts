import OpenAI from 'openai';
import { OPENAI_CONFIG } from '../../config/openai';

if (!import.meta.env.VITE_OPENAI_API_KEY) {
  throw new Error('OpenAI API key is not configured');
}

export const openaiClient = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});