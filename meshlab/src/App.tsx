import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { UserFetcher } from './components/UserFetcher';
import UserFilter from './components/UserFilter';

function App() {
  return (
    < div className="App" >
      <h1>meshLab</h1>
      <div className="search-component">
        <Input
          onChange={search}
          placeholder = "Insert URL"
        />
        <Input
          onChange={search}
          placeholder = "Insert access token"
        />
        <Button
          onClick = {search}
          label= " Search"
          className="search-button"
          icon={faSearch}
          onKeyDown = {search}
        />
      <div>
      <div className = "filter-component">
        <UserFilter />
        <Button
          onClick = {filter}
          label= " Filter"
          className="filter-button"
          icon={faFilter}
          onKeyDown = {filter}
        />
      </div>
          Here are all the users:
          <UserFetcher />
        </div>
      </div>
    </div >
  );
}

const search = () => {
  console.log("search");
};

const filter = () => {
  console.log("filter");
};

export default App;
