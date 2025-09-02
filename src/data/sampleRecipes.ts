import { Recipe } from '../types';

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Creamy Chicken Pasta',
    description: 'Rich and creamy pasta with tender chicken pieces, perfect for a satisfying dinner',
    ingredients: [
      '2 chicken breasts, diced',
      '12 oz pasta',
      '1 cup heavy cream',
      '1/2 cup parmesan cheese',
      '3 cloves garlic, minced',
      '2 tbsp olive oil',
      'Salt and pepper to taste',
      'Fresh herbs for garnish'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Season chicken with salt and pepper',
      'Heat olive oil in a large skillet over medium-high heat',
      'Cook chicken until golden brown and cooked through',
      'Add garlic and cook for 1 minute',
      'Pour in cream and bring to a simmer',
      'Add parmesan cheese and stir until melted',
      'Toss with pasta and garnish with herbs'
    ],
    cookTime: '25 mins',
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    category: 'dinner'
  },
  {
    id: '2',
    name: 'Kenyan Pilau',
    description: 'Aromatic spiced rice dish with tender meat and fragrant spices, a true Kenyan classic',
    ingredients: [
      '2 cups basmati rice',
      '1 lb beef or goat meat, cubed',
      '2 onions, sliced',
      '4 cloves garlic, minced',
      '1 tsp ginger, minced',
      'Pilau masala spices',
      '3 cups beef stock',
      '2 tbsp cooking oil',
      'Salt to taste'
    ],
    instructions: [
      'Wash and soak rice for 30 minutes',
      'Heat oil in a heavy-bottomed pot',
      'Brown the meat pieces until golden',
      'Add onions and cook until caramelized',
      'Add garlic, ginger, and pilau spices',
      'Add rice and stir to coat with spices',
      'Pour in hot stock and bring to boil',
      'Reduce heat, cover and simmer for 20 minutes',
      'Let rest for 10 minutes before serving'
    ],
    cookTime: '1 hour',
    difficulty: 'Medium',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
    category: 'lunch'
  },
  {
    id: '3',
    name: 'Ugali & Sukuma Wiki',
    description: 'Traditional Kenyan staple with nutritious collard greens - comfort food at its best',
    ingredients: [
      '2 cups white cornmeal',
      '4 cups water',
      '1 bunch collard greens (sukuma wiki)',
      '2 tomatoes, chopped',
      '1 onion, chopped',
      '3 cloves garlic, minced',
      '2 tbsp cooking oil',
      'Salt to taste',
      '1 tsp royco cube (optional)'
    ],
    instructions: [
      'Boil water in a heavy-bottomed pot',
      'Gradually add cornmeal while stirring continuously',
      'Cook for 15-20 minutes, stirring frequently',
      'For sukuma wiki: heat oil in a pan',
      'Sauté onions until golden',
      'Add garlic and tomatoes, cook until soft',
      'Add chopped collard greens and seasoning',
      'Cook until greens are tender',
      'Serve ugali with sukuma wiki'
    ],
    cookTime: '30 mins',
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
    category: 'lunch'
  },
  {
    id: '4',
    name: 'Chocolate Chip Pancakes',
    description: 'Fluffy breakfast pancakes loaded with chocolate chips - perfect weekend treat',
    ingredients: [
      '2 cups all-purpose flour',
      '2 tbsp sugar',
      '2 tsp baking powder',
      '1 tsp salt',
      '2 eggs',
      '1 3/4 cups milk',
      '1/4 cup melted butter',
      '1/2 cup chocolate chips',
      'Butter for cooking'
    ],
    instructions: [
      'Mix dry ingredients in a large bowl',
      'Whisk eggs, milk, and melted butter in another bowl',
      'Combine wet and dry ingredients until just mixed',
      'Fold in chocolate chips',
      'Heat a griddle or large skillet over medium heat',
      'Pour 1/4 cup batter for each pancake',
      'Cook until bubbles form, then flip',
      'Cook until golden brown on both sides',
      'Serve hot with syrup'
    ],
    cookTime: '20 mins',
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    category: 'breakfast'
  },
  {
    id: '5',
    name: 'Grilled Salmon Salad',
    description: 'Fresh and healthy salad with perfectly grilled salmon and vibrant vegetables',
    ingredients: [
      '4 salmon fillets',
      '6 cups mixed greens',
      '1 cucumber, sliced',
      '2 tomatoes, diced',
      '1/2 red onion, thinly sliced',
      '1/4 cup olive oil',
      '2 tbsp lemon juice',
      '1 tsp dijon mustard',
      'Salt and pepper to taste',
      'Fresh dill for garnish'
    ],
    instructions: [
      'Preheat grill to medium-high heat',
      'Season salmon with salt and pepper',
      'Grill salmon for 4-5 minutes per side',
      'Prepare salad dressing by whisking olive oil, lemon juice, and mustard',
      'Combine mixed greens, cucumber, tomatoes, and onion',
      'Flake grilled salmon over salad',
      'Drizzle with dressing',
      'Garnish with fresh dill and serve'
    ],
    cookTime: '15 mins',
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    category: 'lunch'
  },
  {
    id: '6',
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate dessert with a molten center that will melt your heart',
    ingredients: [
      '4 oz dark chocolate, chopped',
      '4 tbsp butter',
      '2 large eggs',
      '2 large egg yolks',
      '1/4 cup granulated sugar',
      '2 tbsp all-purpose flour',
      'Pinch of salt',
      'Butter for ramekins',
      'Powdered sugar for dusting',
      'Vanilla ice cream (optional)'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C)',
      'Butter 4 ramekins and dust with cocoa powder',
      'Melt chocolate and butter in double boiler',
      'Whisk eggs, egg yolks, and sugar until thick',
      'Fold in melted chocolate mixture',
      'Gently fold in flour and salt',
      'Divide batter among ramekins',
      'Bake for 12-14 minutes until edges are firm',
      'Let cool for 1 minute, then invert onto plates',
      'Dust with powdered sugar and serve with ice cream'
    ],
    cookTime: '20 mins',
    difficulty: 'Hard',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'dessert'
  },
  {
    id: '7',
    name: 'Avocado Toast',
    description: 'Simple yet elegant breakfast with creamy avocado and perfectly seasoned toppings',
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '1 tbsp lemon juice',
      '2 tbsp olive oil',
      'Salt and pepper to taste',
      '1 tomato, sliced',
      'Red pepper flakes',
      'Everything bagel seasoning (optional)',
      'Fresh herbs for garnish'
    ],
    instructions: [
      'Toast bread slices until golden brown',
      'Mash avocado with lemon juice, salt, and pepper',
      'Spread avocado mixture on toast',
      'Top with sliced tomatoes',
      'Drizzle with olive oil',
      'Sprinkle with red pepper flakes and seasoning',
      'Garnish with fresh herbs',
      'Serve immediately'
    ],
    cookTime: '10 mins',
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg',
    category: 'breakfast'
  },
  {
    id: '8',
    name: 'Thai Green Curry',
    description: 'Authentic Thai curry with coconut milk, vegetables, and aromatic herbs',
    ingredients: [
      '2 tbsp green curry paste',
      '1 can coconut milk',
      '1 lb chicken, sliced',
      '1 eggplant, cubed',
      '1 bell pepper, sliced',
      '1/4 cup thai basil',
      '2 tbsp fish sauce',
      '1 tbsp brown sugar',
      '2 kaffir lime leaves',
      'Jasmine rice for serving'
    ],
    instructions: [
      'Heat half the coconut milk in a wok',
      'Add curry paste and cook until fragrant',
      'Add chicken and cook until nearly done',
      'Add remaining coconut milk',
      'Add eggplant and bell pepper',
      'Season with fish sauce and brown sugar',
      'Add lime leaves and simmer until vegetables are tender',
      'Stir in thai basil just before serving',
      'Serve over jasmine rice'
    ],
    cookTime: '35 mins',
    difficulty: 'Medium',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    category: 'dinner'
  }
];