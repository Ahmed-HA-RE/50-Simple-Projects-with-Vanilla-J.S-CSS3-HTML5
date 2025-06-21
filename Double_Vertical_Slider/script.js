const slidersContainer = document.querySelector('.slider-container');
const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const upBtn = document.querySelector('#toggle-up');
const downBtn = document.querySelector('#toggle-down');
const slidersLength = rightSlider.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlider.style.top = `-${(slidersLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  a;

  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidersLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidersLength - 1;
    }
  }

  leftSlider.style.transform = `translateY(${
    activeSlideIndex * slidersHeight
  }px)`;

  rightSlider.style.transform = `translateY(-${
    activeSlideIndex * slidersHeight
  }px)`;
};

function init() {
  upBtn.addEventListener('click', () => changeSlide('up'));
  downBtn.addEventListener('click', () => changeSlide('down'));
}

document.addEventListener('DOMContentLoaded', init);
