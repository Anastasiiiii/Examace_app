import React, { useState, useEffect } from "react";
import useLocalStorage from "../elements/useLocalStorage.js";
import { useNavigate } from "react-router-dom";
import "../styles/MainPage.css";
import "../styles/Formulas.css";
import Menu from "../components/Menu.jsx";
import ReadingTask from "../components/ReadingTask.jsx";

const ReadingPage = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || { id: "Guest" }
  );
  const [isDarkMode, setIsDarkMode] = useLocalStorage(false);
  const navigate = useNavigate();
  const menuList = ["Home", "Cards", "Reading", "Test"];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  const handleNavigate = (path) => {
    navigate(path, { state: { id: currentUser.id } });
  };

  return (
    <div className="App" style={{ backgroundColor: "var(--background-color)" }}>
      <menu className="menu">
        <Menu list={menuList} onNavigate={handleNavigate} />
        <button className="mode-button" onClick={toggleDarkMode}>
          Dark mode
        </button>
      </menu>
      <div>
        <ReadingTask />
      </div>
    </div>
  );
};

export default ReadingPage;
