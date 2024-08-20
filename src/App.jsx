import React from 'react'
import {useState, useEffect} from 'react';
import "./App.CSS";
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import ReactDOM from 'react-dom';

const resUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const fetchedRes = data;
function App() {

 const [recipe, setRecipe] = useState([])//usestate as empty array to hold data
 useEffect(() => {           //fetching API using useEffect hook
  fetch(resUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    setRecipe(data); //credits, freecodecamp
  })
 }, []); //the empty array dependence would enable it to run once instead of multiple times.
 //const theSubmission = (evt) => {
 // evt.preventDefault();
  //setRecipe(data) //trying to get the new state
 //}
      
  return (
    <>
    <div>
      <h1>Meal Prep Helper</h1>
     </div>
<input onChange={data} label="Search recipe"/> //attempting to add search bar that would return output
{recipe.map((item, index) =>(
 <div key={index}>
    <div className="card">
    <img src={item.strMealThumb} alt={strMeal} style={"width:100%"}/>
    <div className="container">
      <h4><b>{item.strMeal}</b></h4>
      <a href={'http://www.themealdb.com/meal/ + idMeal'}>{Ingredients & Instructions}</a>
    </div>
  </div>
  </div>
)

 
)}

</>
  )
}

export default App