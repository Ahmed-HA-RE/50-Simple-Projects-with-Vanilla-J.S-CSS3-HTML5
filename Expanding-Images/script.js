const panels = document.querySelectorAll('.js-panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    if (!panel.classList.contains('active')) {
      removePreviousActive();
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
});

function removePreviousActive() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
