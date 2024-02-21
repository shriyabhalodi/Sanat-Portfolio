
  document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.home', { origin: 'bottom', distance: '50px', duration: 1000, delay: 100, scale: 1 });
    ScrollReveal().reveal('.about-me', { origin: 'left', distance: '200px', duration: 2000, delay: 200, scale: 1 });

    // Apply a staggered reveal for each item in the Experience, Certifications, and Tools & Technology sections
    const staggerOptions = {
      duration: 1000,
      scale: 0.85,
      interval: 100 // Interval between items
    };

    // Experience items
    document.querySelectorAll('.Experience-content').forEach((elem, index) => {
      ScrollReveal().reveal(elem, { ...staggerOptions, delay: 100 + staggerOptions.interval * index });
    });

    // Certifications items
    document.querySelectorAll('.row').forEach((elem, index) => {
      ScrollReveal().reveal(elem, { ...staggerOptions, delay: 400 + staggerOptions.interval * index });
    });

    // Tools & Technology items
    document.querySelectorAll('.tool-item').forEach((elem, index) => {
      ScrollReveal().reveal(elem, { ...staggerOptions, delay: 500 + staggerOptions.interval * index });
    });

    ScrollReveal().reveal('.contact', { origin: 'bottom', distance: '60px', duration: 1000, delay: 600, scale: 1 });
  });
