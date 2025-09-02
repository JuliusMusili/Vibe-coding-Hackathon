import { User, Recipe } from '../types';

interface UserData {
  user: User;
  favorites: Recipe[];
}

export const saveUserData = (user: User, favorites: Recipe[]): void => {
  const userData: UserData = { user, favorites };
  localStorage.setItem('yummi_user_data', JSON.stringify(userData));
};

export const loadUserData = (): UserData | null => {
  try {
    const stored = localStorage.getItem('yummi_user_data');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading user data:', error);
  }
  return null;
};