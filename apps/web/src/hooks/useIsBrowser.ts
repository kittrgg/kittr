import { useState, useEffect } from 'react';

const isDomAvailable = Boolean(
  typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement,
);

/** A hook to detect if React is currently being rendered on the browser. Returns a boolean. */
export const useIsBrowser = (): boolean => {
  const [isBrowser, setIsBrowser] = useState(isDomAvailable);

  useEffect(() => {
    setIsBrowser(isDomAvailable);
    return () => {
      setIsBrowser(false);
    };
  }, []);

  return isBrowser;
};
