import React, { useEffect, useState } from 'react';
import './App.css';
import { Fetcher } from './components/Fetcher';

function App() {
  return (
    < div className="App" >
      <h1>meshLab</h1>
      <div>
        {/*Here comes the searchbar
        <button>Search</button>*/}
        <div>
          Here are all the users:
          <Fetcher></Fetcher>
        </div>
      </div>
    </div >
  );
}

export default App;
