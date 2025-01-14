import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // Armazena o tempo
  const intervalRef = useRef(null); // Armazena a referência do setInterval
  const [isRunning, setIsRunning] = useState(false); // Controla o estado do cronômetro

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1); // Incrementa o tempo a cada segundo
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current); // Para o cronômetro
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current); // Para o cronômetro
    setTime(0); // Reseta o tempo
    setIsRunning(false);
  };

  return (
    <div>
      <div>Tempo: {time}s</div>
      <button onClick={startTimer} disabled={isRunning}>Iniciar</button>
      <button onClick={stopTimer} disabled={!isRunning}>Parar</button>
      <button onClick={resetTimer}>Resetar</button>
    </div>
  );
};

export default Timer;
