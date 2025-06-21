const countNumbers = document.querySelectorAll('.increment-count-number');

countNumbers.forEach((countNumber) => {
  countNumber.innerHTML = 0;

  const updateCounter = () => {
    const dataCounterNumber = +countNumber.getAttribute('data-count');
    const countNumberInit = +countNumber.innerHTML;
    const increment = Math.ceil(dataCounterNumber / 200);

    if (countNumberInit < dataCounterNumber) {
      countNumber.innerHTML = `${countNumberInit + increment}`;
      setTimeout(() => updateCounter(), 100);
    } else {
      countNumber.innerHTML = dataCounterNumber;
    }
  };
  updateCounter();
});
