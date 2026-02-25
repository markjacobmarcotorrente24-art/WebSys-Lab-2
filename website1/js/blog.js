// Get filter buttons and blog entries
const btns = document.querySelectorAll(".filter-btn");
const entries = document.querySelectorAll(".entry");

// Add click event listeners to filter buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    btns.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    // Get filter value from button
    const filter = btn.dataset.filter;
    // Show/hide entries based on filter
    entries.forEach((entry) => {
      if (filter === "all" || entry.dataset.author === filter) {
        entry.style.display = "flex";
      } else {
        entry.style.display = "none";
      }
    });
  });
});
