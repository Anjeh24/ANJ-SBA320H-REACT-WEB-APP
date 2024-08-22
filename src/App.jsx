import React from 'react'
import {useState, useEffect} from 'react';
import "./App.CSS";
import SearchBar from './components/SearchBar';

import ReactDOM from 'react-dom';


function App() {
  

  return (
    <>
      <div>
        <SearchBar/> {/**impoorted searchBar.jsx to be rendered on app */}
     
      </div>
     
    </>
  )
}

export default App