import React, { useState } from 'react';
import './App.css';

const words = ["Python", "C++", "Java", "Javascript", "HTML"];

const Circle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % words.length);
      setIsAnimating(false);
    }, 500); // Match this duration with the CSS animation duration
  };

  return (
    <div className="circle" onClick={handleClick}>
      <span className={`word ${isAnimating ? 'slide-out' : 'slide-in'}`}>
        {words[currentIndex]}
      </span>
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
