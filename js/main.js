import { initThemeToggle } from './theme-toggle.js';
import { initNavMobile } from './nav-mobile.js';
import { initSmoothScroll } from './smooth-scroll.js';
import { initScrollReveal } from './scroll-reveal.js';
import { initProjectGalleries } from './project-gallery.js';

function initFooterYear() {
  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initBackToTop() {
  const button = document.querySelector('[data-back-to-top]');
  if (!button) return;

  window.addEventListener('scroll', () => {
    button.classList.toggle('is-visible', window.scrollY > 600);
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavMobile();
  initSmoothScroll();
  initScrollReveal();
  initProjectGalleries();
  initFooterYear();
  initBackToTop();
});
