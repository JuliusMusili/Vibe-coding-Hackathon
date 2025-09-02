export interface User {
  id: string;
  email: string;
  username: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
  category: string;
}

export interface RecommendedRecipe {
  name: string;
  ingredients: string[];
  instructions: string[];
}