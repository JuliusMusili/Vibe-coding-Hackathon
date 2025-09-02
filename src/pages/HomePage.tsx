import React from 'react';
import { ChefHat, Sparkles, Heart, Users } from 'lucide-react';
import { User } from '../types';

interface HomePageProps {
  user: User | null;
  onNavigate: (page: 'home' | 'auth' | 'recipes' | 'recommender') => void;
}

const HomePage: React.FC<HomePageProps> = ({ user, onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Cook Smarter,<br />
              <span className="text-yellow-300">Eat Better</span> with Yummi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Discover personalized recipes based on your ingredients with AI-powered recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <button
                  onClick={() => onNavigate('recommender')}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Find Recipes Now
                </button>
              ) : (
                <>
                  <button
                    onClick={() => onNavigate('auth')}
                    className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Started Free
                  </button>
                  <button
                    onClick={() => onNavigate('recipes')}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-200"
                  >
                    Browse Recipes
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Yummi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your cooking experience with intelligent recipe suggestions and seamless meal planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-200">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Suggestions</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized recipe recommendations based on ingredients you already have at home
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-200">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Favorites</h3>
              <p className="text-gray-600 leading-relaxed">
                Build your personal recipe collection and never lose track of your favorite dishes
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Recipes</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore thousands of tried-and-tested recipes from our growing community of home cooks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of home cooks who are already using Yummi to create amazing meals
          </p>
          {!user && (
            <button
              onClick={() => onNavigate('auth')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Cooking Smarter Today
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;