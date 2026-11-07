import { portfolio } from '../data/portfolio';
import { resumeHref, visible } from '../lib/content';
import { PipelineMotif } from './PipelineMotif';

function Headline({ text, emphasis }: { text: string; emphasis: string }) {
  const at = emphasis ? text.indexOf(emphasis) : -1;
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <em>{emphasis}</em>
      {text.slice(at + emphasis.length)}
    </>
  );
}

export function Hero() {
  const { hero, person } = portfolio;
  const resume = resumeHref();

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--rule">
            {person.role}
            {hero.tagline ? <span className="eyebrow__sep"> / {hero.tagline}</span> : null}
          </p>

          <h1 id="hero-title">
            <Headline text={hero.headline} emphasis={hero.emphasis} />
          </h1>

          <p className="hero__intro">{hero.intro}</p>

          {hero.showAvailability && hero.availability ? (
            <p className="status">
              <span className="status__dot" aria-hidden="true" />
              <span>{hero.availability}</span>
              {person.location ? <span className="status__loc">{person.location}</span> : null}
            </p>
          ) : null}

          <div className="hero__actions">
            {visible.work ? (
              <a className="btn btn--primary" href="#work">
                See selected work
              </a>
            ) : (
              <a className="btn btn--primary" href="#contact">
                Get in touch
              </a>
            )}
            {resume ? (
              <a className="btn" href={resume} target="_blank" rel="noopener noreferrer">
                Resume
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : visible.work ? (
              <a className="btn" href="#contact">
                Get in touch
              </a>
            ) : null}
          </div>
        </div>

        <figure className="hero__figure">
          <PipelineMotif />
          <figcaption className="caption">Fig. 1 — Data, measured, shipped.</figcaption>
        </figure>
      </div>
    </section>
  );
}
