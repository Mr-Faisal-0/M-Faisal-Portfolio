# Mohammed Faisal Pasha — Portfolio

A static, single-page portfolio built with Vite, React and TypeScript. No backend, no CMS, no database. All personal content lives in **one file**:

```
src/data/portfolio.ts
```

## Preview locally

Requires Node 20.19 or newer (Node 22 recommended; the deploy workflow uses 22).

```bash
npm install
npm run dev        # live preview at http://localhost:5173
```

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

`npm run dev` shows unfinished entries as dashed "Placeholder" boxes so you can see where content goes. `npm run build` **hides** every entry that is still a placeholder, and hides any section left with nothing to show (including its nav link). What you see in dev is not what visitors see until the placeholders are filled in.

## Editing content

Open `src/data/portfolio.ts`. Every block has a comment above it.

| To change | Edit |
| --- | --- |
| Name, role, location, email, GitHub, LinkedIn | `person` |
| Hero headline, intro, availability line | `hero` (set `showAvailability: false` to hide the status line) |
| Section titles and blurbs | `text` |
| Show or hide a whole section | `sections` (`false` hides it) |
| Colour palette | `site.theme` |
| Page title, description, social preview | `site` |

### Add a project

Copy one `{ ... }` block inside `projects` and fill it in:

```ts
{
  id: 'my-project',                // unique, no spaces
  title: 'Project name',
  description: 'What it does and why it matters, in one or two sentences.',
  role: 'Sole developer',
  technologies: ['Python', 'PyTorch'],
  repoUrl: 'https://github.com/Mr-Faisal-0/my-project',
  demoUrl: 'https://example.com',  // optional, shown as a separate "Live demo" link
  impact: 'Real, measured result', // optional, only add numbers you can back up
},
```

A project is shown only when it has a title, a description and a real `https://github.com/owner/repo` URL, and none of its fields still contains `ADD_…`.

- **Remove:** delete its block, or add `hidden: true` to keep it for later.
- **Reorder:** move the block up or down. The order in the file is the order on the page.
- **Feature:** put `featured: true` on the one you want shown large. Remove it from the others. If none is flagged, the first visible project leads.

### Add an experience entry

Copy a block inside `experience`, newest first:

```ts
{
  organization: 'Company name',
  title: 'Job title',
  start: 'Jun 2024',
  end: '',                  // '' shows "Present"
  location: 'Bangalore',    // optional
  highlights: ['Something you built or changed, stated factually.'],
},
```

An entry appears once `organization`, `title` and `start` are filled in. Remove, hide (`hidden: true`) and reorder it exactly like a project.

### Skills, approach and about

- `skills`: add strings to each category's `items`. Rename or add categories freely. Categories with no items are hidden on the live site.
- `approach`: four draft steps (Frame, Build, Evaluate, Ship). Reword anything that doesn't match how you work.
- `about.paragraphs`: add or remove strings.

### Resume

Leave `person.resume` as `''` and every Resume button disappears. To enable it, either:

- put your file at `public/resume.pdf` and set `resume: 'resume.pdf'`, or
- set `resume` to a full `https://…` link.

### Themes

Set `site.theme` to one of: `sovereign-trust` (default), `heritage-estate`, `pure-quiet-luxury`, `imperial-reserve`, `monolith-executive`, `royal-sapphire`. Palettes are defined at the top of `src/styles.css` if you want to adjust one.

## Publishing on GitHub Pages

1. Push this project to a GitHub repository (default branch `main` or `master`).
2. In the repository, open **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push a commit to the default branch. The workflow in `.github/workflows/deploy.yml` builds the site and deploys it. You can also run it from the **Actions** tab (**Run workflow**).
4. Your site appears at `https://<username>.github.io/<repo>/`, or at `https://<username>.github.io/` if the repository is named `<username>.github.io`.

Commit `package-lock.json` (created by `npm install`) so deploys use exactly the versions you tested.

### Root site or repository subpath

`vite.config.ts` sets `base: './'`, so all asset URLs are relative. The same build works at the root of a `username.github.io` site **and** under a repository subpath with no change. If you ever need absolute paths, build with `VITE_BASE=/repo-name/ npm run build`.

The site is a single page with `#hash` navigation, so there are no routes to break on refresh.

### Social preview

After the first deploy, set `site.siteUrl` to your full site URL (for example `https://mr-faisal-0.github.io/portfolio/`). To add a preview image, place a 1200 × 630 image in `public/` and set `site.socialImage` to its filename. Without `siteUrl`, the page still has a title and description, but link-preview tools will not get an image or canonical URL.

## Placeholders still to fill in

All are in `src/data/portfolio.ts`:

- `projects`: title, description, role, technologies and `repoUrl` for the featured project and the others (impact only if you have real numbers)
- `experience`: organization, title, dates, highlights
- `skills`: items for each category
- `person.resume`: file or URL
- `site.siteUrl` and `site.socialImage`: after deploying
- Review the draft copy in `approach`, `about` and `hero.intro`, and edit it so every sentence is something you stand behind

## Project layout

```
src/data/portfolio.ts   all editable content
src/data/types.ts       the shape of that content
src/lib/content.ts      decides what is shown or hidden
src/components/         one component per section
src/styles.css          tokens, themes and layout
vite.config.ts          build config, injects page metadata
.github/workflows/      GitHub Pages deployment
```

## Accessibility notes

Semantic landmarks and headings, a skip link, a keyboard-operable mobile menu (Escape closes it), visible focus rings, links that say where they go and that they open a new tab, and no animation when the visitor has asked for reduced motion.
