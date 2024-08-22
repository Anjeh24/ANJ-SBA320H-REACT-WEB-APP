import React, { useState } from 'react'
import { useEffect } from "react";

function SearchBar() {
 
  const [query, setQuery] = useState("");
  const[recipe, setRecipe] = useState([]);
  
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const fetchUrl = url + query;
  useEffect(() => {
  
      async function getRecipe() {
          try {
              
            const res = await fetch(fetchUrl);
            const data = await res.json();
            console.log(data);
            
           setRecipe(data.meals || []); //setting the new values/state of recipe to objects
          }catch (error) {
            console.error('could not fetch recipes', error);
          }
          
         }
    getRecipe(query);
  }, [query]);
  
  
    return (
      <div>
        <h1>MEAL PREP CHRONO</h1>
      <h2>Search Recipes</h2>
  
         <div className="search_ar">
         
          <input type="text" placeholder="Find recipe" onChange={evt => setQuery(evt.target.value)}/>
           
         </div>
  
         {recipe.map((item, index) => (
      <div className='container_div'>
      <div className="card_items" key={index}>
          <img src={item.strMealThumb} alt="food" style={{width:'100%'}}/>
        <div className="container">
          <h4><b>{item.strMeal}</b></h4>
          <a href={'https://www.themealdb.com/meal/' + item.idMeal} target='_blank' rel="noopener noreferrer">Get Recipe & Instructions</a>
        </div>
      </div>
      </div>
      
      ))}
  
      </div>
    )
  }
  
  export default SearchBar
