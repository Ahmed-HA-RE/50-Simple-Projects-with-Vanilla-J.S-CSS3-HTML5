const smallCups = document.querySelectorAll('.cup-small');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remianed');
const liters = document.querySelector('.liters');

smallCups.forEach((cup, indx) => {
  cup.addEventListener('click', () => {
    highlightCups(indx);
  });
});

const highlightCups = (indx) => {
  if (
    smallCups[indx].classList.contains('fill') &&
    !smallCups[indx].nextElementSibling.classList.contains('fill')
  ) {
    indx--;
  }

  smallCups.forEach((cup, indx2) => {
    if (indx2 <= indx) {
      cup.classList.add('fill');
    } else {
      cup.classList.remove('fill');
    }
  });

  updateBigCup();
};

function updateBigCup() {
  const fullCups = document.querySelectorAll('.fill').length;
  const totalCups = smallCups.length;
  const fullines = fullCups / totalCups;

  if (!fullCups) {
    percentage.innerText = '';
    percentage.style.height = 0;
    liters.style.visibility = 'visible';
  } else {
    percentage.style.height = `${fullines * 100}%`;
    percentage.innerText = `${fullines * 100}%`;
    liters.style.visibility = 'hidden';
  }
}

document.addEventListener('DOMContentLoaded', updateBigCup);
