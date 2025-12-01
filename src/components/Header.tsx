

import "../App.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">Where in the world?</h1>

        <button className="header-theme-toggle">
          <span className="header-theme-icon">🌙</span>
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
}