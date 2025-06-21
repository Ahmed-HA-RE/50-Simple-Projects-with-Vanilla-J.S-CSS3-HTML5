const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

const removeOneOfChecked = (e) => {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === e.target) {
      fast.checked = false;
    } else if (cheap === e.target) {
      good.checked = false;
    } else if (fast === e.target) {
      cheap.checked = false;
    }
  }
};

function init() {
  toggles.forEach((toggle) =>
    toggle.addEventListener('change', (e) => {
      removeOneOfChecked(e);
    })
  );
}

document.addEventListener('DOMContentLoaded', init);
