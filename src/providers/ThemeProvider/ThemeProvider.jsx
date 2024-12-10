import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const handleTheme = () => {
    setDark((prevDark) => {
      const newDark = !prevDark;
      localStorage.setItem("theme", JSON.stringify(newDark));
      return newDark;
    });
  };



  const themeInfo = {
    dark,
    handleTheme,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
