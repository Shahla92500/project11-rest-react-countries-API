

import "../App.css"
import { useTheme } from "../context/ThemeContext";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">Where in the world?</h1>

        <button className="header-theme-toggle" onClick={toggleTheme}>
          <span className="header-theme-icon">
            {theme === "light" ? "🌙" : "☀️"} </span>
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
      </div>
    </header>
  );
}