
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

let imagesToLoad = document.querySelectorAll('img[data-src]');
imagesToLoad.forEach((img) => {
    loadImages(img);
  });