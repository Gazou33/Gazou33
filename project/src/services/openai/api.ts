import { openaiClient } from './client';
import { OPENAI_CONFIG } from '../../config/openai';
import { validateImage, preprocessImage } from '../../utils/image';
import type { OpenAIResponse, OpenAIError } from '../../types/openai';

export const analyzeImage = async (imageData: string): Promise<OpenAIResponse[]> => {
  try {
    validateImage(imageData);
    const processedImage = preprocessImage(imageData);

    const response = await openaiClient.chat.completions.create({
      model: OPENAI_CONFIG.model,
      messages: [
        {
          role: "system",
          content: OPENAI_CONFIG.prompt.system
        },
        {
          role: "user",
          content: [
            { type: "text", text: OPENAI_CONFIG.prompt.user },
            {
              type: "image_url",
              image_url: {
                url: processedImage.startsWith('data:') ? processedImage : `data:image/jpeg;base64,${processedImage}`
              }
            }
          ]
        }
      ],
      max_tokens: OPENAI_CONFIG.maxTokens,
      temperature: OPENAI_CONFIG.temperature
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    return JSON.parse(content);
  } catch (error) {
    const e = error as OpenAIError;
    console.error('OpenAI API Error:', e);
    throw {
      message: e.message || 'Failed to analyze image',
      code: e.code || 'UNKNOWN_ERROR',
      status: e.status || 500
    };
  }
};