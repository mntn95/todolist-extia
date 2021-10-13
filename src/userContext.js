import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [upperCase, setUpperCase] = useState(true);

  return (
    <UserContext.Provider
      value={{
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