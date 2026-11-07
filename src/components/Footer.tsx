import { portfolio } from '../data/portfolio';
import { isHttpUrl, resumeHref } from '../lib/content';

export function Footer() {
  const { person } = portfolio;
  const resume = resumeHref();
  const links = [
    isHttpUrl(person.github) && { label: 'GitHub', href: person.github },
    isHttpUrl(person.linkedin) && { label: 'LinkedIn', href: person.linkedin },
    person.email && { label: 'Email', href: `mailto:${person.email}` },
    resume && { label: 'Resume', href: resume },
  ].filter((l): l is { label: string; href: string } => Boolean(l));

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__bar">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
        <ul>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} {...(l.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
