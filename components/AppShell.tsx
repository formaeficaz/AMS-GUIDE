'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { useTheme } from './ThemeProvider';

interface Props {
  completed: Record<string, boolean>;
  completedCount: number;
  children: React.ReactNode;
}

export function AppShell({ completed, completedCount, children }: Props) {
  const { theme, toggle } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--bg-app)' }}>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col w-72 flex-shrink-0 overflow-hidden"
        style={{ background: 'var(--bg-sidebar)', borderRight: '1px solid var(--border)' }}
      >
        <Sidebar completed={completed} completedCount={completedCount} />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.6)' }}
            onClick={() => setSidebarOpen(false)}
          />
          <aside
            className="relative w-80 flex flex-col h-full overflow-hidden z-10"
            style={{ background: 'var(--bg-sidebar)', borderRight: '1px solid var(--border)' }}
          >
            <Sidebar
              completed={completed}
              completedCount={completedCount}
              onClose={() => setSidebarOpen(false)}
            />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center justify-between px-4 py-3 flex-shrink-0"
          style={{ background: 'var(--bg-app)', borderBottom: '1px solid var(--border)' }}
        >
          <button
            className="lg:hidden flex items-center gap-2 text-sm px-3 py-1.5 rounded"
            style={{
              background: 'var(--bg-hover)',
              color: 'var(--gold)',
              border: '1px solid var(--border-soft)',
            }}
            onClick={() => setSidebarOpen(true)}
          >
            <span>☰</span>
            <span>Chapters</span>
          </button>

          <div className="hidden lg:block text-xs tracking-widest uppercase"
            style={{ color: 'var(--crimson)' }}>
            The AMS Guide
          </div>

          <button
            onClick={toggle}
            className="text-sm px-3 py-1.5 rounded transition-all"
            style={{
              background: 'var(--note-bg)',
              border: '1px solid var(--border-gold)',
              color: 'var(--gold)',
            }}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀' : '☽'}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
