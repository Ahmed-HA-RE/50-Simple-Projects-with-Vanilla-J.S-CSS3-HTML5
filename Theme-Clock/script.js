const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const toggleBtnEl = document.querySelector('.toggle');
const timeEl = document.querySelector('#time');
const dateEl = document.querySelector('#date');
const body = document.body;
const root = window.getComputedStyle(document.documentElement);

function daysMonthsIndexs() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dataObj = {
    days,
    months,
  };

  return dataObj;
}

function toggleStyle() {
  if (!body.classList.contains('dark')) {
    toggleBtnEl.textContent = 'Light Mode';
    body.classList.add('dark');
    toggleBtnEl.style.backgroundColor =
      root.getPropertyValue('--secondary-color');
    toggleBtnEl.style.color = root.getPropertyValue('--primary-color');
  } else {
    toggleBtnEl.textContent = 'Dark Mode';
    body.classList.remove('dark');
    toggleBtnEl.style.backgroundColor =
      root.getPropertyValue('--primary-color');
    toggleBtnEl.style.color = root.getPropertyValue('--secondary-color');
  }
}

function setTime() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDay();
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const hoursForClock = hours % 12;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formatedDaysMonths = daysMonthsIndexs();
  const newDay = formatedDaysMonths.days[day];
  const newMonth = formatedDaysMonths.months[month];

  hoursEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minutesEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  secondsEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  }${ampm}`;

  dateEl.innerHTML = `${newDay}, ${newMonth} <span>${date}</span>`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function init() {
  toggleBtnEl.addEventListener('click', toggleStyle);
  setTime();

  setInterval(() => {
    setTime();
  }, 1000);
}

document.addEventListener('DOMContentLoaded', init);
