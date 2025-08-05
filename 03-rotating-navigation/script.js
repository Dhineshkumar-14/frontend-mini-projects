// Get references to the open button, close button, and container element
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

// When the "open" button is clicked, add the "show-nav" class to the container
open.addEventListener("click", () => {
  container.classList.add("show-nav"); // Show navigation menu
});

// When the "close" button is clicked, remove the "show-nav" class from the container
close.addEventListener("click", () => {
  container.classList.remove("show-nav"); // Hide navigation menu
});
