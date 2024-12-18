import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Camera, RefreshCw } from 'lucide-react';

interface ImageCaptureProps {
  onImageCapture: (imageData: string) => void;
}

export const ImageCapture: React.FC<ImageCaptureProps> = ({ onImageCapture }) => {
  const webcamRef = useRef<Webcam>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      onImageCapture(imageSrc);
      setIsCameraOpen(false);
    }
  }, [onImageCapture]);

  if (!isCameraOpen) {
    return (
      <button
        onClick={() => setIsCameraOpen(true)}
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Camera className="w-5 h-5" />
        Take Picture of Ingredients
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-xl w-full mx-4">
        <div className="relative">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full rounded-lg"
          />
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={capture}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Capture Photo
            </button>
            <button
              onClick={() => setIsCameraOpen(false)}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};