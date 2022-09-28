import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { faSearch, faFilter, faUser, faPen, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { UserFetcher } from './components/UserFetcher';
import UserFilter from './components/UserFilter';
import Header from './components/Header';
import DatePicker from './components/DatePicker';
import StatusFilter from './components/StatusFilter';

type dState = "users" | "commits" | "issues" | null;

function App() {

  const [displayComponent, setDisplayComponent] = useState<dState>(null)
  const display = (displayComponent: dState) => {
    switch(displayComponent){
      case "users":
        return <UserFetcher />
      case "commits":
        return (<div className = "filter-container">
        <UserFilter />
        <DatePicker />
        <DatePicker />
        <Button
          onClick = {commit_filter}
          label= " FILTER "
          className="filter-button"
          icon={faFilter}
          onKeyDown = {commit_filter}
        />
      </div>)
      case "issues":
        return (<div className = "filter-container">
        <UserFilter />
        <DatePicker />
        <DatePicker />
        <StatusFilter />
        <Button
          onClick = {issue_filter}
          label= " FILTER "
          className="filter-button"
          icon={faFilter}
          onKeyDown = {issue_filter}
        />
      </div>)
      default:
        return ""
    }
  }

  return (
    <div className="App" >
      <Header></Header>
      <p>Everything you could ever want from a repository, right at your fingertips</p>
      <div className="search-container">
        <Input
          className='URL-input'
          onChange={search}
          placeholder = "Insert URL"
        />
        <Input
          onChange={search}
          placeholder = "Insert access token"
        />
        <Button
          onClick = {search}
          label= " GET "
          className="search-button"
          icon={faSearch}
          onKeyDown = {search}
        />
      </div>
      <div className = "filter-container">
        <Button
          onClick = {() => setDisplayComponent("users")}
          label= " USERS "
          className="user-filter-button"
          icon={faUser}
        />
        <Button
          onClick = {() => setDisplayComponent("commits")}
          label= " COMMITS "
          className="commit-filter-button"
          icon={faPen}
        />
        <Button
          onClick = {() => setDisplayComponent("issues")}
          label= " ISSUES "
          className="issue-filter-button"
          icon={faExclamationTriangle}
        />
      </div>
      <div>
        {display(displayComponent)}
      </div>
    </div >
  );
}

const search = () => {
  console.log("search");
};

const commit_filter = () => {
  console.log("search");
};

const issue_filter = () => {
  console.log("search");
};

export default App;
