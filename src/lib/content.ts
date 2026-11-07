import { portfolio } from '../data/portfolio';
import type { ExperienceEntry, Project, SkillGroup } from '../data/types';

/** True while running `npm run dev`. Placeholders are only shown then. */
export const SHOW_PLACEHOLDERS = import.meta.env.DEV;

const PLACEHOLDER = /ADD_[A-Z_]+/;
const GITHUB_REPO = /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+(\/\S*)?$/i;
const HTTP_URL = /^https?:\/\/\S+$/i;

const filled = (value?: string) => !!value && value.trim() !== '' && !PLACEHOLDER.test(value);

export const isHttpUrl = (value?: string) => !!value && HTTP_URL.test(value.trim());

export function isProjectComplete(p: Project): boolean {
  return (
    filled(p.title) &&
    filled(p.description) &&
    GITHUB_REPO.test(p.repoUrl.trim()) &&
    !PLACEHOLDER.test(p.role) &&
    !(p.impact && PLACEHOLDER.test(p.impact))
  );
}

export function isExperienceComplete(e: ExperienceEntry): boolean {
  return filled(e.organization) && filled(e.title) && filled(e.start);
}

export interface ProjectEntry {
  project: Project;
  placeholder: boolean;
}

export interface ExperienceItem {
  entry: ExperienceEntry;
  placeholder: boolean;
}

export interface SkillItem {
  group: SkillGroup;
  placeholder: boolean;
}

const projectEntries: ProjectEntry[] = portfolio.projects
  .filter((p) => !p.hidden)
  .map((project) => ({ project, placeholder: !isProjectComplete(project) }))
  .filter((e) => SHOW_PLACEHOLDERS || !e.placeholder);

const featuredEntry =
  projectEntries.find((e) => e.project.featured) ?? projectEntries[0] ?? null;

export const work = {
  featured: featuredEntry,
  rest: projectEntries.filter((e) => e !== featuredEntry),
};

export const experienceItems: ExperienceItem[] = portfolio.experience
  .filter((e) => !e.hidden)
  .map((entry) => ({ entry, placeholder: !isExperienceComplete(entry) }))
  .filter((e) => SHOW_PLACEHOLDERS || !e.placeholder);

export const skillItems: SkillItem[] = portfolio.skills
  .map((group) => {
    const items = group.items.filter(filled);
    return { group: { ...group, items }, placeholder: items.length === 0 };
  })
  .filter((s) => SHOW_PLACEHOLDERS || !s.placeholder);

export const approachSteps = portfolio.approach.filter((s) => filled(s.title) && filled(s.summary));

export const aboutParagraphs = portfolio.about.paragraphs.filter(filled);

const { sections, person } = portfolio;

export const visible = {
  work: sections.work && projectEntries.length > 0,
  approach: sections.approach && approachSteps.length > 0,
  experience: sections.experience && experienceItems.length > 0,
  skills: sections.skills && skillItems.length > 0,
  about: sections.about && aboutParagraphs.length > 0,
  contact: sections.contact && (filled(person.email) || isHttpUrl(person.github) || isHttpUrl(person.linkedin)),
};

/** Resolves the resume setting to a link, or null when none is configured. */
export function resumeHref(): string | null {
  const raw = person.resume.trim();
  if (!raw) return null;
  if (HTTP_URL.test(raw)) return raw;
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${raw.replace(/^\.?\/+/, '')}`;
}

export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  visible.work && { href: '#work', label: 'Work' },
  visible.experience && { href: '#experience', label: 'Experience' },
  visible.approach && { href: '#approach', label: 'Approach' },
  visible.contact && { href: '#contact', label: 'Contact' },
].filter((item): item is NavItem => Boolean(item));
