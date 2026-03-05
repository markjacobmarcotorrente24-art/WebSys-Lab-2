/**
 * javascript for index.html
 */

//add fade-in effect to the elements when they come into view
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

// adds the scroll indicator
function initScrollIndicator() {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (!scrollIndicator) return;

  function checkScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      scrollIndicator.classList.add("hide"); //if user scrolls <100px, hide indicator
    } else {
      scrollIndicator.classList.remove("hide"); //if user moves back to top, show indicator again
    }
  }

  window.addEventListener("scroll", checkScroll);
}

// parallax effect
function initParallax() {
  const homeHeader = document.querySelector(".home-header");
  if (!homeHeader) return;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    homeHeader.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });
}

// navigations cards loading after scrolling
document.addEventListener("DOMContentLoaded", () => {
  //checks if html is fully loaded
  observeElements(".nav-card");
  initScrollIndicator();
  initParallax();
});
