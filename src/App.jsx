import React from 'react'
import {useState, useEffect} from 'react';
import "./App.CSS";
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';

const resUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

function App() {

 const [recipe, setRecipe] = useState([])
 useEffect(() => {
  fetch(resUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    setRecipe(data); //credits, freecodecamp
  })
 }, [])
      
  return (
    <div>
      <h1>Meal Prep Helper</h1>
    
    </div>
  )
}

export default App