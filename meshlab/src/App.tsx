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
import Footer from './components/Footer';

type dState = "users" | "commits" | "issues" | null;

function App() {

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  //Currently some problem that might be here or in the fetcher components
  //even though submiturl updates and useEffect reruns, the new fetch is not reflected in the ui unless the user
  //switches what component to display and back again
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

  interface PInfo {
    url: string,
    token: string
  }

  //just defaulting to use our project, only while developing
  const [projectInfo, setProjectInfo] = useState<PInfo>({
    url: '',
    token: ''
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
    <Wrapper theme={theme}>
      <div className="App" >
        <div id="headerContainer">
          <Header />
        </div>
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
        <span className = "instruction">Step 1: Input your gitlab project URL and corresponding access token</span>
        <div className="search-container">
          <Input
            className='URL-input'
            onChange={handleURLChange}
            placeholder={currentURL}
          />
          <Input
            className='token'
            onChange={handleTokenChange}
            placeholder={currentToken}
          />
          <Button
            onClick={handleSubmit}
            label=" GET "
            className="search-button"
            icon={faSearch}
            onKeyDown={() => console.log("search!")}
          />
        </div>
        <span className = "instruction">Step 2: Select which category you want information about.
          Remember: Nothing will appear unless you choose a category</span>
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

        <div id="displayContainer">
          <ProjectContext.Provider value={projectInfo}>
            {display(displayComponent)}
          </ProjectContext.Provider>
        </div>
        <div id="footerContainer">
          <Footer />
        </div>
      </div >
    </Wrapper>
  );
}

export default App;