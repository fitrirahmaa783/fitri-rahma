// Fade-in saat scroll
function fadeInSections() {
  const sections = document.querySelectorAll('.fade-section');
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', fadeInSections);
window.addEventListener('load', fadeInSections);

// Counter Animation untuk Keahlian
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const updateCounter = () => {
      const target = +el.getAttribute('data-target');
      let count = +el.innerText;
      const speed = 41; // ms
      if (count < target) {
        el.innerText = Math.ceil(count + (target-count)/7);
        setTimeout(updateCounter, speed);
      } else {
        el.innerText = target;
      }
    };
    updateCounter();
  });
}
window.addEventListener('load', animateCounters);

// Smooth scroll untuk nav
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});