// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


import { galleryItems } from './gallery-items.js';

const galleryListREF = document.querySelector('.gallery');
galleryListREF.innerHTML = crateMarkup(galleryItems);

function crateMarkup(items) {
    return items.map(item => `<div><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></div>`).join('')
};

var lightbox = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250,});