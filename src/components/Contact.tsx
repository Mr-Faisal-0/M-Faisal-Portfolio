import { portfolio } from '../data/portfolio';
import { isHttpUrl, visible } from '../lib/content';
import { ArrowUpRight } from './Icons';
import { SectionHead } from './SectionHead';

export function Contact() {
  if (!visible.contact) return null;
  const { person, contact } = portfolio;
  const hasGithub = isHttpUrl(person.github);
  const hasLinkedin = isHttpUrl(person.linkedin);

  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-title">
      <div className="wrap">
        <SectionHead id="contact" text={portfolio.text.contact} />
        <div className="contact">
          <p className="contact__lead">{contact.invitation}</p>
          <div className="contact__links">
            {person.email ? (
              <a className="contact__email" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            ) : null}
            {person.altEmail ? (
              <a className="contact__alt" href={`mailto:${person.altEmail}`}>
                {person.altEmail}
              </a>
            ) : null}
            <ul className="contact__social">
              {hasGithub ? (
                <li>
                  <a href={person.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                    <ArrowUpRight />
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </li>
              ) : null}
              {hasLinkedin ? (
                <li>
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <ArrowUpRight />
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
