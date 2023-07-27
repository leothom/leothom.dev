"use client"
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const initialValue = window.localStorage.getItem("dark-mode");
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (initialValue) {
      document.body.classList.toggle("dark", initialValue === "dark");
      setDarkMode(initialValue === "dark");
    } else if (userPrefersDark) {
      document.body.classList.add("dark");
      setDarkMode(true);
      window.localStorage.setItem("dark-mode", "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newValue = !darkMode ? "dark" : "light";
    document.body.classList.toggle("dark", newValue === "dark");
    setDarkMode(!darkMode);
    window.localStorage.setItem("dark-mode", newValue);
  };

  return (
    <button onClick={toggleDarkMode} className="focus:outline-none">
      {darkMode ? (
        <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="text-blue-500" />
      )}
    </button>
  );
}

export default DarkModeToggle;
