import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { faSearch, faFilter, faUser, faPen, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { UserFetcher } from './components/UserFetcher';
import UserFilter from './components/UserFilter';
import Header from './components/Header';
import DatePicker from './components/DatePicker';

function App() {
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
          onClick = {user_filter}
          label= " USERS "
          className="user-filter-button"
          icon={faUser}
          onKeyDown = {user_filter}
        />
        <Button
          onClick = {commit_filter}
          label= " COMMITS "
          className="commit-filter-button"
          icon={faPen}
          onKeyDown = {commit_filter}
        />
        <Button
          onClick = {issue_filter}
          label= " ISSUES "
          className="issue-filter-button"
          icon={faExclamationTriangle}
          onKeyDown = {issue_filter}
        />
      </div>
    </div >
  );
}

const search = () => {
  console.log("search");
};

const user_filter = () => {
  console.log("user_filter");
  return(
    <div>
      <UserFetcher />
    </div>
  );
}

const commit_filter = () => {
  return(
    <div className = "filter-container">
        <UserFilter />
        <DatePicker />
        <DatePicker />
        <Button
          onClick = {commit_filter_fully}
          label= " FILTER "
          className="filter-button"
          icon={faFilter}
          onKeyDown = {commit_filter_fully}
        />
      </div>
  );
};

const commit_filter_fully = () => {
  console.log("commit filter");
};

const issue_filter = () => {
  console.log("issue filter");
};

export default App;
