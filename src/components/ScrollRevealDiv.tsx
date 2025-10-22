"use client"

import React, { useState, useEffect } from 'react';

// Define the scroll threshold (how far the user must scroll to show the div)
const SCROLL_THRESHOLD = 10; 

function ScrollRevealDiv({ children, className }: { children: React.ReactNode, className?: string }) {
  // State to track whether the element should be visible
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Define the handler function
    const handleScroll = () => {
      // Check the vertical scroll position (distance from the top)
      const scrolledY = window.scrollY;

      if (scrolledY > SCROLL_THRESHOLD) {
        // User has scrolled past the threshold
        setIsVisible(true);
      } else {
        // User is near the top
        setIsVisible(false);
      }
    };

    // 2. Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // 3. Clean up the event listener when the component unmounts
    // (Crucial for performance and avoiding memory leaks)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs only on mount and unmount

  // Use a Tailwind class to hide/show the div
  // 'hidden' hides it completely (display: none)
  // 'block' or whatever is needed to show it
  const visibilityClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none';

  return (
    <div 
      className={`transition-all duration-300 ease-in-out ${className} ${visibilityClass}`}
      // The fixed positioning is necessary for the element to stay in view 
      // while the user scrolls.
    >
      {children}
    </div>
  );
}

export default ScrollRevealDiv;