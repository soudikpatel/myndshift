/* ========================================
   UTILS.JS - Helper Functions
   ======================================== */

/**
 * Initialize breadcrumbs based on current URL path
 */
function initBreadcrumbs() {
  const breadcrumbContainer = document.getElementById('breadcrumb');
  if (!breadcrumbContainer) return;

  const path = window.location.pathname;
  const segments = path.split('/').filter(segment => segment && segment !== 'index.html');

  // Don't show breadcrumbs on home page
  if (segments.length === 0) {
    breadcrumbContainer.style.display = 'none';
    return;
  }

  let breadcrumbHTML = '<div class="container">';
  breadcrumbHTML += '<nav class="breadcrumb" aria-label="Breadcrumb">';
  breadcrumbHTML += '<ol class="breadcrumb-list">';
  breadcrumbHTML += '<li><a href="/">Home</a></li>';

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += '/' + segment;

    // Clean up segment name for display
    let name = segment
      .replace('.html', '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());

    // Check if it's the last segment (current page)
    if (index === segments.length - 1) {
      breadcrumbHTML += `<li aria-current="page">${name}</li>`;
    } else {
      // For directory segments, link to index
      const href = currentPath.endsWith('.html') ? currentPath : currentPath + '/';
      breadcrumbHTML += `<li><a href="${href}">${name}</a></li>`;
    }
  });

  breadcrumbHTML += '</ol></nav></div>';
  breadcrumbContainer.innerHTML = breadcrumbHTML;
}

/**
 * Display a message (success/error) on the page
 */
function showMessage(type, message, container) {
  // Remove existing messages
  const existingMessages = document.querySelectorAll('.message');
  existingMessages.forEach(msg => msg.remove());

  // Create new message element
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message-${type}`;
  messageDiv.textContent = message;

  // Insert message
  if (container) {
    container.insertBefore(messageDiv, container.firstChild);
  }

  // Auto-remove after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-list a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // Handle home page separately
    if (href === '/' || href === '/index.html') {
      if (currentPath === '/' || currentPath === '/index.html') {
        link.classList.add('active');
      }
    } else {
      // For other pages, check exact match or if current path starts with href
      const normalizedHref = href.replace('.html', '').replace(/\/$/, '');
      const normalizedPath = currentPath.replace('.html', '').replace(/\/$/, '');

      if (normalizedPath === normalizedHref || normalizedPath.startsWith(normalizedHref + '/')) {
        link.classList.add('active');
      }
    }
  });
}

/**
 * Smooth scroll to element
 */
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Format date for display
 */
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
