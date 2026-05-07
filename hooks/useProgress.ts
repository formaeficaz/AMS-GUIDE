'use client';

import { useState, useEffect, useCallback } from 'react';

export type ProgressState = {
  completed: Record<string, boolean>;
  notes: Record<string, string>;
  theme: 'dark' | 'light';
};

const STORAGE_KEY = 'ams-guide-progress';

const defaultState: ProgressState = {
  completed: {},
  notes: {},
  theme: 'dark',
};

function load(): ProgressState {
  if (typeof window === 'undefined') return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

function save(state: ProgressState) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(defaultState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setState(load());
    setMounted(true);
  }, []);

  const toggleCompleted = useCallback((chapterId: string) => {
    setState((prev) => {
      const next = {
        ...prev,
        completed: {
          ...prev.completed,
          [chapterId]: !prev.completed[chapterId],
        },
      };
      save(next);
      return next;
    });
  }, []);

  const setNote = useCallback((chapterId: string, note: string) => {
    setState((prev) => {
      const next = {
        ...prev,
        notes: { ...prev.notes, [chapterId]: note },
      };
      save(next);
      return next;
    });
  }, []);

  const setTheme = useCallback((theme: 'dark' | 'light') => {
    setState((prev) => {
      const next = { ...prev, theme };
      save(next);
      return next;
    });
  }, []);

  const completedCount = Object.values(state.completed).filter(Boolean).length;

  return {
    state,
    mounted,
    completedCount,
    toggleCompleted,
    setNote,
    setTheme,
  };
}
