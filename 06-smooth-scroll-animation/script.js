// Select all elements with the class 'box'
const boxes = document.querySelectorAll(".box");

// Run checkBoxes() whenever the user scrolls
window.addEventListener("scroll", checkBoxes);

// Run the function once on page load so boxes already in view are shown
checkBoxes();

function checkBoxes() {
  // Calculate the "trigger point" — 4/5th of the viewport height
  // (when the top of the box is above this line, it becomes visible)
  const triggerBottom = (window.innerHeight / 5) * 4;

  // Loop through each box
  boxes.forEach((box) => {
    // Get the distance from the top of the viewport to the box's top edge
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop); // For debugging: shows the box's position in the console

    // If the box is above the trigger line, add the 'show' class
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } 
    // Otherwise, remove the 'show' class (so it can animate again if scrolled back)
    else {
      box.classList.remove("show");
    }
  });
}

