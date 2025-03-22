import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe'; // Import Recipe Component
import Login from './Login'; // Import Login Component
import Favorites from './Favorites'; // Import Favorites Component
import recipeImage from './recipe.png'; // Import the background image

const App = () => {
  const APP_ID = "97e088cc";
  const APP_KEY = "2ce413d9cc3067b75354860324b0289f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track Authentication State
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState('home'); // Track Current Page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getRecipes();
      setLoading(false);
    };
    fetchData();
  }, [query]);

  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const updateSearch = (e) => setSearch(e.target.value);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    setCurrentPage('home'); // Reset to home page after search
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Handle Login
    setCurrentPage('home'); // Set the current page to home after login
  };

  const addFavorite = (recipe) => {
    if (!favorites.includes(recipe)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const navigateTo = (page) => {
    setCurrentPage(page); // Handle Navigation
  };

  return (
    <div
      className={`App fade-in`} // Add fade-in class
      style={{ backgroundImage: `url(${recipeImage})`, backgroundSize: 'cover', minHeight: '100vh' }}
    >
      {isAuthenticated ? (
        <>
          {/* Navigation Bar */}
          <nav>
            <button onClick={() => navigateTo('home')}>Home</button>
            <button onClick={() => navigateTo('favorites')}>Favorites</button>
          </nav>

          {/* Render Current Page */}
          {currentPage === 'home' ? (
            <>
              <form className="search-form" onSubmit={getSearch}>
                <input
                  className="search-bar"
                  type="text"
                  value={search}
                  onChange={updateSearch}
                />
                <button className="search-button" type="submit">
                  Search
                </button>
              </form>

              {loading ? (
                <p>Loading...</p>
              ) : recipes.length > 0 ? (
                <div className="recipes">
                  {recipes.map((recipe) => (
                    <Recipe
                      key={recipe.recipe.label}
                      title={recipe.recipe.label}
                      calories={recipe.recipe.calories}
                      image={recipe.recipe.image}
                      ingredients={recipe.recipe.ingredients}
                      onFavorite={() => addFavorite(recipe)}
                      isFavoritePage={false} // Indicate Not a Favorite Page
                    />
                  ))}
                </div>
              ) : (
                <p>No recipes found. Try another search term.</p>
              )}
            </>
          ) : (
            <Favorites favorites={favorites} /> // Render Favorites Page
          )}
        </>
      ) : (
        <Login onLogin={handleLogin} /> // Render Login Page
      )}
    </div>
  );
};

export default App;
