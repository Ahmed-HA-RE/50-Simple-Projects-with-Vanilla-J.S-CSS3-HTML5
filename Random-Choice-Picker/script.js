const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('text');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
  const textValue = e.target.value;

  createTags(textValue);

  if (e.key === 'Enter') {
    randomTagSelect();
  }
});

function createTags(textValue) {
  const tags = textValue
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const span = document.createElement('span');
    span.classList.add('tag');
    span.innerText = tag;
    tagsEl.appendChild(span);
  });
}

function randomTagSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const tags = randomTags();

    highlightedTags(tags);

    setTimeout(() => {
      unHighlightedTags(tags);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const tags = randomTags();

      highlightedTags(tags);
    }, 100);
  }, times * 100);
}

function randomTags() {
  const tagsSpan = document.querySelectorAll('.tag');
  return tagsSpan[Math.floor(Math.random() * tagsSpan.length)];
}

function highlightedTags(tags) {
  tags.classList.add('highlighted');
}

function unHighlightedTags(tags) {
  tags.classList.remove('highlighted');
}
