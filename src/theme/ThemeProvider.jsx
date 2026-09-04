import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext, STORAGE_KEY } from './ThemeContext';

const DARK_QUERY = '(prefers-color-scheme: dark)';

function prefersDark() {
  return window.matchMedia(DARK_QUERY).matches;
}

// An absent key means "follow the system" — there is no "system" string to
// go stale.
function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
}

function readDom() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';
}

const ThemeProvider = ({ children }) => {
  // Seeded from what the inline script in index.html already painted, so
  // React can never contradict what is on screen.
  const [theme, setTheme] = useState(readDom);
  const [isExplicit, setIsExplicit] = useState(() => readStored() !== null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  // Track the OS only while the user has not chosen for themselves.
  useEffect(() => {
    if (isExplicit) return;
    const mq = window.matchMedia(DARK_QUERY);
    const onChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [isExplicit]);

  // Keep other tabs in sync.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== STORAGE_KEY) return;
      const v = readStored();
      setIsExplicit(v !== null);
      setTheme(v ?? (prefersDark() ? 'dark' : 'light'));
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // private mode — the choice just won't persist
      }
      return next;
    });
    setIsExplicit(true);
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
