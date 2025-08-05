// Select all elements with the class 'panel'
const panels = document.querySelectorAll('.panel');

/**
 * Removes the 'active' class from all panel elements.
 * Ensures only one panel can be active at a time.
 */
function removeActiveClasses() {
  panels.forEach(panel => panel.classList.remove('active'));
}

/**
 * Handles the click event on a panel.
 * Removes active class from all panels and activates the clicked one.
 */
function handlePanelClick(event) {
  removeActiveClasses();
  event.currentTarget.classList.add('active');
}

// Add click event listener to each panel
panels.forEach(panel => {
  panel.addEventListener('click', handlePanelClick);
});
