// ─── Fade-in on scroll ────────────────────────────────
const fadeTargets = document.querySelectorAll(
  '.timeline-item, .project-card, .award-item, .skill-group, .about-grid, .hero-stat'
);

fadeTargets.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

fadeTargets.forEach(el => observer.observe(el));

// ─── Active nav link on scroll ────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => navObserver.observe(s));
