// Select all <label> elements inside elements with class "form-control"
const labels = document.querySelectorAll(".form-control label");

// Loop through each label
labels.forEach((label) => {
  // Take the label's text (label.innerText), split it into an array of letters,
  // then transform each letter into a <span> with an increasing transition delay.
  // This creates a "wave" animation effect when the label is animated with CSS.
  
  label.innerHTML = label.innerText
    .split("") // Split text into individual characters (array)
    .map((letter, idx) => {
      // Wrap each letter in a <span> and set a CSS transition-delay
      // Delay increases by 50ms for each subsequent letter
      return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
    })
    .join(""); // Join all the spans back into a single string and set as HTML
});
