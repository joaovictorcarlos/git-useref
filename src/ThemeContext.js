import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext); 
  return <div>O tema atual é: {theme}</div>;
};


const ToggleThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext); 
  return <button onClick={toggleTheme}>Alternar Tema</button>;
};


export { ThemeProvider, DisplayTheme, ToggleThemeButton };
