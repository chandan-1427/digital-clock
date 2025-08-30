// src/context/ThemeContext.js
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("system");

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;

    const actualTheme =
      theme === "system"
        ? (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light")
        : theme;

    root.classList.remove("light", "dark");
    root.classList.add(actualTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
