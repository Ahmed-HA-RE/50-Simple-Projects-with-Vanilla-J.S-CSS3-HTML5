const faqBtns = document.querySelectorAll('.faq-toggle');

faqBtns.forEach((faqBtn) => {
  faqBtn.addEventListener('click', (e) => {
    const faq = e.target.parentElement.parentElement;

    faq.classList.toggle('active');
  });
});
