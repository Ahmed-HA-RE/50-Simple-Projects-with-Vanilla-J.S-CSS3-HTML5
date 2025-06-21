const container = document.querySelector('.container');
const leftSlide = document.querySelector('.split-left');
const rightSlide = document.querySelector('.split-right');

leftSlide.addEventListener('mouseover', () => {
  container.classList.add('left-preferred');
});
leftSlide.addEventListener('mouseout', () => {
  container.classList.remove('left-preferred');
});
rightSlide.addEventListener('mouseover', () => {
  container.classList.add('right-preferred');
});
rightSlide.addEventListener('mouseout', () => {
  container.classList.remove('right-preferred');
});
