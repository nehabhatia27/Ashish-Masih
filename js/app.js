// Entry point — registers every Web Component and initializes the
// page-level utilities. Each import is a fully decoupled unit; this file
// only wires them together.
import './components/media-placeholder.js';
import './components/site-nav.js';
import './components/site-footer.js';
import './components/marquee-strip.js';
import './components/gallery-grid.js';
import './components/pull-quote.js';
import './components/journey-chapter.js';
import './components/content-spread.js';
import './components/video-tile.js';

import { initReveal } from './reveal.js';

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
});

// Old links ending in .html (or /index.html) show the clean address instead.
try {
  const p = location.pathname;
  const clean = p.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (clean !== p) history.replaceState(null, '', clean + location.search + location.hash);
} catch (e) { /* address-bar tidy-up is cosmetic */ }
