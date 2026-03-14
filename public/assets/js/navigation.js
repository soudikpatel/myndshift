/* ========================================
   NAVIGATION.JS - Mobile Menu Toggle
   ======================================== */

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!menuToggle || !navMenu) return;

  // Toggle menu on button click
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);

    // Animate hamburger icon
    menuToggle.classList.toggle('active', isOpen);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
    }
  });

  // Close menu when clicking a link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
    }
  });
}

// Handle window resize - close mobile menu on larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');

    if (navMenu && menuToggle) {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
    }
  }
});
