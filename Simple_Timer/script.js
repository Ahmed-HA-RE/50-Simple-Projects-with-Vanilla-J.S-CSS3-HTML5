const resetBtn = document.getElementById('reset');
const playBtn = document.getElementById('play');
const timerEl = document.getElementById('timer');
const root = document.querySelector(':root');

const totalSec = 60;
let playing = false;
let currentSec = totalSec;
timerEl.innerText = formatTime(totalSec);

const timeInterval = setInterval(run, 1000);

playBtn.addEventListener('click', () => {
  playing = !playing;
  playBtn.classList.toggle('play');
  playBtn.classList.toggle('bg-green-500');
  const playIcon = playBtn.querySelector('i');
  playIcon.classList.toggle('fa-play');
  playIcon.classList.toggle('fa-pause');
});

resetBtn.addEventListener('click', resetAll);

function run() {
  if (playing) {
    currentSec--;
    if (currentSec <= 0) {
      clearInterval(timeInterval);
      resetAll();
    }
    timerEl.innerText = formatTime(currentSec);
    root.style.setProperty('--degrees', calcDeg());
  }
}

function calcDeg() {
  return `${360 - (currentSec / totalSec) * 360}deg`;
}

function resetAll() {
  playing = false;
  playBtn.classList.remove('play');
  playBtn.classList.remove('bg-green-500');
  const playIcon = playBtn.querySelector('i');
  playIcon.classList.add('fa-play');
  playIcon.classList.remove('fa-pause');
  currentSec = totalSec;
  timerEl.innerText = formatTime(currentSec);
  root.style.setProperty('--degrees', calcDeg());
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const newSec = seconds % 60;

  return `${min.toString().padStart(2, '0')}:${newSec
    .toString()
    .padStart(2, '0')}`;
}
