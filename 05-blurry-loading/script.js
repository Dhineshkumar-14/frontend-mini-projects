const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".load-text");
let load = 1;
// Maps a number from one range to another
function scale(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};
const int = setInterval(blurring, 30);



