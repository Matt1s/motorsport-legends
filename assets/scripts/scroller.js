const progressLine = document.getElementById('progress-line');
const navItems = document.querySelectorAll('.scroll-nav__item');
const sections = Array.from(navItems).map(item =>
  document.getElementById(item.dataset.section)
);

function updateScrollProgress() {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  progressLine.style.height = `${Math.min(progress, 100)}%`;

  // Update active states
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((section, index) => {
    const item = navItems[index];
    const label = item.querySelector('.scroll-nav__label');
    const dot = item.querySelector('.scroll-nav__dot');

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        label.classList.add('scroll-nav__label--active');
        dot.classList.add('scroll-nav__dot--active');
      } else {
        label.classList.remove('scroll-nav__label--active');
        dot.classList.remove('scroll-nav__dot--active');
      }
    }
  });
}

// Smooth scroll to section
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const sectionId = item.dataset.section;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initialize and listen for scroll
window.addEventListener('scroll', updateScrollProgress);
updateScrollProgress();