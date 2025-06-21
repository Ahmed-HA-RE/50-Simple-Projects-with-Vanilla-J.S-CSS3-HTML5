const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

function addClass() {
  navs.forEach((nav) => nav.classList.add('visible'));
}

function removeClass() {
  navs.forEach((nav) => nav.classList.remove('visible'));
}

function init() {
  open_btn.addEventListener('click', addClass);
  close_btn.addEventListener('click', removeClass);
}

document.addEventListener('DOMContentLoaded', init);
