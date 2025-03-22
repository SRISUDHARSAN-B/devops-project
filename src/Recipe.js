import React from 'react';
import styles from './recipe.module.css'; // Import the CSS module

const Recipe = ({ title, calories, image, ingredients, onFavorite, isFavoritePage, isFavorite }) => {
  const handleFavorite = () => {
    onFavorite(); // Call the function to add to favorites
    alert(`${title} has been added to your favorites!`); // Alert message
  };

  return (
    <div className={styles.recipe}>
      <h3>{title}</h3>
      <p>Calories: {calories.toFixed(2)}</p>
      <img src={image} alt={title} />
      <h4 style={{ color: 'red' }}>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>

      {!isFavoritePage && (
        <button onClick={handleFavorite} disabled={isFavorite}>
          {isFavorite ? 'Already Favorite' : 'Add to Favorite'}
        </button>
      )}
    </div>
  );
};

export default Recipe;
