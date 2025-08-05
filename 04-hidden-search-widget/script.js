// Select the search button, search container, and input field
const searchButton = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

// When the search button is clicked:
// 1. Add the "active" class to the search container (likely to expand or show it)
// 2. Automatically focus the input field so the user can start typing immediately
searchButton.addEventListener("click", () => {
  search.classList.add("active");
  input.focus();
});
