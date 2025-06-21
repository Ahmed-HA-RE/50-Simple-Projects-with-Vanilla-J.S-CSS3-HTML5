const labels = document.querySelectorAll('.form-control label');
const form = document.querySelector('.form');
const toasts = document.getElementById('toasts');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

function labelWave() {
  labels.forEach((label) => {
    label.innerHTML = label.innerHTML
      .split('')
      .map((letter, indx) => {
        return `<span style="transition-delay:${
          indx * 100
        }ms">${letter}</span>`;
      })
      .join('');
  });
}

function toastNotification(message, classes) {
  const toast = document.createElement('div');
  toast.classList.add('toast', classes);
  toast.innerHTML = message;
  setTimeout(() => {
    toast.remove();
  }, 2500);
  toasts.appendChild(toast);
  return toast;
}

function messagesValidation() {
  if (inputEmail.value === '' || inputPassword.value === '') {
    toastNotification('The Fields are Empty', 'error');
    inputEmail.value = '';
    inputPassword.value = '';
  } else {
    toastNotification('Submited', 'success');
    inputEmail.value = '';
    inputPassword.value = '';
  }
}

function init() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    messagesValidation();
  });
  labelWave();
}

document.addEventListener('DOMContentLoaded', init);
