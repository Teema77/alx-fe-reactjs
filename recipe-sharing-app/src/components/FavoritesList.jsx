// src/components/FavoritesList.jsx
/*import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  const favoriteRecipes = favorites
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean);

  return (
    <div style={{ padding: '10px', border: '1px solid gray', marginTop: '20px' }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet. Mark recipes you like!</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;*/


// Example snippet inside RecipeList.jsx or RecipeDetails.jsx

import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)}
      style={{
        backgroundColor: isFavorite ? 'gold' : 'lightgray',
        padding: '5px 10px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {isFavorite ? '★ Remove Favorite' : '☆ Add Favorite'}
    </button>
  );
};

export default FavoriteButton;
