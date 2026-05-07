import { ContentBlock } from '@/data/chapters';

interface Props {
  blocks: ContentBlock[];
}

export function ChapterContent({ blocks }: Props) {
  return (
    <div className="space-y-0">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={i} className="mb-5 leading-relaxed text-base"
                style={{ color: 'var(--text-body)' }}>
                {block.text}
              </p>
            );

          case 'heading':
            return (
              <h2 key={i}
                className="text-sm font-bold tracking-widest uppercase mt-10 mb-4 pb-2"
                style={{
                  color: 'var(--gold)',
                  borderBottom: '1px solid var(--border-gold)',
                  fontFamily: 'Georgia, serif',
                }}>
                {block.text}
              </h2>
            );

          case 'subheading':
            return (
              <h3 key={i} className="text-base font-semibold mt-7 mb-3"
                style={{ color: 'var(--gold-light)', fontFamily: 'Georgia, serif' }}>
                {block.text}
              </h3>
            );

          case 'quote':
            return (
              <blockquote key={i}
                className="my-8 pl-5 py-4 rounded-r-md"
                style={{
                  borderLeft: '3px solid var(--crimson)',
                  background: 'var(--quote-bg)',
                }}>
                <p className="text-base italic mb-2 leading-relaxed"
                  style={{ color: 'var(--text-primary)' }}>
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.attribution && (
                  <cite className="text-sm not-italic" style={{ color: 'var(--gold)' }}>
                    — {block.attribution}
                  </cite>
                )}
              </blockquote>
            );

          case 'prayer':
            return (
              <div key={i}
                className="my-8 rounded-lg p-6"
                style={{
                  background: 'var(--prayer-bg)',
                  border: '1px solid var(--border-gold)',
                }}>
                {block.title && (
                  <div className="text-xs tracking-widest uppercase mb-4 pb-3"
                    style={{
                      color: 'var(--gold)',
                      borderBottom: '1px solid var(--border-gold)',
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                    }}>
                    {block.title}
                  </div>
                )}
                <div className="space-y-1">
                  {block.lines.map((line, li) => (
                    <p key={li}
                      className="text-base italic leading-relaxed"
                      style={{ color: 'var(--text-primary)' }}>
                      {line || <br />}
                    </p>
                  ))}
                </div>
              </div>
            );

          case 'list':
            return (
              <ul key={i} className="my-5 space-y-3 pl-0">
                {block.items.map((item, li) => (
                  <li key={li} className="flex gap-3 text-base leading-relaxed"
                    style={{ color: 'var(--text-body)' }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--gold)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case 'table':
            return (
              <div key={i} className="my-7 overflow-x-auto rounded-lg"
                style={{ border: '1px solid var(--border-gold)' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'var(--table-head)' }}>
                      {block.headers.map((h, hi) => (
                        <th key={hi}
                          className="px-4 py-3 text-left text-xs tracking-wider uppercase font-semibold"
                          style={{ color: 'var(--gold)' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri}
                        style={{
                          background: ri % 2 === 0 ? 'var(--table-row)' : 'transparent',
                          borderTop: '1px solid var(--border-soft)',
                        }}>
                        {row.map((cell, ci) => (
                          <td key={ci}
                            className="px-4 py-3 text-sm leading-snug"
                            style={{ color: ci === 0 ? 'var(--gold-light)' : 'var(--text-muted)' }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'note':
            return (
              <div key={i}
                className="my-6 rounded-md px-5 py-4 flex gap-3"
                style={{
                  background: 'var(--note-bg)',
                  border: '1px solid var(--note-border)',
                }}>
                <span className="mt-0.5 flex-shrink-0 text-sm" style={{ color: 'var(--gold)' }}>†</span>
                <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--text-muted)' }}>
                  {block.text}
                </p>
              </div>
            );

          case 'divider':
            return (
              <div key={i} className="my-10 flex items-center justify-center gap-3">
                <div className="h-px flex-1" style={{ background: 'var(--border-gold)' }} />
                <span className="text-xs tracking-widest" style={{ color: 'var(--crimson)' }}>+ * ~</span>
                <div className="h-px flex-1" style={{ background: 'var(--border-gold)' }} />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
