import React, { useState } from 'react';
import { Clock, ChefHat, Heart, Eye, X } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (recipe: Recipe) => void;
  isAuthenticated: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  recipe, 
  isFavorite, 
  onToggleFavorite, 
  isAuthenticated 
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAuthenticated) {
      onToggleFavorite(recipe);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <button
              onClick={handleFavoriteClick}
              className={`p-2 rounded-full transition-all duration-200 ${
                isAuthenticated
                  ? isFavorite
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                  : 'bg-white/80 text-gray-400 cursor-not-allowed'
              } backdrop-blur-sm`}
              disabled={!isAuthenticated}
              title={isAuthenticated ? (isFavorite ? 'Remove from favorites' : 'Add to favorites') : 'Sign in to save favorites'}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {recipe.difficulty}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
            {recipe.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {recipe.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ChefHat className="w-4 h-4" />
                <span>{recipe.category}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowDetails(true)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
          >
            <Eye className="w-4 h-4" />
            <span>View Recipe</span>
          </button>
        </div>
      </div>

      {/* Recipe Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-600 p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">{recipe.name}</h2>
                {isAuthenticated && (
                  <button
                    onClick={() => onToggleFavorite(recipe)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      isFavorite
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                )}
              </div>

              <p className="text-gray-600 mb-6">{recipe.description}</p>

              <div className="flex items-center space-x-6 mb-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{recipe.cookTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChefHat className="w-5 h-5" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h3>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex space-x-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeCard;