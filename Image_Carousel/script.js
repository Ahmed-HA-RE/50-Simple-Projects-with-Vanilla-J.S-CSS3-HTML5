const imgContainer = document.querySelector('.image-container');
const imgs = document.querySelectorAll('.image-container img');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let idx = 0;

let intervalId = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }
  imgContainer.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(run, 2000);
}

function init() {
  prevBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
  });

  nextBtn.addEventListener('click', () => {
    changeImage();
    resetInterval();
  });
}

document.addEventListener('DOMContentLoaded', init);
