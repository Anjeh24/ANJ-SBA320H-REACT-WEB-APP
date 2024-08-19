import React from 'react'

function SearchBar() {
  return (
    <div>
        <input type='text' value={searchRecipe} onChange={showNewInput} placeholder='Search recipes here'/>
    </div>
  )
}

export default SearchBar