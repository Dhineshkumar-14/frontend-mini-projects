// Get DOM elements
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

// Event listener for "Next" button
next.addEventListener("click", () => {
  // Prevent going beyond the last step
  if (currentStep < circles.length) {
    currentStep++;
    updateProgressUI();
  }
});

// Event listener for "Previous" button
prev.addEventListener("click", () => {
  // Prevent going before the first step
  if (currentStep > 1) {
    currentStep--;
    updateProgressUI();
  }
});

// Function to update the UI based on currentStep
function updateProgressUI() {
  // Update active classes on circles
  circles.forEach((circle, index) => {
    circle.classList.toggle("active", index < currentStep);
  });

  // Update progress bar width
  const activeSteps = currentStep - 1;
  const totalSteps = circles.length - 1;
  progress.style.width = `${(activeSteps / totalSteps) * 100}%`;

  // Enable/disable buttons based on step
  prev.disabled = currentStep === 1;
  next.disabled = currentStep === circles.length;
}
