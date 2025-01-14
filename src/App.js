// src/App.js
import React from 'react';
import FocusInput from './FocusInput'; // Importando o componente do exercício 1
import Timer from './Timer';           // Importando o componente do exercício 2
import { ThemeProvider, DisplayTheme, ToggleThemeButton } from './ThemeContext'; // Importando do exercício 3

const App = () => {
  return (
    <div>
      <h1>Exercícios React</h1>

      <h2>Exercício 1: Foco em um Input</h2>
      <FocusInput />

      <h2>Exercício 2: Controlando um Cronômetro</h2>
      <Timer />

      <h2>Exercício 3: Contexto de Tema</h2>
      <ThemeProvider>
        <DisplayTheme />
        <ToggleThemeButton />
      </ThemeProvider>
    </div>
  );
};

export default App;
