import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { portfolio } from './data/portfolio';
import './styles.css';

// Set before the first render so the palette never flashes.
document.documentElement.dataset.theme = portfolio.site.theme;
document.documentElement.lang = portfolio.site.language;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
