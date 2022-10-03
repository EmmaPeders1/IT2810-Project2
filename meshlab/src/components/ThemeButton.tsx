import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';
import { useLocalStorage } from '../web-storage/Localstorage';

export function ThemeButton(): JSX.Element {
  // const [theme, setTheme] = useLocalStorage("theme", "light");

  const { theme, setTheme } = useContext(ThemeContext);

  function changeTheme() {

    console.log(theme);

    if (!theme) {
      setTheme("light");
      console.log(theme);
    }
    
    if (theme === "light") {
      setTheme("dark");
      console.log("switched to dark");
    } else {
      setTheme("light");
      console.log("switched to light");
    }
  }; 

  return (
    <button onClick={changeTheme}>
      {theme === "light" ? 'Change to dark mode' : "Change to light mode"}
    </button> 
    //<button onClick={changeTheme}
  );
}