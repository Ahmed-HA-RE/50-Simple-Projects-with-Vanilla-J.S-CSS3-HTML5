const DICE_SIDES = 6;
const ROLL_DURATION = 500;
const ROLL_INTERVAL = 100;
const MESSAGES = [
  '🎉 Lucky roll!',
  '🔥 Nice one!',
  '⭐️ Great roll!',
  '🎯 Awesome!',
  '💫 Perfect!',
  '🚀 Amazing!',
];

let isRolling = false;

document.addEventListener('DOMContentLoaded', () => {
  const dice = document.getElementById('dice');
  const rollBtn = document.getElementById('roll-btn');
  const result = document.getElementById('result');

  const rollDice = () => {
    if (isRolling) return;

    isRolling = true;

    rollBtn.disabled = true;

    dice.classList.add('rolling');
    result.innerText = '';

    const rollId = setInterval(() => {
      dice.innerText = Math.floor(Math.random() * DICE_SIDES) + 1;
    }, ROLL_INTERVAL);

    setTimeout(() => {
      clearInterval(rollId);
      const finalNumber = Math.floor(Math.random() * DICE_SIDES) + 1;
      rollBtn.disabled = false;
      dice.classList.remove('rolling');
      result.innerText = MESSAGES[finalNumber - 1];
      isRolling = false;
    }, ROLL_DURATION);
  };

  rollBtn.addEventListener('click', rollDice);
  dice.addEventListener('click', rollDice);
});
