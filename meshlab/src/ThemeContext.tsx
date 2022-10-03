import React, {createContext} from "react"
import { GlobalStyles } from "./components/Globalstyles"
import { useLocalStorage } from "./web-storage/Localstorage";

// creates a global state with context api to pass theme variable 
// and updater function to the Provider and Globalstyles components

interface ContextProps {
  theme: string | undefined;
  setTheme: Function
}

export const ThemeContext = createContext<ContextProps>({
  theme: "",
  setTheme: () => null,
})

interface Props {
  children: React.ReactNode
}

export function ThemeProvider(props: Props): JSX.Element {
  const [theme, setTheme] = useLocalStorage("theme", "light")

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <GlobalStyles theme={theme} />
      {props.children}
    </ThemeContext.Provider>
  )
}