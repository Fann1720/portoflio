// Scroll reveal
const reveals = document.querySelectorAll('.section-header, .about-grid, .skill-card, .project-card, .contact-wrap');
reveals.forEach(el => el.classList.add('reveal'));
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
 
reveals.forEach(el => observer.observe(el));
 
// Mobile nav toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}
 
// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
  });
});
 