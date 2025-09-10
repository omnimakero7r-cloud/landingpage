import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design using media queries
 * @param query - The media query string (e.g., "(min-width: 768px)")
 * @returns boolean - Whether the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);

    // Create event listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add event listener
    if (media.addEventListener) {
      media.addEventListener('change', listener);
    } else {
      // For very old browsers, set initial state and skip listener
      setMatches(media.matches);
    }

    // Cleanup function
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener);
      }
      // Remove the removeListener fallback as well
    };
  }, [query]);

  return matches;
}