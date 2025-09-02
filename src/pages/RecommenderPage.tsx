import React, { useState } from 'react';
import { Sparkles, Plus, X, Loader } from 'lucide-react';
import { Recipe, RecommendedRecipe } from '../types';
import RecipeCard from '../components/RecipeCard';

interface RecommenderPageProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
  isAuthenticated: boolean;
}

const RecommenderPage: React.FC<RecommenderPageProps> = ({
  favoriteRecipes,
  onToggleFavorite,
  isAuthenticated
}) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [recommendations, setRecommendations] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addIngredient = () => {
    if (currentIngredient.trim() && !ingredients.includes(currentIngredient.trim())) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient('');
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(i => i !== ingredient));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addIngredient();
    }
  };

  const getRecommendations = async () => {
    if (ingredients.length === 0) return;

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock recommendations based on ingredients
    const mockRecommendations: Recipe[] = [
      {
        id: `rec-${Date.now()}-1`,
        name: `${ingredients[0]} Delight`,
        description: `A delicious recipe featuring ${ingredients.join(', ')} with amazing flavors`,
        ingredients: [...ingredients, 'olive oil', 'salt', 'pepper', 'garlic'],
        instructions: [
          'Prepare all ingredients',
          `Sauté ${ingredients[0]} until golden`,
          'Add remaining ingredients and seasonings',
          'Cook for 15-20 minutes until tender',
          'Serve hot and enjoy!'
        ],
        cookTime: '25 mins',
        difficulty: 'Easy' as const,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        category: 'lunch'
      },
      {
        id: `rec-${Date.now()}-2`,
        name: `Gourmet ${ingredients[0]} Bowl`,
        description: `An elevated take on ${ingredients[0]} with fresh ingredients`,
        ingredients: [...ingredients, 'rice', 'herbs', 'lemon', 'onion'],
        instructions: [
          'Cook rice according to package instructions',
          `Prepare ${ingredients[0]} with herbs and seasonings`,
          'Combine all ingredients in a bowl',
          'Drizzle with lemon and olive oil',
          'Garnish and serve immediately'
        ],
        cookTime: '30 mins',
        difficulty: 'Medium' as const,
        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
        category: 'dinner'
      },
      {
        id: `rec-${Date.now()}-3`,
        name: `Fusion ${ingredients.slice(0, 2).join(' & ')} Special`,
        description: `Creative fusion recipe combining the best of ${ingredients.slice(0, 2).join(' and ')}`,
        ingredients: [...ingredients, 'coconut milk', 'spices', 'fresh herbs'],
        instructions: [
          'Heat oil in a large pan',
          `Add ${ingredients.join(' and ')} to the pan`,
          'Pour in coconut milk and spices',
          'Simmer for 20 minutes',
          'Garnish with fresh herbs and serve'
        ],
        cookTime: '35 mins',
        difficulty: 'Medium' as const,
        image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
        category: 'dinner'
      }
    ];

    setRecommendations(mockRecommendations);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-gray-900">AI Recipe Recommender</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us what ingredients you have, and we'll suggest amazing recipes you can make right now!
          </p>
        </div>

        {/* Ingredient Input */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What ingredients do you have?</h2>
          
          {/* Input Field */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type an ingredient (e.g., chicken, tomatoes)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
            <button
              onClick={addIngredient}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add</span>
            </button>
          </div>

          {/* Ingredient Tags */}
          {ingredients.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Your ingredients:</p>
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-medium flex items-center space-x-2"
                  >
                    <span>{ingredient}</span>
                    <button
                      onClick={() => removeIngredient(ingredient)}
                      className="text-orange-600 hover:text-orange-800 transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Get Recommendations Button */}
          <button
            onClick={getRecommendations}
            disabled={ingredients.length === 0 || isLoading}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
          >
            {isLoading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Getting Recommendations...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Get AI Recommendations</span>
              </>
            )}
          </button>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Recommended for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={favoriteRecipes.some(f => f.id === recipe.id)}
                  onToggleFavorite={onToggleFavorite}
                  isAuthenticated={isAuthenticated}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {recommendations.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to discover new recipes?</h3>
            <p className="text-gray-600">Add some ingredients above to get personalized AI recommendations!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommenderPage;