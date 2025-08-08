/*import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  setRecipes: (recipes) => set({ recipes }),
}));*/

/*import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));*/


// recipeStore.js
/*import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Add new recipe
  addRecipe: (newRecipe) =>
    set(state => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
        recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      )
    })),

  // Set search term and immediately filter
  setSearchTerm: (term) =>
    set(state => {
      const filtered = state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered
      };
    }),

  // Optional utility to reset all filters
  resetFilter: () => set(state => ({ filteredRecipes: state.recipes }))
}));*/


// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Add a recipe
  addRecipe: (newRecipe) =>
    set(state => ({
      recipes: [...state.recipes, newRecipe]
    })),

  // Mark a recipe as favorite
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId]
    })),

  // Remove from favorites
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  // Generate recommendations based on favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(recipe =>
      // Example: recommend random favorites or related recipes
      favorites.includes(recipe.id) && Math.random() > 0.3
    );
    set({ recommendations: recommended });
  }
}));
