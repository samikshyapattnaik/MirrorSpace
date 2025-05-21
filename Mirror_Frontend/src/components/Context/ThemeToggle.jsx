import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;
