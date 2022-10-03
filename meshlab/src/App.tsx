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

  //Currently some problem that might be here or in the fetcher components
  //even though submiturl updates and useEffect reruns, the new fetch is not reflected in the ui unless the user 
  //switches what component to display and back again
  const [displayComponent, setDisplayComponent] = useState<dState>(null)
  const display = (displayComponent: dState) => {
    switch (displayComponent) {
      case "users":
        return <UserFetcher url={submitURL} token={submitToken} />
      case "commits":
        return <CommitFetcher url={submitURL} token={submitToken} />
      case "issues":
        return <IssueFetcher url={submitURL} token={submitToken} />
      default:
        return ""
    }
  }

  const [currentURL, setCurrentURL] = useState<string>("123");
  const [submitURL, setSubmitURL] = useState<string>("https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-17/project2"); // for now we default to this so we dont have to input it for testing

  const [currentToken, setCurrentToken] = useState<string>("aeg");
  const [submitToken, setSubmitToken] = useState<string>("glpat-Fy8Cs4SqsPRrBa6MirZy"); // same defaulting, not really secure but whatever

  function handleURLChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentURL(e.target.value);
  }

  function handleTokenChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentToken(e.target.value);
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setSubmitURL(currentURL);
    setSubmitToken(currentToken);
  }



  return (
    <div className="App" >
      <Header></Header>
      <div className="search-container">
        <Input
          className='URL-input'
          onChange={handleURLChange}
          placeholder="Insert your gitlab project URL"
        />
        <Input
          onChange={handleTokenChange}
          placeholder="Insert access token"
        />

        <Button
          onClick={handleSubmit}
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
