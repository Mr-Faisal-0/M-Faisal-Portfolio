import type { Portfolio } from './types';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT YOUR PORTFOLIO HERE.
 *  Everything personal on the site is read from this file.
 *
 *  Placeholders look like  ADD_SOMETHING  or are left as ''.
 *  In the production build, any entry that is still a placeholder is hidden
 *  (and a section with nothing to show disappears, including its nav link).
 *  While running `npm run dev` the placeholders are shown as dashed boxes so
 *  you can see where your content will go.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const portfolio: Portfolio = {
  // ── Page metadata ─────────────────────────────────────────────────────────
  site: {
    title: 'Mohammed Faisal Pasha — AI/ML Engineer',
    description:
      'Portfolio of Mohammed Faisal Pasha, an AI/ML engineer based in Hassan & Bangalore. Available for immediate hire.',
    // Fill in after deploying, e.g. 'https://Mr-Faisal-0.github.io/portfolio/'.
    // Social previews (og:url / og:image) only work with an absolute URL.
    siteUrl: '',
    // Put a 1200x630 image in /public and name it here, e.g. 'og-image.png'. '' = none.
    socialImage: '',
    // One of: 'sovereign-trust' | 'heritage-estate' | 'pure-quiet-luxury'
    //       | 'imperial-reserve' | 'monolith-executive' | 'royal-sapphire'
    theme: 'sovereign-trust',
    language: 'en',
  },

  // ── Who you are ───────────────────────────────────────────────────────────
  person: {
    name: 'Mohammed Faisal Pasha',
    wordmark: 'Mohammed Faisal Pasha',
    role: 'AI/ML Engineer',
    location: 'Hassan & Bangalore · UTC+05:30',
    email: 'mohammedfaisalpasha0@gmail.com',
    altEmail: 'official.muhammedfaisal@gmail.com',
    github: 'https://github.com/Mr-Faisal-0',
    linkedin: 'https://www.linkedin.com/in/mohammed-faisal-pasha/',
    // Resume: leave '' to hide every Resume button.
    // Either drop resume.pdf into /public and set 'resume.pdf',
    // or paste a full https:// link (Google Drive, Dropbox, etc.).
    resume: '',
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    tagline: 'Applied Intelligence, Made Useful.',
    // Suggested wording — edit freely so it says what you actually stand behind.
    headline: 'I turn complex data into intelligent systems people can rely on.',
    emphasis: 'people can rely on.',
    intro:
      'AI/ML engineer based in Hassan & Bangalore. I like problems that are framed carefully, measured honestly, and built to keep working after the demo.',
    availability: 'Available for immediate hire.',
    showAvailability: true,
  },

  // ── Section switches and headings ─────────────────────────────────────────
  sections: {
    work: true,
    approach: true,
    experience: true,
    skills: true,
    about: true,
    contact: true,
  },
  text: {
    work: {
      label: 'Selected Work',
      heading: 'Projects, straight from the source.',
      blurb: 'Each card opens the project’s GitHub repository in a new tab.',
    },
    approach: {
      label: 'Approach',
      heading: 'Frame, build, evaluate, ship.',
      blurb: 'The order I try to work in, and why each step earns its place.',
    },
    experience: {
      label: 'Experience',
      heading: 'Where I’ve worked.',
    },
    skills: {
      label: 'Toolkit',
      heading: 'What I work with.',
      blurb: 'Grouped by area. The projects above are the evidence; this is just the index.',
    },
    about: {
      label: 'About',
      heading: 'A short introduction.',
    },
    contact: {
      label: 'Contact',
      heading: 'Let’s talk.',
    },
  },

  // ── Projects ──────────────────────────────────────────────────────────────
  // ADD / REMOVE / REORDER: each `{ ... }` block is one project. The order here
  // is the order on the page. Put `featured: true` on the one you want large.
  // A project only appears once title, description and a real GitHub repoUrl
  // are filled in and no field still contains ADD_….
  projects: [
    {
      id: 'featured-project',
      title: 'ADD_PROJECT_TITLE',
      description: 'ADD_ONE_OR_TWO_SENTENCES_ON_WHAT_IT_DOES',
      role: 'ADD_YOUR_ROLE',
      technologies: [], // e.g. ['Python', 'PyTorch']
      repoUrl: '', // e.g. 'https://github.com/Mr-Faisal-0/your-repo'
      // demoUrl: 'https://…',            // optional live demo
      // impact: 'ADD_A_REAL_MEASURED_RESULT', // optional, only if you can back it up
      featured: true,
    },
    {
      id: 'project-two',
      title: 'ADD_PROJECT_TITLE',
      description: 'ADD_ONE_OR_TWO_SENTENCES_ON_WHAT_IT_DOES',
      role: 'ADD_YOUR_ROLE',
      technologies: [],
      repoUrl: '',
    },
    {
      id: 'project-three',
      title: 'ADD_PROJECT_TITLE',
      description: 'ADD_ONE_OR_TWO_SENTENCES_ON_WHAT_IT_DOES',
      role: 'ADD_YOUR_ROLE',
      technologies: [],
      repoUrl: '',
    },
  ],

  // ── Approach ──────────────────────────────────────────────────────────────
  // Draft copy describing a way of working. Reword anything that doesn’t match
  // how you actually work.
  approach: [
    {
      title: 'Frame',
      summary:
        'Start with the decision the system has to support and the cost of getting it wrong. Agree what “good” means before touching a model.',
    },
    {
      title: 'Build',
      summary:
        'Begin with the simplest baseline that could work, keep the data pipeline reproducible, and add complexity only when the baseline fails.',
    },
    {
      title: 'Evaluate',
      summary:
        'Test against held-out data and the cases that matter most, not just the average. Report what the system gets wrong as plainly as what it gets right.',
    },
    {
      title: 'Ship',
      summary:
        'Package it so other people can run, monitor and maintain it, and keep watching it once real users arrive.',
    },
  ],

  // ── Experience ────────────────────────────────────────────────────────────
  // ADD / REMOVE / REORDER: one `{ ... }` block per role, newest first.
  // An entry appears once organization, title and start are filled in.
  experience: [
    {
      organization: 'ADD_ORGANIZATION',
      title: 'ADD_JOB_TITLE',
      start: '', // e.g. 'Jun 2024'
      end: '', // '' = Present
      location: '',
      highlights: [], // e.g. ['Built X that did Y']
    },
  ],

  // ── Skills ────────────────────────────────────────────────────────────────
  // Only list what you can speak to in an interview. A category with no items
  // is hidden on the live site.
  skills: [
    { category: 'Machine Learning', items: [] },
    { category: 'Data & Engineering', items: [] },
    { category: 'Tools', items: [] },
  ],

  // ── About ─────────────────────────────────────────────────────────────────
  // Add more strings to grow this. Keep it factual and specific.
  about: {
    paragraphs: [
      'I’m Mohammed Faisal Pasha, an AI/ML engineer based between Hassan and Bangalore. I’m looking for my next role and available to start immediately.',
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    invitation:
      'If you’re hiring for an AI/ML role, or want to talk through a problem, send me a note. Email is the quickest way to reach me.',
  },
};
