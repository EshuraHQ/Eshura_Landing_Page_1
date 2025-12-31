import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'adaptive';
}

/**
 * Shared Logo component used across Navbar, Footer, ChatWidget, and ContactUs.
 * @param className - Additional CSS classes for sizing (e.g., "w-8 h-8")
 * @param variant - Color variant: 'dark' (black), 'light' (white), 'adaptive' (responds to theme)
 */
export const Logo: React.FC<LogoProps> = ({ 
  className = "w-8 h-8", 
  variant = 'adaptive' 
}) => {
  const colorClass = {
    dark: 'text-black',
    light: 'text-white',
    adaptive: 'text-black dark:text-white',
  }[variant];

  return (
    <svg 
      className={`${className} ${colorClass} fill-none stroke-current`} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M25 25V75L75 35" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 75V25L25 65" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/**
 * Logo icon variant for chat bubbles (inverted colors in dark mode)
 */
export const LogoIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    className={`${className} text-white dark:text-black fill-none stroke-current`} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M25 25V75L75 35" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M75 75V25L25 65" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Logo;
