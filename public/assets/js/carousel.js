// Testimonials Carousel
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.testimonials-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.testimonials-track');
  const cards = track.querySelectorAll('.testimonial-card');
  const prevBtn = carousel.querySelector('.carousel-btn-prev');
  const nextBtn = carousel.querySelector('.carousel-btn-next');
  const dotsContainer = document.querySelector('.carousel-dots');

  const totalCards = cards.length;
  let currentPosition = 0;

  function getVisibleCards() {
    // Check screen width and return number of visible cards
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 1024) {
      return 2;
    }
    return 3;
  }

  function getMaxPosition() {
    return Math.max(0, totalCards - getVisibleCards());
  }

  function updateDots() {
    // Clear existing dots
    dotsContainer.innerHTML = '';

    const maxPosition = getMaxPosition();
    const totalDots = maxPosition + 1;

    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (i === currentPosition) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to position ${i + 1}`);
      dot.addEventListener('click', () => goToPosition(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateCarousel() {
    const maxPosition = getMaxPosition();

    // Ensure current position is valid
    if (currentPosition > maxPosition) {
      currentPosition = maxPosition;
    }

    // Calculate offset based on card width + gap
    const card = cards[0];
    const cardWidth = card.offsetWidth;
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    const offset = currentPosition * (cardWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    // Update dots
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentPosition);
    });

    // Update button states
    prevBtn.disabled = currentPosition === 0;
    nextBtn.disabled = currentPosition >= maxPosition;
  }

  function goToPosition(index) {
    const maxPosition = getMaxPosition();
    currentPosition = Math.max(0, Math.min(index, maxPosition));
    updateCarousel();
  }

  prevBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
      currentPosition--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    const maxPosition = getMaxPosition();
    if (currentPosition < maxPosition) {
      currentPosition++;
      updateCarousel();
    }
  });

  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateDots();
      updateCarousel();
    }, 100);
  });

  // Initialize
  updateDots();
  updateCarousel();
});
