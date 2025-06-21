const countLikes = document.querySelector('.count-like');
const loveMe = document.getElementById('loving-post-img');

let countLike = 0;

function createLike(e) {
  const love = document.createElement('i');
  love.classList.add('fa-solid', 'fa-heart');

  const x = e.target.getBoundingClientRect().left;
  const y = e.target.getBoundingClientRect().top;

  const clientX = e.clientX;
  const clientY = e.clientY;

  const insideX = clientX - x;
  const insideY = clientY - y;

  love.style.top = `${insideY}px`;
  love.style.left = `${insideX}px`;

  loveMe.appendChild(love);
  countLikes.innerText = ++countLike;

  setTimeout(() => love.remove(), 1000);
}

function init() {
  loveMe.addEventListener('dblclick', createLike);
}

document.addEventListener('DOMContentLoaded', init);
