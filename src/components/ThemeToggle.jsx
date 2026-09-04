import { useTheme } from '../theme/useTheme';
import { SunIcon, MoonIcon } from './Icons';

// Deliberately not aria-pressed / role="switch": the label already names the
// action, and the icon shows the state you would move to.
const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      className={`icon-btn ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
