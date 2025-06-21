const jokeBtn = document.getElementById('new-joke');

async function getJokes() {
  const res = await fetch('https://icanhazdadjoke.com', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const { joke: jokes } = await res.json();
  console.log(jokes);
  document.getElementById('jokes').innerHTML = '';
  document.getElementById('jokes').innerHTML = jokes;
}

function displayJokes() {
  getJokes();
}

function init() {
  jokeBtn.addEventListener('click', displayJokes);
}

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', displayJokes);
