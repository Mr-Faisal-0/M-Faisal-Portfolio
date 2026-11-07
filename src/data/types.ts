export type ThemeName =
  | 'sovereign-trust'
  | 'heritage-estate'
  | 'pure-quiet-luxury'
  | 'imperial-reserve'
  | 'monolith-executive'
  | 'royal-sapphire';

export interface Project {
  /** Unique, URL-safe id. Only used as a React key and to seed the card graphic. */
  id: string;
  title: string;
  /** One or two sentences: what it does and why it matters. */
  description: string;
  /** Your role on the project, e.g. "Sole developer". Leave '' to hide. */
  role: string;
  technologies: string[];
  /** Must be a real https://github.com/<owner>/<repo> URL or the project stays hidden. */
  repoUrl: string;
  /** Optional live demo. Shown as a separate, labelled link. */
  demoUrl?: string;
  /** Optional measured result. Only fill in numbers you can back up. */
  impact?: string;
  /** Show this project as the large lead card. If none is flagged, the first one leads. */
  featured?: boolean;
  /** Set true to hide an entry without deleting it. */
  hidden?: boolean;
}

export interface ExperienceEntry {
  organization: string;
  title: string;
  /** Free text, e.g. "Jun 2024". */
  start: string;
  /** Free text. Leave '' for a current role (shown as "Present"). */
  end?: string;
  location?: string;
  /** Selected contributions. Keep them factual. */
  highlights: string[];
  hidden?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ApproachStep {
  title: string;
  summary: string;
}

export interface SectionText {
  label: string;
  heading: string;
  blurb?: string;
}

export interface Portfolio {
  site: {
    /** <title> and social title. */
    title: string;
    /** Meta description (aim for under 160 characters). */
    description: string;
    /** Full public URL once deployed, e.g. https://username.github.io/repo/. Needed for social previews. */
    siteUrl: string;
    /** Path inside /public to a 1200x630 image, e.g. 'og-image.png'. Leave '' for none. */
    socialImage: string;
    theme: ThemeName;
    language: string;
  };
  person: {
    name: string;
    /** Short wordmark in the header. Falls back to name. */
    wordmark?: string;
    role: string;
    location: string;
    email: string;
    /** Optional second address, shown smaller under the main one. */
    altEmail?: string;
    github: string;
    linkedin: string;
    /** '' hides every Resume button. Absolute URL, or a file in /public such as 'resume.pdf'. */
    resume: string;
  };
  hero: {
    tagline: string;
    headline: string;
    /** A phrase inside the headline to highlight. Ignored if the headline does not contain it. */
    emphasis: string;
    intro: string;
    availability: string;
    showAvailability: boolean;
  };
  /** Set a section to false to force it hidden. Sections without content hide themselves. */
  sections: {
    work: boolean;
    approach: boolean;
    experience: boolean;
    skills: boolean;
    about: boolean;
    contact: boolean;
  };
  text: {
    work: SectionText;
    approach: SectionText;
    experience: SectionText;
    skills: SectionText;
    about: SectionText;
    contact: SectionText;
  };
  projects: Project[];
  approach: ApproachStep[];
  experience: ExperienceEntry[];
  skills: SkillGroup[];
  about: {
    paragraphs: string[];
  };
  contact: {
    invitation: string;
  };
}
