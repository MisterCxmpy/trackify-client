import React, { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import styles from './index.module.css';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    setIsDarkMode(true);
    localStorage.setItem("theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    setIsDarkMode(false);
    localStorage.setItem("theme", "light");
  };

  const toggleTheme = () => {
    const body = document.querySelector('body');
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <button className={styles['theme-toggle']} onClick={toggleTheme}>
      {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
}
