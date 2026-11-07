import { portfolio } from '../data/portfolio';
import { approachSteps, visible } from '../lib/content';
import { SectionHead } from './SectionHead';

export function Approach() {
  if (!visible.approach) return null;
  return (
    <section id="approach" className="section section--tint" aria-labelledby="approach-title">
      <div className="wrap">
        <SectionHead id="approach" text={portfolio.text.approach} />
        <ol className="steps">
          {approachSteps.map((step, i) => (
            <li key={step.title} className="step">
              <span className="step__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="step__title">{step.title}</h3>
              <p>{step.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
