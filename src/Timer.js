import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
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
