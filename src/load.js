import image from './img/jason-leung-unsplash.jpg';

export function load() {
  const content = document.querySelector('#content');
  const img = document.createElement('img');
  img.src = image;
  content.appendChild(img);
}
