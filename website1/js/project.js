const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseenter", () => {
    panels.forEach((p) => (p.style.flex = "1"));
    panel.style.flex = "3";
  });

  panel.addEventListener("mouseleave", () => {
    panels.forEach((p) => (p.style.flex = "1"));
  });
});
