const speedInput = document.getElementById('speed-input');
const textEl = document.getElementById('text');
const text = 'Welcome To Apple.com';
let idx = 1;

const heroTextAnimation = () => {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(() => {
    heroTextAnimation();
  }, 400);
};

function init() {
  heroTextAnimation();
}

document.addEventListener('DOMContentLoaded', init);
