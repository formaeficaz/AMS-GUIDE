'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { chapters, PARTS } from '@/data/chapters';
import { ProgressBar } from './ProgressBar';

interface Props {
  completed: Record<string, boolean>;
  completedCount: number;
  onClose?: () => void;
}

const partAccents: Record<number, string> = {
  0: '#9B8A78',
  1: '#C9A84C',
  2: '#8B2020',
  3: '#6B4FBB',
  4: '#4F8BBB',
  5: '#4FAF6F',
  6: '#BB8B4F',
  7: '#BB4F8B',
  8: '#4FBBBB',
};

export function Sidebar({ completed, completedCount, onClose }: Props) {
  const pathname = usePathname();

  const grouped = chapters.reduce<Record<number, typeof chapters>>((acc, ch) => {
    if (!acc[ch.partNumber]) acc[ch.partNumber] = [];
    acc[ch.partNumber].push(ch);
    return acc;
  }, {});

  return (
    <nav className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 py-5" style={{ borderBottom: '1px solid var(--border)' }}>
        <Link href="/" onClick={onClose} className="block">
          <div className="text-xs tracking-widest uppercase mb-1"
            style={{ color: 'var(--text-muted)' }}>
            The Complete Devotional Series
          </div>
          <div className="font-serif font-bold leading-tight text-lg"
            style={{ color: 'var(--gold)' }}>
            The AMS Guide
          </div>
          <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
            Anchor · Movement · Surrender
          </div>
        </Link>
        <div className="mt-4">
          <ProgressBar completedCount={completedCount} />
        </div>
      </div>

      {/* Chapter list */}
      <div className="flex-1 overflow-y-auto py-4">
        {Object.entries(grouped).map(([partNumStr, chs]) => {
          const partNum = parseInt(partNumStr);
          const partLabel = partNum === 0
            ? 'Introduction'
            : PARTS.find((p) => p.number === partNum)?.title ?? '';
          const accent = partAccents[partNum] ?? '#9B8A78';

          return (
            <div key={partNum} className="mb-5">
              <div className="px-5 mb-2">
                <span className="text-xs font-mono tracking-widest uppercase"
                  style={{ color: accent }}>
                  {partNum === 0 ? 'Intro' : `Part ${partNum}`} — {partLabel}
                </span>
              </div>
              {chs.map((ch) => {
                const href = ch.id === 'intro' ? '/chapter/intro' : `/chapter/${ch.id}`;
                const isActive = pathname === href;
                const isDone = !!completed[ch.id];

                return (
                  <Link
                    key={ch.id}
                    href={href}
                    onClick={onClose}
                    className="flex items-start gap-3 px-5 py-2.5 transition-all duration-150"
                    style={{
                      background: isActive ? 'var(--bg-hover)' : 'transparent',
                      borderLeft: isActive ? `2px solid ${accent}` : '2px solid transparent',
                    }}
                  >
                    <span
                      className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full border flex items-center justify-center text-xs transition-all"
                      style={{
                        borderColor: isDone ? 'var(--gold)' : 'var(--border)',
                        background: isDone ? 'var(--gold)' : 'transparent',
                        color: isDone ? 'var(--bg-app)' : 'transparent',
                      }}
                    >
                      ✓
                    </span>
                    <span className="text-sm leading-snug"
                      style={{
                        color: isActive ? 'var(--text-primary)' : isDone ? 'var(--text-muted)' : 'var(--text-body)',
                      }}>
                      {ch.number > 0 && (
                        <span className="text-xs mr-1.5" style={{ color: 'var(--text-muted)' }}>
                          {String(ch.number).padStart(2, '0')}.
                        </span>
                      )}
                      {ch.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
