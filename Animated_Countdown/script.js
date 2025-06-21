const startCounter = document.querySelector('.starter-counter');
const finalCounter = document.querySelector('.final-counter');
const replay = document.getElementById('replay');
const nums = document.querySelectorAll('.nums span');

const createAnimation = () => {
  const firstToLast = nums.length - 1;
  nums.forEach((num, idx) => {
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== firstToLast) {
        num.classList.add('out');
        num.classList.remove('in');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        startCounter.classList.add('hide');
        finalCounter.classList.add('show');
      }
    });
  });
};

const resetDom = () => {
  nums.forEach((num) => {
    num.classList.remove('out');
    num.classList.remove('in');
  });

  startCounter.classList.remove('hide');
  finalCounter.classList.remove('show');
  nums[0].classList.add('in');
};

const init = () => {
  createAnimation();
  replay.addEventListener('click', resetDom);
};

document.addEventListener('DOMContentLoaded', init);
