import { useState, useEffect, useRef } from 'react';
import '../styles/FadeContent.css';

const FadeContent = ({ 
  children, 
  delay = 0, 
  duration = 600, 
  direction = 'up',
  className = '',
  triggerOnce = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, triggerOnce, hasTriggered]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'fade-up';
      case 'down': return 'fade-down';
      case 'left': return 'fade-left';
      case 'right': return 'fade-right';
      case 'scale': return 'fade-scale';
      default: return 'fade-up';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`fade-content ${getDirectionClass()} ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
