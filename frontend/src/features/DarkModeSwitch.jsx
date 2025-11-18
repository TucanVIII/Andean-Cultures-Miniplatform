import { useState,useEffect } from "react"

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

import "../styles/darkMode.css"

const DarkModeSwitch = () => {

  const estadoInicial = JSON.parse(localStorage.getItem("dark-mode") || false);
  const [darkMode, setDarkMode] = useState(estadoInicial);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("dark-mode", !darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const content = (
    <label className="dark-mode">
      <input
        type="checkbox"
        name="dark-mode"
        id="dark-mode"
        onChange={toggleDarkMode}
      />
      <span className={`icon sun ${!darkMode ? "active" : ""}`}>
        <FaSun />
      </span>
      <span className={`icon moon ${darkMode ? "active" : ""}`}>
        <FaMoon />
      </span>
    </label>
  );

  return content;
};

export default DarkModeSwitch;
