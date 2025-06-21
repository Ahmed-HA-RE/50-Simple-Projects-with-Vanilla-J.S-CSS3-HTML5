const boxesContainer = document.getElementById('boxes');
const magicBtn = document.getElementById('btn-magic');

const create3DBoxes = () => {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const div = document.createElement('div');
      div.classList.add('box');
      console.log(div);
      div.style.backgroundPosition = `${-c * 125}px ${-r * 125}px `;
      boxesContainer.appendChild(div);
    }
  }
};

function init() {
  create3DBoxes();
  magicBtn.addEventListener('click', () =>
    boxesContainer.classList.toggle('big')
  );
}

document.addEventListener('DOMContentLoaded', init);
