// src/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Criando o contexto de Tema
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // O tema começa como "light"

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Componente que exibe o tema atual
const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext); // Acessando o contexto
  return <div>O tema atual é: {theme}</div>;
};

// Componente que alterna o tema
const ToggleThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext); // Acessando a função de alternar o tema
  return <button onClick={toggleTheme}>Alternar Tema</button>;
};

// Agora, exportamos os componentes corretamente
export { ThemeProvider, DisplayTheme, ToggleThemeButton };
