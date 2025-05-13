const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const modeImage = document.getElementById('modeImage');
const playPauseBtn = document.getElementById('playPauseBtn');
const audioPlayer = document.getElementById('audioPlayer');
const pageTitle = document.getElementById('pageTitle');

let isPlaying = false;

// Reproducir en bucle infinito
audioPlayer.loop = true;

// Cambiar modo
modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    // Modo noche
    body.classList.remove('day-mode');
    body.classList.add('night-mode');
    modeImage.src = 'assets/lobo3.png';
    audioPlayer.src = 'assets/night.mp3';
    pageTitle.textContent = 'Noche 🌙';
  } else {
    // Modo día
    body.classList.remove('night-mode');
    body.classList.add('day-mode');
    modeImage.src = 'assets/aldeano2.jpg';
    audioPlayer.src = 'assets/day.mp3';
    pageTitle.textContent = 'Día 🌞';
  }

  if (isPlaying) {
    audioPlayer.play();
  }
});

// Botón de play/pausa
playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reinicia al pausar
    playPauseBtn.textContent = '▶️';
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
});
