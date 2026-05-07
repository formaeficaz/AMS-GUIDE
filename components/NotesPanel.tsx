'use client';

import { useState, useEffect } from 'react';

interface Props {
  chapterId: string;
  note: string;
  onSave: (chapterId: string, note: string) => void;
}

export function NotesPanel({ chapterId, note, onSave }: Props) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(note);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setDraft(note);
  }, [note, chapterId]);

  const handleSave = () => {
    onSave(chapterId, draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const hasNote = note.trim().length > 0;

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 text-sm px-3 py-2 rounded-md transition-all"
        style={{
          background: open ? 'var(--note-bg)' : 'transparent',
          border: '1px solid var(--border-gold)',
          color: hasNote ? 'var(--gold)' : 'var(--text-muted)',
        }}
      >
        <span>{hasNote ? '📝' : '✏️'}</span>
        <span>{hasNote ? 'View note' : 'Add note'}</span>
      </button>

      {open && (
        <div className="mt-3 rounded-lg overflow-hidden"
          style={{ border: '1px solid var(--border-gold)' }}>
          <div
            className="px-4 py-2 text-xs tracking-wider uppercase"
            style={{
              background: 'var(--table-head)',
              color: 'var(--gold)',
              borderBottom: '1px solid var(--border-gold)',
            }}
          >
            My Notes — This Chapter
          </div>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Write your reflections, insights, or questions here..."
            rows={5}
            className="w-full px-4 py-3 text-sm resize-none outline-none"
            style={{
              background: 'var(--bg-input)',
              color: 'var(--text-primary)',
              fontFamily: 'Georgia, serif',
              lineHeight: 1.7,
            }}
          />
          <div
            className="flex justify-end gap-2 px-4 py-2"
            style={{
              background: 'var(--bg-card)',
              borderTop: '1px solid var(--border-soft)',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              className="text-xs px-3 py-1.5 rounded transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="text-xs px-4 py-1.5 rounded font-medium transition-all"
              style={{
                background: saved ? '#4FAF6F' : 'var(--crimson)',
                color: 'var(--text-primary)',
              }}
            >
              {saved ? 'Saved ✓' : 'Save Note'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
