export const validateImage = (imageData: string): boolean => {
  if (!imageData.startsWith('data:image')) {
    throw new Error('Invalid image format');
  }
  return true;
};

export const preprocessImage = (imageData: string): string => {
  // Remove data URL prefix if present
  return imageData.replace(/^data:image\/[a-z]+;base64,/, '');
};