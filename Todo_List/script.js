const form = document.querySelector('form');
const todoInput = document.querySelector('#input');
const todos_list = document.querySelector('#todos-list');

function CreateToDo(e) {
  e.preventDefault();
  const value = e.target.firstElementChild.value;
  addToDo({ text: value, completed: false });
  e.target.firstElementChild.value = '';
}

function addToDo(todo, save = true) {
  if (todo) {
    const liTodo = document.createElement('li');
    liTodo.innerText = todo.text;
    todos_list.appendChild(liTodo);

    if (todo.completed) {
      liTodo.classList.add('completed');
    }

    liTodo.addEventListener('click', () => {
      liTodo.classList.toggle('completed');
      updateFromStorage();
    });

    liTodo.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      liTodo.remove();
      removeFromStorage(liTodo.innerText);
    });

    if (save) {
      addToStorage(todo);
    }
  } else {
    alert('Please add a todo');
    return;
  }
}

function removeFromStorage(text) {
  const todos = fetchFromStorage();
  const filtered = todos.filter((todo) => todo.text !== text);
  console.log(filtered);
  localStorage.setItem('todos', JSON.stringify(filtered));
}

function addToStorage(todo) {
  const todos = fetchFromStorage();

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function fetchFromStorage() {
  let todos = [];

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
}

function updateFromStorage() {
  const liTodos = todos_list.querySelectorAll('li');
  const updatedToDos = [];

  liTodos.forEach((todo) => {
    updatedToDos.push({
      text: todo.innerText,
      completed: todo.classList.contains('completed'),
    });
  });
  localStorage.setItem('todos', JSON.stringify(updatedToDos));
}

function displayFromStorage() {
  const todos = fetchFromStorage();
  todos.forEach((todo) => addToDo(todo, false));
}

function init() {
  form.addEventListener('submit', CreateToDo);
  displayFromStorage();
}

document.addEventListener('DOMContentLoaded', init);
