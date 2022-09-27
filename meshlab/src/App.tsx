import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { UserFetcher } from './components/UserFetcher';

function App() {
  return (
    < div className="App" >
      <h1>meshLab</h1>
      <div className="filter-container">
        <Input
          onChange={filter}
          placeholder = "Insert URL"
        />
        <Input
          onChange={filter}
          placeholder = "Insert access token"
        />
        <Button
          onClick = {filter}
          label= "GET"
          className="search-button"
          icon={faSearch}
          onKeyDown = {filter}
        />
      </div>
      <div>
        <div>
          Here are all the users:
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
