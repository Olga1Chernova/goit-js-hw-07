import { galleryItems } from './gallery-items.js';
// Change code below this line

const commonGallery = document.querySelector(".gallery");
const galleryCards = createGalleryCard(galleryItems);
commonGallery.insertAdjacentHTML('beforeend', galleryCards);
commonGallery.addEventListener("click", onCardGalleryClick);

function createGalleryCard(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" />
            </a>`;
        })
        .join("");
}

function onCardGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    img.src = event.target.dataset.source;
    // document.addEventListener("keydown", onEscButtonClick);
}

// function onEscButtonClick(event) {
//     if (!event.key === "Escape") {
//         return;
//     }

//     lightbox.close(() => {
//         document.removeEventListener("keydown", onEscButtonClick);
//     })
// }

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    closeText: '×',
    captionDelay: 250,
    captionPosition: 'bottom',
    enableKeyboard: true,
    scrollZoom: true,
});
 