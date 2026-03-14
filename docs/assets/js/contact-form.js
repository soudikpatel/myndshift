/* ========================================
   CONTACT-FORM.JS - Form Submission Handler
   ======================================== */

/**
 * Initialize contact form
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://formspree.io and create a free account
 * 2. Create a new form and copy your form ID
 * 3. Replace 'YOUR_FORM_ID' below with your actual form ID
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Gather form data
    const formData = new FormData(contactForm);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        showMessage('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.', contactForm.parentElement);
        contactForm.reset();
      } else {
        // Server error
        const data = await response.json();
        if (data.errors) {
          const errorMessage = data.errors.map(err => err.message).join(', ');
          showMessage('error', `Error: ${errorMessage}`, contactForm.parentElement);
        } else {
          showMessage('error', 'Oops! There was a problem sending your message. Please try again.', contactForm.parentElement);
        }
      }
    } catch (error) {
      // Network error
      console.error('Form submission error:', error);
      showMessage('error', 'Connection error. Please check your internet and try again.', contactForm.parentElement);
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });

  // Real-time validation
  const inputs = contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });

    input.addEventListener('input', () => {
      // Clear error state on input
      input.classList.remove('error');
    });
  });
}

/**
 * Validate a single form field
 */
function validateField(field) {
  const value = field.value.trim();

  if (field.hasAttribute('required') && !value) {
    field.classList.add('error');
    return false;
  }

  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      field.classList.add('error');
      return false;
    }
  }

  field.classList.remove('error');
  return true;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initContactForm);
