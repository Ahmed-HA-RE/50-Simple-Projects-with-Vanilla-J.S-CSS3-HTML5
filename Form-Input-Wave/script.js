const labels = document.querySelectorAll('.form-control label');
const form = document.querySelector('form');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, indx) =>
        `<span style = "transition-delay:${indx * 100}ms">${letter}</span>`
    )
    .join('');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
