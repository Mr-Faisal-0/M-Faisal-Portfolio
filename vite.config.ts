import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { portfolio } from './src/data/portfolio';

const esc = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Fills the <title>, description and social-preview tags in index.html from
 * src/data/portfolio.ts so the page metadata has a single source of truth.
 */
function portfolioMeta(): Plugin {
  const { site } = portfolio;

  const absolute = (path: string) => {
    if (!site.siteUrl) return '';
    try {
      return new URL(path, site.siteUrl.endsWith('/') ? site.siteUrl : `${site.siteUrl}/`).href;
    } catch {
      return '';
    }
  };

  const image = site.socialImage ? absolute(site.socialImage) : '';
  const pageUrl = absolute('./');

  const social = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(site.title)}" />`,
    `<meta property="og:description" content="${esc(site.description)}" />`,
    pageUrl ? `<meta property="og:url" content="${esc(pageUrl)}" />` : '',
    image ? `<meta property="og:image" content="${esc(image)}" />` : '',
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${esc(site.title)}" />`,
    `<meta name="twitter:description" content="${esc(site.description)}" />`,
    image ? `<meta name="twitter:image" content="${esc(image)}" />` : '',
  ]
    .filter(Boolean)
    .join('\n    ');

  return {
    name: 'portfolio-meta',
    enforce: 'pre',
    transformIndexHtml(html) {
      return html
        .replaceAll('%SITE_LANG%', esc(site.language))
        .replaceAll('%SITE_TITLE%', esc(site.title))
        .replaceAll('%SITE_DESCRIPTION%', esc(site.description))
        .replace('<!--SOCIAL_META-->', social);
    },
  };
}

// base './' makes every asset URL relative, so the same build works at the
// root of username.github.io AND under a repository subpath
// (username.github.io/repo-name/). Override with VITE_BASE=/repo-name/ if you
// ever need absolute paths.
export default defineConfig({
  base: process.env.VITE_BASE ?? './',
  plugins: [react(), portfolioMeta()],
});
