import { portfolio } from '../data/portfolio';
import { skillItems, visible } from '../lib/content';
import { GhostNote, SectionHead } from './SectionHead';

export function Skills() {
  if (!visible.skills) return null;
  const hasGhost = skillItems.some((s) => s.placeholder);

  return (
    <section id="skills" className="section section--tint" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHead id="skills" text={portfolio.text.skills} />
        {hasGhost ? (
          <GhostNote>
            Add skills to each category in <code>src/data/portfolio.ts</code>. Empty categories are hidden.
          </GhostNote>
        ) : null}
        <div className="skills">
          {skillItems.map(({ group, placeholder }) => (
            <section key={group.category} className={`skill-group${placeholder ? ' skill-group--ghost' : ''}`} aria-label={group.category}>
              <h3>{group.category}</h3>
              {group.items.length > 0 ? (
                <ul className="chips chips--lg">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="muted">No skills added yet.</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
