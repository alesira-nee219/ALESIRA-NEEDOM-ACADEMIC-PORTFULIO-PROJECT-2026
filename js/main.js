// Shared behaviour across every page: mobile nav, active link, footer year, reveal-on-scroll.

document.addEventListener('DOMContentLoaded', () => {

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is chosen (mobile)
    navList.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight the current page in the nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach((link) => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // Footer year, set dynamically so the citation never goes stale
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Scroll-reveal for elements marked with .reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
});
