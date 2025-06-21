const searchContainer = document.querySelector('.search');
const searchInput = document.querySelector('#search-field');
const searchBtn = document.querySelector('.search-btn');

function init() {
  searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    searchInput.focus();
  });
}

document.addEventListener('DOMContentLoaded', init);
