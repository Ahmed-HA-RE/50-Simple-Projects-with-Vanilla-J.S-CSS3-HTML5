const images = document.querySelectorAll('.phone .content');
const navLists = document.querySelectorAll('.nav-item');

function mobileNav() {
  navLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
      removeAllContent();
      removeAllItems();
      list.classList.add('active');
      images[idx].classList.add('shown');
    });
  });
}

function removeAllContent() {
  images.forEach((image) => image.classList.remove('shown'));
}

function removeAllItems() {
  navLists.forEach((list) => list.classList.remove('active'));
}

function init() {
  mobileNav();
}

document.addEventListener('DOMContentLoaded', init);
