import React, { useState } from 'react';
import './App.css';

const words = ["apple", "banana", "crayon"];

const Circle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % words.length);
  };

  return (
    <div className="circle" onClick={handleClick}>
      {words[currentIndex]}
    </div>
  );
};

const App = () => {
  return (
    <div style={{ height: '100vh', display: 'flex'}}>
      <Circle />
    </div>
  );
};

export default App;
