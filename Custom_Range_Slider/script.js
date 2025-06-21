const range = document.getElementById('range');

const moveSliderValue = (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;
  label.innerHTML = value;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  const num_range_width = +range_width.slice(0, range_width.length - 2);
  const num_label_width = +label_width.slice(0, label_width.length - 2);

  const max = +e.target.getAttribute('max');
  const min = +e.target.getAttribute('min');

  const left =
    value * (num_range_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const init = () => {
  range.addEventListener('input', moveSliderValue);
};

document.addEventListener('DOMContentLoaded', init);
