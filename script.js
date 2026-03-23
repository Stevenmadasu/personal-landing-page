// ===== TYPEWRITER EFFECT =====
document.addEventListener('DOMContentLoaded', () => {
  const taglines = [
    'Product Builder.',
    'AI Enthusiast.',
    'Business Analyst.',
    'Data-Driven Thinker.'
  ];

  const taglineEl = document.getElementById('heroTagline');
  const cursor = taglineEl.querySelector('.cursor');
  let taglineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let textNode = document.createTextNode('');
  taglineEl.insertBefore(textNode, cursor);

  function typeWriter() {
    const current = taglines[taglineIndex];

    if (!isDeleting) {
      textNode.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000); // pause at end
        return;
      }
      setTimeout(typeWriter, 80);
    } else {
      textNode.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        taglineIndex = (taglineIndex + 1) % taglines.length;
        setTimeout(typeWriter, 400); // pause before next word
        return;
      }
      setTimeout(typeWriter, 40);
    }
  }

  // Start after a short delay
  setTimeout(typeWriter, 800);


  // ===== SCROLL ANIMATIONS (Intersection Observer) =====
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => observer.observe(el));


  // ===== NAVBAR SCROLL BEHAVIOR =====
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });


  // ===== ACTIVE NAV LINK HIGHLIGHTING =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });


  // ===== MOBILE HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  function toggleMenu() {
    const isOpen = navLinksEl.classList.contains('open');
    navLinksEl.classList.toggle('open');
    navOverlay.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  hamburger.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', toggleMenu);

  // Close menu when clicking a nav link
  navLinksEl.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinksEl.classList.contains('open')) {
        toggleMenu();
      }
    });
  });


  // ===== SMOOTH SCROLL (for older browsers) =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
