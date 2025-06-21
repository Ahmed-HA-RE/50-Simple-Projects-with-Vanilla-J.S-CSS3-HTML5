const addBtn = document.getElementById('add-note');
const clearBtn = document.getElementById('clear-notes');

function getFromStorage() {
  const notes = JSON.parse(localStorage.getItem('notes'));

  if (notes) {
    notes.forEach((note) => addNewNote(note));
  }
}

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
    <div class="edit-note">
      <button class="edit">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
      <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `;

  const main = note.querySelector('.main');
  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked.parse(text);

  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateToStorage();
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    const value = e.target.value;
    main.innerHTML = marked.parse(value);

    updateToStorage();
  });

  clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.note').forEach((note) => {
      note.remove();
    });
    updateToStorage();
  });

  document.body.appendChild(note);
}

function updateToStorage() {
  const texts = document.querySelectorAll('textarea');

  const notes = [];

  texts.forEach((text) => notes.push(text.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}

function init() {
  addBtn.addEventListener('click', () => addNewNote());
  getFromStorage();
}

document.addEventListener('DOMContentLoaded', init);
