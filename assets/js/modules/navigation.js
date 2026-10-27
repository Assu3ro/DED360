const initNavigation = () => {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (!navToggle || !siteNav) return;

  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const initReveal = () => {
  const elements = document.querySelectorAll('.reveal');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((element) => observer.observe(element));
};

const initYear = () => {
  const yearNode = document.querySelector('[data-year]');

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
};

export { initNavigation, initReveal, initYear };
