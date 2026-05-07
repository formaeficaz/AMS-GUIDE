'use client';

import { totalChapters } from '@/data/chapters';

interface Props {
  completedCount: number;
}

export function ProgressBar({ completedCount }: Props) {
  const pct = Math.round((completedCount / totalChapters) * 100);

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 rounded-full overflow-hidden"
        style={{ background: 'var(--border-soft)' }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, var(--crimson), var(--gold))',
          }}
        />
      </div>
      <span className="text-xs font-mono whitespace-nowrap"
        style={{ color: 'var(--gold)' }}>
        {completedCount}/{totalChapters} · {pct}%
      </span>
    </div>
  );
}
