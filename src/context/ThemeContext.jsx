import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';

const ThemeContext = createContext();

export const themeConfig = {
  hero: { accent: '#7c6cff', accent2: '#22d3ee' },
  cloud: { accent: '#38bdf8', accent2: '#60a5fa' },
  fullstack: { accent: '#34d399', accent2: '#fbbf24' },
  genai: { accent: '#f472b6', accent2: '#a78bfa' },
  contact: { accent: '#a78bfa', accent2: '#f472b6' }
};

export function ThemeProvider({ children }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme-mode') || 'dark';
    }
    return 'dark';
  });

  // Apply data-theme attribute to html element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const setSection = useCallback((sectionId) => {
    if (themeConfig[sectionId]) {
      setActiveSection((prev) => (prev === sectionId ? prev : sectionId));
    }
  }, []);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({
    activeSection,
    setSection,
    mode,
    toggleMode,
    currentTheme: themeConfig[activeSection] || themeConfig.hero
  }), [activeSection, setSection, mode, toggleMode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
