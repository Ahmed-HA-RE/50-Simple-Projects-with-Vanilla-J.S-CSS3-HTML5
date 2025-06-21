const navbar = document.getElementById('nav');

const navbarScroll = () => {
  const scrollY = window.scrollY;

  if (scrollY > 180) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
};

function init() {
  window.addEventListener('scroll', navbarScroll);
}

document.addEventListener('DOMContentLoaded', init);
