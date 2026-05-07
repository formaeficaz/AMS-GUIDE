'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { chapters } from '@/data/chapters';
import { useProgress } from '@/hooks/useProgress';
import { AppShell } from '@/components/AppShell';
import { ChapterContent } from '@/components/ChapterContent';
import { NotesPanel } from '@/components/NotesPanel';
import { ProgressBar } from '@/components/ProgressBar';

interface Props {
  params: Promise<{ id: string }>;
}

export default function ChapterPage({ params }: Props) {
  const { id } = use(params);
  const { state, mounted, completedCount, toggleCompleted, setNote } = useProgress();

  const chapterIndex = chapters.findIndex((c) => c.id === id);
  const chapter = chapters[chapterIndex];

  if (!chapter) notFound();

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen"
        style={{ background: 'var(--bg-app)', color: 'var(--gold)' }}>
        <div className="text-sm tracking-widest animate-pulse">Loading…</div>
      </div>
    );
  }

  const prev = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const next = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;
  const isDone = !!state.completed[chapter.id];
  const note = state.notes[chapter.id] ?? '';

  const partLabel = chapter.partNumber === 0
    ? 'Introduction'
    : `Part ${chapter.partNumber} — ${chapter.part}`;

  return (
    <AppShell completed={state.completed} completedCount={completedCount}>
      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-8"
          style={{ color: 'var(--text-faint)' }}>
          <Link href="/" className="transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
            Home
          </Link>
          <span>/</span>
          <span>{partLabel}</span>
        </div>

        {/* Chapter header */}
        <header className="mb-10">
          {chapter.number > 0 && (
            <div className="text-xs tracking-widest uppercase mb-3"
              style={{ color: 'var(--crimson)', fontFamily: 'var(--font-geist-sans), sans-serif' }}>
              Chapter {String(chapter.number).padStart(2, '0')}
            </div>
          )}
          <h1 className="text-3xl font-bold leading-tight mb-3"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--gold)' }}>
            {chapter.title}
          </h1>
          <p className="text-base" style={{
            color: 'var(--text-muted)',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
          }}>
            {chapter.subtitle}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: 'var(--border-gold)' }} />
            <span className="text-xs tracking-widest" style={{ color: 'var(--crimson)' }}>+ * ~</span>
            <div className="h-px flex-1" style={{ background: 'var(--border-gold)' }} />
          </div>
        </header>

        {/* Chapter body */}
        <article>
          <ChapterContent blocks={chapter.content} />
        </article>

        {/* Actions */}
        <div className="mt-12 pt-8"
          style={{ borderTop: '1px solid var(--border-gold)' }}>
          <div className="mb-6">
            <ProgressBar completedCount={completedCount} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <button
              onClick={() => toggleCompleted(chapter.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all"
              style={{
                background: isDone ? 'rgba(79,175,111,0.12)' : 'var(--prayer-bg)',
                border: `1px solid ${isDone ? 'rgba(79,175,111,0.35)' : 'var(--border-gold)'}`,
                color: isDone ? '#4FAF6F' : 'var(--text-primary)',
              }}
            >
              <span>{isDone ? '✓' : '○'}</span>
              <span>{isDone ? 'Completed' : 'Mark as Complete'}</span>
            </button>

            <NotesPanel chapterId={chapter.id} note={note} onSave={setNote} />
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-10 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={prev.id === 'intro' ? '/chapter/intro' : `/chapter/${prev.id}`}
              className="group flex flex-col p-4 rounded-lg transition-all"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-soft)',
              }}
            >
              <span className="text-xs mb-1" style={{ color: 'var(--text-faint)' }}>← Previous</span>
              <span className="text-sm font-medium leading-snug"
                style={{ color: 'var(--text-body)' }}>
                {prev.title}
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={next.id === 'intro' ? '/chapter/intro' : `/chapter/${next.id}`}
              className="group flex flex-col p-4 rounded-lg text-right transition-all"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-soft)',
              }}
            >
              <span className="text-xs mb-1" style={{ color: 'var(--text-faint)' }}>Next →</span>
              <span className="text-sm font-medium leading-snug"
                style={{ color: 'var(--text-body)' }}>
                {next.title}
              </span>
            </Link>
          ) : (
            <Link href="/"
              className="group flex flex-col p-4 rounded-lg text-right transition-all"
              style={{
                background: 'var(--note-bg)',
                border: '1px solid var(--border-gold)',
              }}
            >
              <span className="text-xs mb-1" style={{ color: 'var(--text-faint)' }}>Finished →</span>
              <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>
                Return to Home
              </span>
            </Link>
          )}
        </nav>

        <div className="h-16" />
      </div>
    </AppShell>
  );
}
