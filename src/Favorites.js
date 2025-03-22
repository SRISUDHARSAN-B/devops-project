// src/Favorites.js
import React from 'react';
import Recipe from './Recipe'; // Reuse the Recipe component for consistency

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      {favorites.length > 0 ? (
        <div className="recipes">
          {favorites.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              isFavoritePage={true} // Favorite page: hide "Add as Favorite"
            />
          ))}
        </div>
      ) : (
        <p>You haven't added any favorite recipes yet.</p>
      )}
    </div>
  );
};

export default Favorites;
