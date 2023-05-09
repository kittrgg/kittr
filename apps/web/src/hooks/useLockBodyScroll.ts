import { useEffect } from 'react';

/**
 * This hook locks the scrolling of the body element.
 * It does this using "position: fixed;" and "width: 100vw;" on the body element.
 * These styles are removed when the hook is removed from render.
 * This is good for modals and layouts that take over the whole screen.
 */
export const useLockBodyScroll = (active = true) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).position;
    if (active) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100vw';
    }
    return () => {
      document.body.style.position = originalStyle;
      document.body.style.width = 'initial';
    };
  }, [active]);
};
