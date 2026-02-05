import React, { useEffect, useState, createContext } from "react";
import { LightTheme, DarkTheme } from "./Themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialMode = () => {
    if (typeof localStorage === "undefined") return "light";

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme; // ✅ directly use saved "dark"/"light"

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialMode);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme); // ✅ store string not boolean
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
