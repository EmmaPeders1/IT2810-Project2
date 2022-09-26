import React from 'react';
import './App.css';
import SearchBar from './components/Searchbar';
import { UserFetcher } from './components/UserFetcher';

function App() {
  return (
    < div className="App" >
      <h1>meshLab</h1>
      <div>
        <SearchBar
          value=" "
          buttonText="Filter"
          placeholder="Insert URL"
          onChange={filter}
          onKeyDown={filter}
          onClick={filter}
        />

        <div>
          <UserFetcher />
        </div>
      </div>
    </div >
  );
}

const filter = () => {
  console.log("Hello");
};

export default App;
