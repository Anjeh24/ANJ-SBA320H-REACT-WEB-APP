import React from 'react'
import {useState, useEffect} from 'react';
import "./App.css";
import SearchBar from './components/SearchBar';

import ReactDOM from 'react-dom';


function App() {
  

  return (
    <>
      <div>
        <SearchBar/> {/**impoorted searchBar.jsx to be rendered on app */}
     
        <h6>Made with &#x2764;&#xfe0f; by Anjeh Mbah</h6>
     
      </div>
     
    </>
  )
}

export default App