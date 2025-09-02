# 🍳 Yummi - Smart Recipe Recommender

> Cook Smarter, Eat Better with AI-Powered Recipe Recommendations

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-orange?style=for-the-badge)](https://yummi-smart-recipe-r-pxoh.bolt.host)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🌟 Overview

Yummi is a modern, AI-powered recipe recommendation app that helps users discover personalized recipes based on ingredients they already have at home. Built with React, TypeScript, and Tailwind CSS, it features a beautiful, responsive design with smooth animations and an intuitive user experience.

## ✨ Features

### 🔐 User Authentication
- **Sign Up/Sign In**: Secure user registration and login system
- **User Profiles**: Personalized experience with user data persistence
- **Session Management**: Automatic session handling with local storage

### 🤖 AI Recipe Recommender
- **Ingredient-Based Suggestions**: Input available ingredients to get personalized recipe recommendations
- **Smart Matching**: AI-powered algorithm suggests recipes that make the best use of your ingredients
- **Dynamic Recipe Generation**: Creates unique recipe combinations based on user input

### 📚 Recipe Browser
- **Curated Collection**: Browse through a carefully selected collection of recipes
- **Advanced Filtering**: Filter by category (breakfast, lunch, dinner, dessert, snack) and difficulty level
- **Search Functionality**: Find recipes by name or description
- **Recipe Details**: Comprehensive recipe information with ingredients and step-by-step instructions

### ❤️ Favorites System
- **Save Recipes**: Authenticated users can save their favorite recipes
- **Personal Collection**: Build and manage a personal recipe collection
- **Quick Access**: Easy access to saved recipes across sessions

### 🎨 Beautiful Design
- **Modern UI**: Clean, professional design with food-inspired color palette
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Subtle hover effects and transitions for enhanced user experience
- **Accessibility**: Built with accessibility best practices in mind

## 🚀 Live Demo

Experience Yummi live at: **[https://yummi-smart-recipe-r-pxoh.bolt.host](https://yummi-smart-recipe-r-pxoh.bolt.host)**

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for beautiful, consistent icons
- **Build Tool**: Vite for fast development and optimized builds
- **Code Quality**: ESLint with TypeScript support
- **State Management**: React hooks with local storage persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yummi-recipe-app.git
   cd yummi-recipe-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with user menu
│   ├── Footer.tsx      # Site footer with links and social icons
│   └── RecipeCard.tsx  # Recipe display card with modal
├── pages/              # Main application pages
│   ├── HomePage.tsx    # Landing page with hero section
│   ├── AuthPage.tsx    # Authentication (sign in/up)
│   ├── RecipesPage.tsx # Recipe browser with filtering
│   └── RecommenderPage.tsx # AI recipe recommender
├── data/               # Static data and mock content
│   └── sampleRecipes.ts # Sample recipe data
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces and types
├── utils/              # Utility functions
│   └── storage.ts      # Local storage helpers
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Key Components

### Authentication System
- Secure sign up and sign in functionality
- Form validation and user feedback
- Session persistence across browser sessions

### Recipe Recommender
- Dynamic ingredient input with tag-based interface
- AI-powered recipe generation (currently using mock data)
- Beautiful loading states and animations

### Recipe Browser
- Grid layout with responsive design
- Advanced filtering and search capabilities
- Detailed recipe modals with full instructions

### User Experience
- Smooth page transitions and hover effects
- Mobile-first responsive design
- Intuitive navigation and user flows

## 🔮 Future Enhancements

### Backend Integration
- **Database**: MySQL/PostgreSQL for user data and recipes
- **API**: RESTful API with Flask/Express.js
- **Authentication**: JWT-based authentication system
- **Recipe Storage**: Persistent recipe storage and user favorites

### AI Integration
- **OpenAI API**: Real AI-powered recipe recommendations
- **Natural Language Processing**: Better ingredient parsing and understanding
- **Personalization**: Learning user preferences over time

### Advanced Features
- **Recipe Sharing**: Share recipes with other users
- **Meal Planning**: Weekly meal planning functionality
- **Shopping Lists**: Generate shopping lists from recipes
- **Nutritional Information**: Display nutritional facts for recipes
- **Recipe Reviews**: User ratings and reviews system

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and structure
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🐛 Known Issues

- Recipe recommendations currently use mock data (AI integration pending)
- User data is stored in local storage (database integration planned)
- Image uploads not yet implemented (using placeholder images)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pexels** for providing beautiful food photography
- **Lucide** for the comprehensive icon library
- **Tailwind CSS** for the utility-first CSS framework
- **React Community** for the amazing ecosystem

## 📞 Contact

- **Project Link**: [https://github.com/yourusername/yummi-recipe-app](https://github.com/yourusername/yummi-recipe-app)
- **Live Demo**: [https://yummi-smart-recipe-r-pxoh.bolt.host](https://yummi-smart-recipe-r-pxoh.bolt.host)

---

<div align="center">
  <p>Made with ❤️ for food lovers everywhere</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>