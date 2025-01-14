import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Foco no input ao clicar no botão
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Digite algo..." />
      <button onClick={handleFocus}>Focar no campo de entrada</button>
    </div>
  );
};

export default FocusInput;
