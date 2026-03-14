/* ========================================
   COMPONENTS.JS - Load Header, Footer, Breadcrumbs
   ======================================== */

/**
 * Load an HTML component into a placeholder element
 */
async function loadComponent(elementId, componentPath) {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const response = await fetch(componentPath);
    if (!response.ok) {
      throw new Error(`Failed to load ${componentPath}`);
    }
    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error(`Error loading component: ${componentPath}`, error);
    // Fallback content
    if (elementId === 'header-placeholder') {
      element.innerHTML = `
        <header class="site-header">
          <div class="container">
            <div class="header-content">
              <div class="logo"><a href="/">Myndshift</a></div>
              <nav class="nav-menu">
                <ul class="nav-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/courses/">Courses</a></li>
                  <li><a href="/blog/">Blog</a></li>
                  <li><a href="/events/">Events</a></li>
                  <li><a href="/about.html">About</a></li>
                  <li><a href="/contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      `;
    }
  }
}

/**
 * Initialize all components on page load
 */
async function initComponents() {
  // Load header and footer
  await Promise.all([
    loadComponent('header-placeholder', '/components/header.html'),
    loadComponent('footer-placeholder', '/components/footer.html')
  ]);

  // Initialize breadcrumbs (from utils.js)
  if (typeof initBreadcrumbs === 'function') {
    initBreadcrumbs();
  }

  // Initialize mobile menu (from navigation.js)
  if (typeof initMobileMenu === 'function') {
    initMobileMenu();
  }

  // Set active navigation link (from utils.js)
  if (typeof setActiveNavLink === 'function') {
    setActiveNavLink();
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initComponents);
