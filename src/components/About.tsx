import { portfolio } from '../data/portfolio';
import { aboutParagraphs, visible } from '../lib/content';
import { SectionHead } from './SectionHead';

export function About() {
  if (!visible.about) return null;
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHead id="about" text={portfolio.text.about} />
        <div className="prose">
          {aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
