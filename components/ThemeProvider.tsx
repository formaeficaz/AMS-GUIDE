'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: 'dark', toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ams-guide-progress');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.theme) setTheme(parsed.theme);
      }
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const toggle = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      try {
        const stored = localStorage.getItem('ams-guide-progress');
        const parsed = stored ? JSON.parse(stored) : {};
        localStorage.setItem('ams-guide-progress', JSON.stringify({ ...parsed, theme: next }));
      } catch {}
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
