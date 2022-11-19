import { galleryItems } from './gallery-items.js';
// Change code below this line

const commonGallery = document.querySelector(".gallery");
const galleryCards = createGalleryCard(galleryItems);
commonGallery.insertAdjacentHTML('beforeend', galleryCards);


function createGalleryCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    
    })
        .join("");
}
