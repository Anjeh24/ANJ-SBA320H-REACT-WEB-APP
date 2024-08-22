import React, { useState } from 'react'
import { useEffect } from "react";

function SearchBar() {
 //setting states to be assigned new values after useEffect is use to effectuate API calls
  const [query, setQuery] = useState("");
  const[recipe, setRecipe] = useState([]);
  
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const fetchUrl = url + query; //concatinating fetch url with query which would be used to search recipes when 'text' , some sort of parameter is entered into search bar
  useEffect(() => {
  
      async function getRecipe() {
          try {
              
            const res = await fetch(fetchUrl);
            const data = await res.json(); //converting search results into json
            console.log(data);
            
           setRecipe(data.meals || []); //setting the new values/state of recipe to objects
          }catch (error) {
            console.error('could not fetch recipes', error);
          }
          
         }
    getRecipe(query);
  }, [query]); //adding queries to be used as dependencies during API calls
  
  
    return (
      <div>
        <h1>MEAL PREP CHRONO</h1>
      <h2>Search Recipes</h2>
  
         <div className="search_ar">
         
          <input type="text" placeholder="Find recipe" onChange={evt => setQuery(evt.target.value)}/> 
          {/* //*onChange event handler to be handled once new query is entered in search bar*/}
            
         </div>
  
         {recipe.map((item, index) => ( //.map to map through array components and attach keys to assign them to appropriate html tags / populate the page and get them rendered
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
