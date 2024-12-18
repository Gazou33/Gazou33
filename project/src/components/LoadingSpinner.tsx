import React from 'react';
import { RefreshCw } from 'lucide-react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-4">
    <RefreshCw className="w-6 h-6 animate-spin text-indigo-600" />
  </div>
);