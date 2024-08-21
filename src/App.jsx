import React from 'react'
import {useState, useEffect} from 'react';
import "./App.CSS";
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import ReactDOM from 'react-dom';


function App() {
  const [recipe, setRecipe] = useState([]);

 useEffect(() => {
 async function getRecipe() {
  try {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await res.json();
    console.log(data);
    
    setRecipe(data) //setting the new values/state of recipe to objects
  }catch (error) {

  }
  
 }
getRecipe()

}, []);

  return (
    
    <div>
      <h1>Meal Prep Helper</h1>
    
   {recipe.map((item, index) =>(
    <div className="card-items" key={index}>
        <img src={item.strMealThumb} alt="food" style="width:100%"/>
      <div className="container">
        <h4><b>{item.strMeal}</b></h4>
        <a href={'https://www.themealdb.com/meal/' + item.idMeal} target='_blank'>Recipe & Instructions</a>
      </div>
    </div>
    ))}
  </div>
   
  
  )
}

export default App