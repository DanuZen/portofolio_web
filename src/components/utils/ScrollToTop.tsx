import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top of page on route change
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    window.scrollTo(0, 0);
    
    // Also try to scroll the main wrapper if it exists
    const mainWrapper = document.querySelector('main');
    if (mainWrapper) {
      mainWrapper.scrollTop = 0;
    }
    
    const body = document.querySelector('body');
    if (body) {
      body.scrollTop = 0;
    }
    
    const html = document.documentElement;
    if (html) {
      html.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
