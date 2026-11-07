import { portfolio } from '../data/portfolio';
import { isHttpUrl, work, visible, type ProjectEntry } from '../lib/content';
import { ArrowUpRight, GithubMark } from './Icons';
import { ProjectGlyph } from './ProjectGlyph';
import { GhostNote, SectionHead } from './SectionHead';

function ProjectCard({ entry, featured }: { entry: ProjectEntry; featured?: boolean }) {
  const { project, placeholder } = entry;
  const showDemo = !placeholder && isHttpUrl(project.demoUrl);
  const hasRole = project.role.trim() !== '' && !project.role.includes('ADD_');

  const body = (
    <>
      <div className="card__glyph">
        <ProjectGlyph seed={project.id} />
      </div>
      <div className="card__body">
        {featured ? <p className="eyebrow">Featured project</p> : null}
        <h3 className="card__title">{project.title}</h3>
        <p className="card__desc">{project.description}</p>

        {hasRole ? (
          <p className="card__role">
            <span className="label">Role</span> {project.role}
          </p>
        ) : null}

        {project.impact ? (
          <p className="card__impact">
            <span className="label">Result</span> {project.impact}
          </p>
        ) : null}

        {project.technologies.length > 0 ? (
          <ul className="chips" aria-label="Technologies">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        ) : null}

        <div className="card__links">
          {placeholder ? (
            <span className="card__repo card__repo--ghost">
              <GithubMark /> Add a repository URL
            </span>
          ) : (
            /* The stretched ::after on this link makes the whole card clickable. */
            <a className="card__repo" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <GithubMark />
              View repository
              <ArrowUpRight />
              <span className="sr-only">
                {' '}
                for {project.title} on GitHub (opens in new tab)
              </span>
            </a>
          )}
          {showDemo ? (
            <a className="card__demo" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live demo
              <ArrowUpRight />
              <span className="sr-only">
                {' '}
                of {project.title} (opens in new tab)
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </>
  );

  return (
    <article
      className={`card${featured ? ' card--featured' : ''}${placeholder ? ' card--ghost' : ''}`}
      aria-label={project.title}
    >
      {body}
    </article>
  );
}

export function Work() {
  if (!visible.work) return null;
  const { featured, rest } = work;
  const hasGhost = [featured, ...rest].some((e) => e?.placeholder);

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="wrap">
        <SectionHead id="work" text={portfolio.text.work} />
        {hasGhost ? (
          <GhostNote>
            Fill in title, description and a real GitHub repoUrl for each project in <code>src/data/portfolio.ts</code>.
          </GhostNote>
        ) : null}
        <div className="work">
          {featured ? <ProjectCard entry={featured} featured /> : null}
          {rest.length > 0 ? (
            <div className="work-grid">
              {rest.map((entry) => (
                <ProjectCard key={entry.project.id} entry={entry} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
