const sounds = document.querySelectorAll(".sounds");
const buttons = document.getElementById("buttons");

let currentSongId = null;

// Create buttons dynamically
const soundBtnArray = [];
sounds.forEach((sound) => {
  soundBtnArray.push(
    `<button class="btn" onclick="playNewSong('${sound.id}')">${sound.id}</button>`
  );
});
buttons.innerHTML = soundBtnArray.join(" ");

// Play new sound
function playNewSong(soundId) {
  stopOldSong();
  const sound = document.getElementById(soundId);
  sound.currentTime = 0; // rewind to start
  sound.play();
  currentSongId = soundId;
}

// Stop old sound
function stopOldSong() {
  if (currentSongId) {
    const currentSong = document.getElementById(currentSongId);
    currentSong.pause();
    currentSong.currentTime = 0;
  }
}
