import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Routes otherwise keep the previous page's scroll position.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'instant' opts out of the global `scroll-behavior: smooth`, which
    // would otherwise animate the jump on every navigation.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
