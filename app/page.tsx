'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { AppShell } from '@/components/AppShell';
import { ProgressBar } from '@/components/ProgressBar';
import { chapters, PARTS, totalChapters } from '@/data/chapters';

export default function HomePage() {
  const { state, mounted, completedCount } = useProgress();

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen"
        style={{ background: 'var(--bg-app)', color: 'var(--gold)' }}>
        <div className="text-sm tracking-widest animate-pulse">Loading…</div>
      </div>
    );
  }

  const grouped = chapters.reduce<Record<number, typeof chapters>>((acc, ch) => {
    if (!acc[ch.partNumber]) acc[ch.partNumber] = [];
    acc[ch.partNumber].push(ch);
    return acc;
  }, {});

  const pct = Math.round((completedCount / totalChapters) * 100);

  return (
    <AppShell completed={state.completed} completedCount={completedCount}>
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Hero */}
        <div className="text-center mb-14">
          <div className="text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--text-muted)' }}>
            The Complete Devotional Series
          </div>
          <h1 className="text-4xl font-bold mb-2"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--gold)' }}>
            The AMS Guide
          </h1>
          <p className="text-lg mb-1" style={{ color: 'var(--text-muted)' }}>
            Anchor · Movement · Surrender
          </p>
          <p className="text-sm max-w-md mx-auto mt-4"
            style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            A guided prayer routine inspired by Traditional Christian Devotion.
          </p>

          {/* Progress card */}
          <div className="mt-10 rounded-xl p-6 text-left"
            style={{
              background: 'var(--prayer-bg)',
              border: '1px solid var(--border-gold)',
            }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                Your Progress
              </span>
              <span className="text-2xl font-bold" style={{ color: 'var(--gold)' }}>
                {pct}%
              </span>
            </div>
            <ProgressBar completedCount={completedCount} />
            <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
              {completedCount} of {totalChapters} sections completed
              {completedCount === 0 && ' — Start with Chapter 1 below'}
              {completedCount === totalChapters && ' — Well done! You have completed the full guide.'}
            </p>
          </div>
        </div>

        {/* Chapter list by part */}
        {Object.entries(grouped).map(([partNumStr, chs]) => {
          const partNum = parseInt(partNumStr);
          const partLabel = partNum === 0
            ? 'Introduction'
            : PARTS.find((p) => p.number === partNum)?.title ?? '';

          const partDone = chs.filter((ch) => state.completed[ch.id]).length;

          return (
            <section key={partNum} className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: 'var(--text-muted)' }}>
                    {partNum === 0 ? 'Introduction' : `Part ${partNum}`}
                  </div>
                  <h2 className="text-base font-bold"
                    style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }}>
                    {partLabel}
                  </h2>
                </div>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {partDone}/{chs.length}
                </span>
              </div>

              <div className="rounded-xl overflow-hidden"
                style={{ border: '1px solid var(--border-soft)' }}>
                {chs.map((ch, idx) => {
                  const href = ch.id === 'intro' ? '/chapter/intro' : `/chapter/${ch.id}`;
                  const done = !!state.completed[ch.id];
                  const hasNote = !!(state.notes[ch.id]?.trim());

                  return (
                    <Link
                      key={ch.id}
                      href={href}
                      className="flex items-center gap-4 px-5 py-4 group transition-all"
                      style={{
                        background: done ? 'var(--done-bg)' : 'var(--bg-card)',
                        borderTop: idx > 0 ? '1px solid var(--border-soft)' : 'none',
                      }}
                    >
                      <span
                        className="w-5 h-5 rounded-full border flex items-center justify-center text-xs flex-shrink-0 transition-all"
                        style={{
                          borderColor: done ? 'var(--gold)' : 'var(--border)',
                          background: done ? 'var(--gold)' : 'transparent',
                          color: done ? 'var(--bg-app)' : 'transparent',
                        }}
                      >
                        ✓
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          {ch.number > 0 && (
                            <span className="text-xs" style={{ color: 'var(--crimson)' }}>
                              {String(ch.number).padStart(2, '0')}
                            </span>
                          )}
                          <span
                            className="text-sm font-medium truncate"
                            style={{ color: done ? 'var(--text-muted)' : 'var(--text-primary)' }}
                          >
                            {ch.title}
                          </span>
                          {hasNote && (
                            <span className="text-xs" style={{ color: 'var(--gold)' }} title="Has notes">
                              ✍
                            </span>
                          )}
                        </div>
                        <div className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-faint)' }}>
                          {ch.subtitle}
                        </div>
                      </div>

                      <span className="text-xs flex-shrink-0"
                        style={{ color: 'var(--crimson)' }}>
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Footer */}
        <div className="text-center mt-16 pb-8">
          <div className="text-xs tracking-widest" style={{ color: 'var(--text-dark)' }}>
            + * ~
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--text-faint)' }}>
            AMS Guide · Traditional Christian Devotion · 60-Day Satisfaction Guarantee
          </p>
        </div>
      </div>
    </AppShell>
  );
}
