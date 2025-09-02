import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import RecipesPage from './pages/RecipesPage';
import RecommenderPage from './pages/RecommenderPage';
import { User, Recipe } from './types';
import { loadUserData, saveUserData } from './utils/storage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'auth' | 'recipes' | 'recommender'>('home');
  const [user, setUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const userData = loadUserData();
    if (userData) {
      setUser(userData.user);
      setFavoriteRecipes(userData.favorites);
    }
  }, []);

  const handleSignIn = (email: string, password: string) => {
    // Simple authentication - in production, this would validate against a real backend
    const newUser: User = {
      id: Date.now().toString(),
      email,
      username: email.split('@')[0],
    };
    setUser(newUser);
    saveUserData(newUser, favoriteRecipes);
    setCurrentPage('home');
  };

  const handleSignUp = (username: string, email: string, password: string) => {
    const newUser: User = {
      id: Date.now().toString(),
      email,
      username,
    };
    setUser(newUser);
    saveUserData(newUser, []);
    setCurrentPage('home');
  };

  const handleSignOut = () => {
    setUser(null);
    setFavoriteRecipes([]);
    localStorage.removeItem('yummi_user_data');
    setCurrentPage('home');
  };

  const handleToggleFavorite = (recipe: Recipe) => {
    const updatedFavorites = favoriteRecipes.find(f => f.id === recipe.id)
      ? favoriteRecipes.filter(f => f.id !== recipe.id)
      : [...favoriteRecipes, recipe];
    
    setFavoriteRecipes(updatedFavorites);
    if (user) {
      saveUserData(user, updatedFavorites);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'auth':
        return (
          <AuthPage
            mode={authMode}
            onSignIn={handleSignIn}
            onSignUp={handleSignUp}
            onToggleMode={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
          />
        );
      case 'recipes':
        return (
          <RecipesPage
            favoriteRecipes={favoriteRecipes}
            onToggleFavorite={handleToggleFavorite}
            isAuthenticated={!!user}
          />
        );
      case 'recommender':
        return (
          <RecommenderPage
            favoriteRecipes={favoriteRecipes}
            onToggleFavorite={handleToggleFavorite}
            isAuthenticated={!!user}
          />
        );
      default:
        return (
          <HomePage
            user={user}
            onNavigate={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        user={user}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onSignOut={handleSignOut}
      />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;