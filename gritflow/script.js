// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
