import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-brand">Todo Master</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="theme-switcher">
        <select value={theme} onChange={(e) => setTheme(e.target.value as any)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cyberpunk">Cyberpunk</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
