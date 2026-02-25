// Global utilities for the website

/**
 * Smooth scroll to element
 */
function smoothScroll(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Add fade-in animation to elements
 */
function observeElements(selector) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Scroll indicator handling
function initScrollIndicator() {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (!scrollIndicator) return;

  function checkScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      scrollIndicator.classList.add("hide");
    } else {
      scrollIndicator.classList.remove("hide");
    }
  }

  window.addEventListener("scroll", checkScroll);
}

// Parallax effect on home header
function initParallax() {
  const homeHeader = document.querySelector(".home-header");
  if (!homeHeader) return;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    homeHeader.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });
}

// Card stagger animation
function initCardStagger() {
  const cards = document.querySelectorAll(".nav-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
  });

  // Trigger animation after load
  setTimeout(() => {
    cards.forEach((card) => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    });
  }, 100);
}

// Observe navigation cards on page load
document.addEventListener("DOMContentLoaded", () => {
  observeElements(".nav-card");
  initScrollIndicator();
  initParallax();
  initCardStagger();
});
