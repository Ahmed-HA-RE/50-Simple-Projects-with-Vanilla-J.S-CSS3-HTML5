const containerBg = document.getElementById('container-background');
const sliders = document.querySelectorAll('.slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let countBgIndex = 0;

function setBgToContainer() {
  const slider = sliders[countBgIndex].style.backgroundImage;

  containerBg.style.backgroundImage = slider;
}

function setBgToSliderContainer() {
  sliders.forEach((slider) => slider.classList.remove('active'));

  sliders[countBgIndex].classList.add('active');
}

function nextSliderNav() {
  countBgIndex++;

  if (countBgIndex > sliders.length - 1) {
    countBgIndex = 0;
  }
  setBgToContainer();
  setBgToSliderContainer();
}
function prevSliderNav() {
  countBgIndex--;

  if (countBgIndex < 0) {
    countBgIndex = sliders.length - 1;
  }
  setBgToContainer();
  setBgToSliderContainer();
}

function init() {
  setBgToContainer();
  setBgToSliderContainer();
  nextBtn.addEventListener('click', nextSliderNav);
  prevBtn.addEventListener('click', prevSliderNav);
}

document.addEventListener('DOMContentLoaded', init);
