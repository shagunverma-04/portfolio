// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.style.transform = 'translate(-50%,-50%) scale(1.7)');
  el.addEventListener('mouseleave', () => ring.style.transform = 'translate(-50%,-50%) scale(1)');
});

// Reveal on scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Nav hide/show on scroll
let lastScroll = 0;
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  const curr = window.scrollY;
  nav.style.transform = (curr > lastScroll && curr > 80) ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = curr;
});