import { useEffect, useRef, useState } from 'react';
import { portfolio } from '../data/portfolio';
import { navItems, resumeHref } from '../lib/content';
import { MenuIcon } from './Icons';

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const resume = resumeHref();
  const { person } = portfolio;

  // Escape closes the mobile menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // If the window grows to desktop width, reset the mobile menu state.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 860px)');
    const onChange = () => query.matches && setOpen(false);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap site-header__bar">
        <a className="wordmark" href="#top" onClick={close}>
          <span className="wordmark__mark" aria-hidden="true" />
          {person.wordmark ?? person.name}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <MenuIcon open={open} />
        </button>

        <nav id="primary-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
            {resume ? (
              <li>
                <a className="btn btn--sm" href={resume} target="_blank" rel="noopener noreferrer" onClick={close}>
                  Resume
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}
