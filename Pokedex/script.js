const pokimaneContainer = document.getElementById('pokimane-container');
const pokimane_count = 150;
const url = 'https://pokeapi.co/api/v2/pokemon/';
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const mainTypes = Object.keys(colors);

const fetchPokimanes = async () => {
  for (let i = 1; i <= pokimane_count; i++) {
    await getPokimanes(i);
  }
};

const getPokimanes = async (id) => {
  try {
    const { data, status } = await axios.get(`${url}${id}`);
    createPokimanes(data);

    if (status !== 200) {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.log(error);
  }
};

const createPokimanes = (pokimane) => {
  const div = document.createElement('div');
  div.classList.add('pokimane');

  const name = pokimane.name.charAt(0).toUpperCase() + pokimane.name.slice(1);
  const id = pokimane.id.toString().padStart(3, 0);
  const types = pokimane.types.map((type) => type.type.name);

  const newType = mainTypes.find((type) => types.indexOf(type) > -1);
  const color = colors[newType];

  div.style.backgroundColor = color;

  div.innerHTML = `
    <div class="image-container">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokimane.id}.png"
        alt="${pokimane.name}"
      />
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${newType}</span></small>
    </div>
  `;

  pokimaneContainer.appendChild(div);
};

fetchPokimanes();
