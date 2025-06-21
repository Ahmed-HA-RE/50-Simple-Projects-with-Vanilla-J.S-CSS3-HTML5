const password = document.getElementById('password');
const background = document.getElementById('background');

function passwordStrength(e) {
  const valueLength = e.target.value.length;
  const blurValue = valueLength * 2;

  background.style.filter = `blur(${20 - blurValue}px)`;
  background.style.top = '0';
  background.style.bottom = '0';
  background.style.left = '0';
  background.style.right = '0';
}

function init() {
  password.addEventListener('input', passwordStrength);
}

document.addEventListener('DOMContentLoaded', init);
