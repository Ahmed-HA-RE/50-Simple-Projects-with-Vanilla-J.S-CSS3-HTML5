// const loadText = document.querySelector('.loading-text');
// const backgroundImage = document.querySelector('.bg');

// let load = 0;
// let int = setInterval(blurring, 30);

// function blurring() {
//   load++;

//   if (load > 99) {
//     clearInterval(int);
//   }
//   loadText.innerHTML = `${load}%`;
//   loadText.style.opacity = scale(load, 0, 100, 1, 0);
//   backgroundImage.style.filter = `blur(${scale(load, 0, 100, 0, 30)}px)`;
// }

// function scale(number, inMin, inMax, outMin, outMax) {
//   return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
// }

// My own task
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');

let countProgress = 0;

let int = setInterval(progressExtend, 30);

function progressExtend() {
  countProgress++;
  if (countProgress > 99) {
    clearInterval(int);
  }

  progressBar.style.width = scale(countProgress, 0, 100, 0, 100) + '%';
  progressText.innerHTML = `${countProgress}%`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
