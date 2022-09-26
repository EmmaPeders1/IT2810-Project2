import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { UserFetcher } from './components/UserFetcher';
import Header from './components/Header';

function App() {
  return (
    < div className="App" >
      <Header></Header>
      <div>
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
          label= " Filter"
          className="search-button"
          icon={faSearch}
          onKeyDown = {filter}
        />
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
