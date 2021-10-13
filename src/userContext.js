import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const colorPalette = ["dark", "green", "blue", "red", "light"];
  const [theme, setTheme] = useState(colorPalette[0]);
  const [upperCase, setUpperCase] = useState(true);

  return (
    <UserContext.Provider
      value={{
        colorPalette,
        theme,
        upperCase,
        setTheme,
        setUpperCase
      }}
    >
      {children}
    </UserContext.Provider>
  )
}