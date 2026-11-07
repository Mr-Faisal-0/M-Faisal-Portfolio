import { portfolio } from '../data/portfolio';
import { experienceItems, visible } from '../lib/content';
import { GhostNote, SectionHead } from './SectionHead';

export function Experience() {
  if (!visible.experience) return null;
  const hasGhost = experienceItems.some((e) => e.placeholder);

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHead id="experience" text={portfolio.text.experience} />
        {hasGhost ? (
          <GhostNote>
            Fill in organization, title and start date for each role in <code>src/data/portfolio.ts</code>.
          </GhostNote>
        ) : null}
        <ol className="timeline">
          {experienceItems.map(({ entry, placeholder }, i) => (
            <li key={`${entry.organization}-${i}`} className={`role${placeholder ? ' role--ghost' : ''}`}>
              <p className="role__dates">
                {entry.start || 'Start date'} — {entry.end?.trim() ? entry.end : 'Present'}
                {entry.location ? <span className="role__loc">{entry.location}</span> : null}
              </p>
              <div className="role__main">
                <h3 className="role__title">{entry.title}</h3>
                <p className="role__org">{entry.organization}</p>
                {entry.highlights.length > 0 ? (
                  <ul className="role__list">
                    {entry.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
