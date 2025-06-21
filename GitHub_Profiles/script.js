const APIURL = 'https://api.github.com/users/';
const formUser = document.getElementById('user-form');

async function getUser(username) {
  try {
    const { data } = await axios.get(`${APIURL}${username}`);
    displayUser(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorMessage('No Profile With This Username');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(`${APIURL}${username}/repos?sort=created`);
    console.log(data);
    addRepos(data);
  } catch (error) {
    createErrorMessage('Problem Fetching Repos');
  }
}

function searchUser(e) {
  e.preventDefault();
  const value = e.target.firstElementChild.value.trim();
  getUser(value);
  e.target.firstElementChild.value = '';
}

function displayUser(data) {
  document.querySelector('main').innerHTML = '';

  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
    <div>
      <img
        class="profile-img"
        src="${data.avatar_url}"
        alt=""
      />
    </div>
    <div class="card-info">
      <h2 class="name" id="name">${data.login}</h2>

      <p class="description">
        ${data.bio ? data.bio : "User Dosen't Have a Bio  "}
      </p>

      <ul class="list">
        <li class="list-item">${data.followers} <strong>Followers</strong></li>
        <li class="list-item">${data.following} <strong>Following</strong></li>
        <li class="list-item">${data.public_repos} <strong>Repos</strong></li>
      </ul>

      <div class="links-repo">
      </div>
    </div>
  `;

  document.querySelector('main').appendChild(div);
}

function addRepos(repos) {
  const parentEl = document.querySelector('.links-repo');

  repos.slice(0, 10).forEach((repo) => {
    const linkEl = document.createElement('a');
    linkEl.classList.add('repo');
    linkEl.href = repo.html_url;
    linkEl.target = '_blank';
    linkEl.innerText = repo.name;
    parentEl.appendChild(linkEl);
  });
}

function createErrorMessage(message) {
  document.querySelector('main').innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('error-msg');
  div.innerHTML = `
    <h1>${message}</h1>
  `;
  document.querySelector('main').appendChild(div);
}

function init() {
  formUser.addEventListener('submit', searchUser);
}

document.addEventListener('DOMContentLoaded', init);
