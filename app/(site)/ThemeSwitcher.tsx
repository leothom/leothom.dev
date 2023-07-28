"use client"
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faAdjust } from '@fortawesome/free-solid-svg-icons';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
        </button>
      ) : theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <FontAwesomeIcon icon={faMoon} className="text-blue-500" />
        </button>
      ) : (
        <button onClick={() => setTheme('system')}>
          <FontAwesomeIcon icon={faAdjust} className="text-gray-500" />
        </button>
      )}
    </div>
  );
}
