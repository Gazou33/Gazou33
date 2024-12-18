export const OPENAI_CONFIG = {
  model: 'gpt-4-vision-preview',
  maxTokens: 1000,
  temperature: 0.7,
  prompt: {
    system: "You are a culinary expert specialized in recipe analysis and creation.",
    user: "Analyze these ingredients and suggest 3 possible recipes categorized by preparation time: quick (under 20 mins), intermediate (20-30 mins), and advanced (over 30 mins). Format the response as JSON with recipe name, prep time, ingredients, and instructions."
  }
} as const;