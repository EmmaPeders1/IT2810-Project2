import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { faSearch, faFilter, faUser, faPen, faExclamationTriangle, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { UserFetcher } from './components/UserFetcher';
import { CommitFetcher } from './components/CommitFetcher';
import { IssueFetcher } from './components/IssueFetcher';
import { ProjectContext } from './context/ProjectContext';
import { Filters } from './components/Filters';
import UserFilter from './components/UserFilter';
import Header from './components/Header';
import DatePicker from './components/DatePicker';
import StatusFilter from './components/StatusFilter';
import useLocalStorage from './web-storage/Localstorage';
import styled from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { Wrapper } from './components/Wrapper';
import useSessionStorage from './web-storage/SessionStorage';

type dState = "users" | "commits" | "issues" | null;

function App() {

  const [theme, setTheme] = useLocalStorage<string>("theme", "dark");
 
  const [displayComponent, setDisplayComponent] = useState<dState>(null);

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

  interface PInfo {
    url: string,
    token: string
  }

  //just defaulting to use our project, only while developing
  const [projectInfo, setProjectInfo] = useState<PInfo>({
    url: 'https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-17/project2',
    token: 'glpat-Fy8Cs4SqsPRrBa6MirZy'
    }
  )

  const [currentURL, setCurrentURL] = useSessionStorage<string>("CurrentURL", "Insert your gitlab project url");

  const [currentToken, setCurrentToken] = useSessionStorage<string>("CurrentToken", "Insert access token");

  function handleURLChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentURL(e.target.value);
  }

  function handleTokenChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentToken(e.target.value);
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setProjectInfo({ url: currentURL, token: currentToken })
  }
 
  return (
    <div className="App" >
      <Wrapper theme={theme}>
      <Header ></Header>
      <p>Everything you could ever want from a repository, right at your fingertips
      </p>
      < div className='theme-container'>
        <Button 
            onClick={() =>
              theme === "light" ? setTheme("purple") : setTheme("light")
            }
            label="Change theme"
            className="change-theme-button"
            icon={faWandMagicSparkles}
          />
      </div>
      <div className="search-container">
        <Input 
          className='URL-input'
          onChange={handleURLChange}
          placeholder= {currentURL}
        />
        <Input
          onChange={handleTokenChange}
          placeholder={currentToken}
        />
        <Button 
          onClick={()=> handleSubmit}
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
        <ProjectContext.Provider value={projectInfo}>
          {display(displayComponent)}
        </ProjectContext.Provider>
      </div>
      </Wrapper>
    </div >
  )
}

export default App;


