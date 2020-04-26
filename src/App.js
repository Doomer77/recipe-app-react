import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = 'fdadfd4e';
  const APP_KEY = 'fec04dc67b718d34d69e098cff423ea6';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
      <div className="App">
        <form>
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        { recipes.map(recipe => (
            <Recipe
                key = { recipe.recipe.label }
                title = { recipe.recipe.label }
                calories = { recipe.recipe.calories }
                image = { recipe.recipe.image }
            />
        )) }
      </div>
  )
}

export default App;
