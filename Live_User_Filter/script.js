const result = document.getElementById('results');
const filterInput = document.getElementById('filter');
let listItems = [];

const getData = async () => {
  try {
    const { data } = await axios('https://randomuser.me/api?results=50');

    result.innerHTML = '';
    data.results.forEach((user) => {
      const liEl = document.createElement('li');
      liEl.innerHTML = `
         <img src="${user.picture.large}" alt="" />
        <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `;
      listItems.push(liEl);
      result.appendChild(liEl);
    });
  } catch (error) {
    if (error.response) {
      const status = error.response.status;

      if (status === 404) {
        console.log('Not Found');
      } else if (status === 500) {
        console.log('Server Error');
      }
    } else {
      console.log(error.message);
    }
  }
};

const filterUsers = (listItems, e) => {
  const names = e.target.value.toLowerCase().trim();
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(names)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
};

const init = () => {
  getData();
  filterInput.addEventListener('input', (e) => filterUsers(listItems, e));
};

document.addEventListener('DOMContentLoaded', init);
