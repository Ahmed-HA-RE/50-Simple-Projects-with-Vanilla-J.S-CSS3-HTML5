const boxes = document.querySelectorAll('.box');

function displayContent() {
  const viewportHeight = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    boxTop < viewportHeight
      ? box.classList.add('show')
      : box.classList.remove('show');
  });
}

displayContent();
window.addEventListener('scroll', displayContent);
