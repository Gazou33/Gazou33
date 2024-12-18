import React from 'react';
import { History, Home } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'analyze' | 'history';
  onTabChange: (tab: 'analyze' | 'history') => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm fixed bottom-0 left-0 right-0 z-50 md:relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-around md:justify-start h-16">
            <button
              onClick={() => onTabChange('analyze')}
              className={`flex-1 md:flex-none inline-flex items-center justify-center px-4 ${
                activeTab === 'analyze'
                  ? 'text-indigo-600 border-t-2 md:border-b-2 md:border-t-0 border-indigo-500'
                  : 'text-gray-500 border-transparent'
              }`}
            >
              <Home className="w-5 h-5 md:mr-2" />
              <span className="text-xs md:text-base md:inline">Analyze</span>
            </button>
            <button
              onClick={() => onTabChange('history')}
              className={`flex-1 md:flex-none inline-flex items-center justify-center px-4 ${
                activeTab === 'history'
                  ? 'text-indigo-600 border-t-2 md:border-b-2 md:border-t-0 border-indigo-500'
                  : 'text-gray-500 border-transparent'
              }`}
            >
              <History className="w-5 h-5 md:mr-2" />
              <span className="text-xs md:text-base md:inline">History</span>
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6 pb-20 md:py-8 md:pb-8">{children}</main>
    </div>
  );
}