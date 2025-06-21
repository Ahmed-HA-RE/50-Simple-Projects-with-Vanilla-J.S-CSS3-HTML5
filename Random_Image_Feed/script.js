import API_Unsplash_KEY from './config.js';
const galleryParent = document.querySelector('.grid-gallery');

async function getData() {
  const { data } = await axios.get(
    `https://api.unsplash.com/photos/random?query=city&orientation=squarish&count=50&client_id=${API_Unsplash_KEY}`
  );

  displayImages(data);
}

function displayImages(images) {
  document.querySelector('.gallery-section h2').remove();
  images.forEach((image) => {
    const imagePath = image.urls.regular;
    const div = document.createElement('div');
    div.classList.add('gallery');
    div.innerHTML = `<img src="${imagePath}" alt="" class="gallery-img"/>`;
    galleryParent.appendChild(div);
  });
}

function init() {
  getData();
}

document.addEventListener('DOMContentLoaded', init);
