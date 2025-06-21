const buttons = document.querySelectorAll('.riple-btn');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const rect = button.getBoundingClientRect();

    const innerX = x - rect.left;
    const innerY = y - rect.top;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${innerY}px`;
    circle.style.left = `${innerX}px`;

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
