import { useState, useEffect } from 'react';
import '../styles/RotatingText.css';

const RotatingText = ({ 
  words, 
  interval = 3000, 
  className = '', 
  style = {} 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 400);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  if (!words || words.length === 0) return null;

  return (
    <span 
      className={`rotating-text ${className} ${isVisible ? 'visible' : 'hidden'}`}
      style={style}
    >
      {words[currentIndex]}
    </span>
  );
};

export default RotatingText;
