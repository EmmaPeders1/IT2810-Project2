import React from 'react';
import './App.css';
import { UserFetcher } from './components/UserFetcher';

function App() {
  return (
    < div className="App" >
      <h1>meshLab</h1>
      <div>
        {/*Here comes the searchbar
        <button>Search</button>*/}
        <div>
          Here are all the users:
          <UserFetcher />
        </div>
      </div>
    </div >
  );
}

export default App;
