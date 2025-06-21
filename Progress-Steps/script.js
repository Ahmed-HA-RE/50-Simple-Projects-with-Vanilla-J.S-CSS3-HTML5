const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prevBtn.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

const update = () => {
  circles.forEach((circle, indx) => {
    if (currentActive > indx) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const active = document.querySelectorAll('.active');

  const progressFormula = ((active.length - 1) / (circles.length - 1)) * 100;

  progress.style.width = `${progressFormula}%`;

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    prevBtn.disabled = false;
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};
