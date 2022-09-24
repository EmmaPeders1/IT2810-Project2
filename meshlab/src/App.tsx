import React, { useEffect, useState } from 'react';
import './App.css';
import { Fetcher } from './components/Fetcher';

function App() {
  return (
    < div className="App" >
      <h1>meshLab</h1>
      {/*Here comes the searchbar
      <button>Search</button>*/}
      <Fetcher></Fetcher>
    </div >
  );
}

export default App;
