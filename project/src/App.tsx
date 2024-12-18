import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { Layout } from './components/Layout';
import { MenuSection } from './components/MenuSection';
import { ImageCapture } from './components/ImageCapture';
import { LoadingSpinner } from './components/LoadingSpinner';
import { IngredientAnalysis } from './components/IngredientAnalysis';
import { HistorySection } from './components/HistorySection';
import { WelcomeSection } from './components/WelcomeSection';
import { useImageAnalysis } from './hooks/useImageAnalysis';
import { useRecipeHistory } from './hooks/useRecipeHistory';

function App() {
  const [activeTab, setActiveTab] = useState<'analyze' | 'history'>('analyze');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const { isAnalyzing, error, recipes, analyzeIngredients } = useImageAnalysis();
  const { history, addToHistory } = useRecipeHistory();

  const handleImageCapture = async (imageData: string) => {
    setCapturedImage(imageData);
    await analyzeIngredients(imageData);
    
    if (recipes.length > 0) {
      addToHistory({
        ingredients: recipes.flatMap(r => r.ingredients),
        recipes,
        imageUrl: imageData,
      });
    }
  };

  const quickRecipes = recipes.filter(recipe => recipe.prepTime <= 20);
  const intermediateRecipes = recipes.filter(recipe => recipe.prepTime > 20 && recipe.prepTime <= 30);
  const advancedRecipes = recipes.filter(recipe => recipe.prepTime > 30);

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'analyze' ? (
        <>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-gray-900">Recipe Analysis</h1>
            </div>
          </div>

          {!capturedImage && !isAnalyzing && (
            <WelcomeSection onCameraClick={() => setShowCamera(true)} />
          )}

          {showCamera && (
            <ImageCapture
              onImageCapture={(imageData) => {
                setShowCamera(false);
                handleImageCapture(imageData);
              }}
            />
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {capturedImage && (
            <IngredientAnalysis
              ingredients={recipes.flatMap(r => r.ingredients)}
              imageUrl={capturedImage}
            />
          )}
          
          {isAnalyzing ? (
            <div className="text-center py-12">
              <LoadingSpinner />
              <p className="text-gray-600 mt-2">Analyzing ingredients and generating recipes...</p>
            </div>
          ) : (
            recipes.length > 0 && (
              <div className="mt-8 space-y-8">
                <MenuSection 
                  title="Quick Recipes (Under 20 mins)" 
                  recipes={quickRecipes} 
                />
                <MenuSection 
                  title="Intermediate Recipes (20-30 mins)" 
                  recipes={intermediateRecipes} 
                />
                <MenuSection 
                  title="Advanced Recipes (30+ mins)" 
                  recipes={advancedRecipes} 
                />
              </div>
            )
          )}
        </>
      ) : (
        <HistorySection history={history} />
      )}
    </Layout>
  );
}

export default App;