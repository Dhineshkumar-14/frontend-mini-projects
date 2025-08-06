// Select the left panel element
const left = document.querySelector(".left");

// Select the right panel element
const right = document.querySelector(".right");

// Select the container that wraps both left and right panels
const container = document.querySelector(".container");

// When the mouse enters the LEFT panel
left.addEventListener("mouseenter", () => {
  // Add a class to the container for hover-left styling
  container.classList.add("hover-left");
});

// When the mouse leaves the LEFT panel
left.addEventListener("mouseleave", () => {
  // Remove the hover-left class so the style goes back to normal
  container.classList.remove("hover-left");
});

// When the mouse enters the RIGHT panel
right.addEventListener("mouseenter", () => {
  // Add a class to the container for hover-right styling
  container.classList.add("hover-right");
});

// When the mouse leaves the RIGHT panel
right.addEventListener("mouseleave", () => {
  // Remove the hover-right class so the style goes back to normal
  container.classList.remove("hover-right");
});
