
import React, { useEffect, useRef, useState } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  initialDelay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  onAnimationComplete?: () => void;
  className?: string;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  initialDelay = 0,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className = '',
}) => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && onAnimationComplete) {
      const totalDuration = initialDelay + (elements.length * delay) + 700;
      const timer = setTimeout(onAnimationComplete, totalDuration);
      return () => clearTimeout(timer);
    }
  }, [inView, elements.length, delay, initialDelay, onAnimationComplete]);

  const getInitialTransform = () => {
    if (direction === 'top') return 'translateY(-20px)';
    return 'translateY(20px)';
  };

  return (
    <div ref={containerRef} className={`inline-flex flex-wrap ${className}`}>
      {elements.map((el, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            transform: inView ? 'translateY(0)' : getInitialTransform(),
            transitionDelay: `${initialDelay + (i * delay)}ms`,
            // Only add margin if it's not the last word to avoid double-spacing issues
            marginRight: (animateBy === 'words' && i !== elements.length - 1) ? '0.3em' : '0',
          }}
        >
          {el === ' ' ? '\u00A0' : el}
        </span>
      ))}
    </div>
  );
};

export default BlurText;
