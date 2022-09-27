import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { UserFetcher } from './components/UserFetcher';
import UserFilter from './components/UserFilter';
import Header from './components/Header';
import DatePicker from './components/DatePicker';

function App() {
  return (
    <div className="App" >
      <Header></Header>
      <div className="search-container">
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
          label= "GET"
          className="search-button"
          icon={faSearch}
          onKeyDown = {search}
        />
      </div>
      <div className = "filter-component">
        <UserFilter />
        <DatePicker />
        <DatePicker />
        <Button
          onClick = {filter}
          label= " Filter"
          className="filter-button"
          icon={faFilter}
          onKeyDown = {filter}
        />
      </div>
      <div>
        <div>
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
