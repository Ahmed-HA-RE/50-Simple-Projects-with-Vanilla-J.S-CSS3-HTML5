const headerEl = document.getElementById('header');
const titleEl = document.getElementById('title');
const descriptionEl = document.getElementById('card-description');
const profileImg = document.getElementById('profile-img');
const authorName = document.getElementById('author-name');
const postDate = document.getElementById('post-date');
const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

function getData() {
  headerEl.innerHTML = `<img src="loading-image.jpg" alt="Chilling"/>`;
  titleEl.innerHTML = `Lorem ipsum dolor sit amet.`;
  descriptionEl.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      ipsam?`;
  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile" />`;
  authorName.innerHTML = `John Doe`;
  postDate.innerHTML = `Jun 14, 2025`;

  animatedBgs.forEach((animatedBg) =>
    animatedBg.classList.remove('animated-bg')
  );
  animatedBgTexts.forEach((animatedBgText) =>
    animatedBgText.classList.remove('animated-bg-text')
  );
}

function init() {
  setTimeout(() => {
    getData();
  }, 2500);
}

document.addEventListener('DOMContentLoaded', init);
