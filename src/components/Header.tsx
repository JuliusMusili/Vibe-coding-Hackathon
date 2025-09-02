import React from 'react';
import { ChefHat, User as UserIcon, LogOut } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User | null;
  currentPage: string;
  onNavigate: (page: 'home' | 'auth' | 'recipes' | 'recommender') => void;
  onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, currentPage, onNavigate, onSignOut }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <ChefHat className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">Yummi</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === 'home'
                  ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('recipes')}
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === 'recipes'
                  ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Recipes
            </button>
            <button
              onClick={() => onNavigate('recommender')}
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === 'recommender'
                  ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              AI Recommender
            </button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <UserIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{user.username}</span>
                </div>
                <button
                  onClick={onSignOut}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('auth')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200 bg-white">
        <nav className="flex justify-around py-2">
          <button
            onClick={() => onNavigate('home')}
            className={`flex-1 text-center py-2 text-sm font-medium transition-colors duration-200 ${
              currentPage === 'home' ? 'text-orange-600' : 'text-gray-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('recipes')}
            className={`flex-1 text-center py-2 text-sm font-medium transition-colors duration-200 ${
              currentPage === 'recipes' ? 'text-orange-600' : 'text-gray-600'
            }`}
          >
            Recipes
          </button>
          <button
            onClick={() => onNavigate('recommender')}
            className={`flex-1 text-center py-2 text-sm font-medium transition-colors duration-200 ${
              currentPage === 'recommender' ? 'text-orange-600' : 'text-gray-600'
            }`}
          >
            AI Suggest
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;