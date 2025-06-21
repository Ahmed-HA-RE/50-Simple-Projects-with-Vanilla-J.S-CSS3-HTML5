const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=b526d07497b5b67b413f100e543beef3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=b526d07497b5b67b413f100e543beef3&query="';
const searchInput = document.querySelector('form');
const gallery = document.getElementById('movies-gallery');
const movie = document.getElementById('movie');

async function getMovies(url) {
  const res = await fetch(url);
  const { results: movieData } = await res.json();

  displayMovies(movieData);
}

function searchMovies(e) {
  e.preventDefault();

  const search = e.target.firstElementChild.value;

  if (search === '' || !search) {
    alert('Please Add a Movie');
    return;
  }

  gallery.innerHTML = '';
  getMovies(`${SEARCH_URL}${search}`);
}

function displayMovies(moviesData) {
  moviesData.forEach((movie) => {
    const div = document.createElement('div');
    const resultsVote = ratingTwoDigits(movie.vote_average);
    div.classList.add('movie');
    div.innerHTML = `
      <div class="movie-img">
      <img src="${IMG_PATH}${movie.poster_path}" alt="movie" />
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
         <span class="movie-rating ${resultsVote.status} ">${resultsVote.number}</span>
      </div>

      <div class="overview">
        <h3>Overview</h3>
        <p class="movie-description">
          ${movie.overview}
        </p>
      </div>
    `;
    gallery.appendChild(div);
  });
}

function ratingTwoDigits(rating) {
  const ratingVote = {
    number: rating.toFixed(1),
    status: '',
  };
  if (ratingVote.number >= '7.5') {
    ratingVote.status = 'green';
  } else if (ratingVote.number >= '5' && ratingVote.number < '7.5') {
    ratingVote.status = 'orange';
  } else {
    ratingVote.status = 'red';
  }

  return ratingVote;
}

function init() {
  searchInput.addEventListener('submit', searchMovies);
  getMovies(API_URL);
}

document.addEventListener('DOMContentLoaded', init);
