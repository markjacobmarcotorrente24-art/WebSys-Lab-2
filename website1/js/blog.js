// get filter buttons and blog entries
const btns = document.querySelectorAll(".filter-btn");
const entries = document.querySelectorAll(".entry");

// add click event listeners to filter buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // remove active class from all buttons
    btns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // find filter value from user
    const filter = btn.dataset.filter;
    // show entries based on selected filter
    entries.forEach((entry) => {
      if (filter === "all" || entry.dataset.author === filter) {
        entry.style.display = "flex";
      } else {
        entry.style.display = "none";
      }
    });
  });
});
