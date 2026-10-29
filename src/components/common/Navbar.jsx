import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import '../../styles/Navbar.css';

export default function Navbar({ logoInitials = "Portfolio", links = [] }) {
  const { activeSection, setSection, mode, toggleMode } = useTheme();

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="portfolio-navbar" role="navigation" aria-label="Main Navigation">
      <a
        href="#hero"
        className="logo"
        onClick={(e) => handleLinkClick(e, 'hero')}
      >
        {logoInitials}<span>.</span>
      </a>

      <ul className="nav-links">
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <li key={link.id}>
              <a
                href={link.href}
                className={isActive ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          );
        })}
        <li>
          <button
            className="theme-toggle"
            onClick={toggleMode}
            aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
          >
            {mode === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
