import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { faSearch, faFilter, faUser, faPen, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { UserFetcher } from './components/UserFetcher';
import { CommitFetcher } from './components/CommitFetcher';
import { IssueFetcher } from './components/IssueFetcher';
import { Filters } from './components/Filters';
import UserFilter from './components/UserFilter';
import Header from './components/Header';
import DatePicker from './components/DatePicker';
import StatusFilter from './components/StatusFilter';

type dState = "users" | "commits" | "issues" | null;

function App() {

  const [displayComponent, setDisplayComponent] = useState<dState>(null)
  const display = (displayComponent: dState) => {
    switch (displayComponent) {
      case "users":
        return <UserFetcher />
      case "commits":
        return <CommitFetcher />
      case "issues":
        return <IssueFetcher />
      default:
        return ""
    }
  }

  return (
    <div className="App" >
      <Header></Header>
      <div className="search-container">
        <Input
          className='URL-input'
          onChange={() => console.log("input link changed!")}
          placeholder="Insert URL"
        />
        <Input
          onChange={() => console.log("input token changed!")}
          placeholder="Insert access token"
        />
        <Button
          onClick={() => console.log("search!")}
          label=" GET "
          className="search-button"
          icon={faSearch}
          onKeyDown={() => console.log("search!")}
        />
      </div>
      <div className="filter-container">
        <Button
          onClick={() => setDisplayComponent("users")}
          label=" USERS "
          className="user-filter-button"
          icon={faUser}
        />
        <Button
          onClick={() => setDisplayComponent("commits")}
          label=" COMMITS "
          className="commit-filter-button"
          icon={faPen}
        />
        <Button
          onClick={() => setDisplayComponent("issues")}
          label=" ISSUES "
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



export default App;
