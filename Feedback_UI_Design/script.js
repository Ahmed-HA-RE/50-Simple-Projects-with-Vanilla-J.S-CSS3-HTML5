const panel = document.querySelector('#panel-container');
const ratings = document.querySelectorAll('.rating');
const ratingContainer = document.querySelector('.rating-container');
const submitBtn = document.querySelector('#btn-submit');
let ratingText = 'Satisfied';

function submitRating(e) {
  if (e.target.parentElement.classList.contains('rating')) {
    removeActive();
    e.target.parentElement.classList.add('active');
    ratingText = e.target.nextElementSibling.innerHTML;
  }
}

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove('active'));
}

function createPanel() {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${ratingText}</strong>
        <br>
        <p>We'll use your feedback to improve our customer support</p>
    `;
}

function init() {
  ratingContainer.addEventListener('click', submitRating);
  submitBtn.addEventListener('click', createPanel);
}

document.addEventListener('DOMContentLoaded', init);
