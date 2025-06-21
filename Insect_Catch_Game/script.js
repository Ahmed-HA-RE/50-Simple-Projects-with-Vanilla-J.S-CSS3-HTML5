const screens = document.querySelectorAll('.screen');
const choose_insect_btn = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.querySelector('#start-btn');
const gameContainer = document.querySelector('.game-container');
const timeEl = document.querySelector('#time');
const scoreEl = document.querySelector('#score');
const messageEl = document.querySelector('#message');
let seconds = 0;
let score = 0;
let selectedInsect = {};

start_btn.addEventListener('click', () => {
  screens[0].classList.add('up');
});

choose_insect_btn.forEach((btn) =>
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selectedInsect = { src, alt };
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  })
);

function startGame() {
  setInterval(() => {
    increaseTime();
  }, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time : ${m}:${s}`;
  seconds++;
}

function createInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${selectedInsect.src}" alt="${
    selectedInsect.alt
  }"
  style="transform:rotate(${Math.random() * 360}deg)"/>`;

  insect.addEventListener('click', catchInsect);

  gameContainer.appendChild(insect);
}

function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => {
    this.remove();
  }, 2000);

  setTimeout(() => {
    createInsect();
  }, 1000);

  setTimeout(() => {
    createInsect();
  }, 2000);
}

function increaseScore() {
  score++;

  score > 19 ? messageEl.classList.add('visible') : '';

  scoreEl.innerHTML = `Score: ${score}`;
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}
