// Reveal animation on scroll
const sections = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(sec => observer.observe(sec));

// Lower background music volume
const music = document.getElementById('bg-music');
if (music) {
  music.volume = 0.15;
}
