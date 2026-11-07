import type { ReactNode } from 'react';
import type { SectionText } from '../data/types';

/**
 * The section number comes from a CSS counter (see styles.css), so numbering
 * stays 01, 02, 03… even when a section is hidden.
 */
export function SectionHead({ id, text }: { id: string; text: SectionText }) {
  return (
    <header className="section__head">
      <p className="eyebrow">
        <span className="section__index" aria-hidden="true" />
        {text.label}
      </p>
      <div>
        <h2 id={`${id}-title`}>{text.heading}</h2>
        {text.blurb ? <p className="section__blurb">{text.blurb}</p> : null}
      </div>
    </header>
  );
}

export function GhostNote({ children }: { children: ReactNode }) {
  return (
    <p className="ghost-note">
      <strong>Placeholder</strong> · {children} Hidden in the production build.
    </p>
  );
}
