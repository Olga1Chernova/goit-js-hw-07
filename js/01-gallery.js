import { galleryItems } from './gallery-items.js';
// Change code below this line


const commonGallery = document.querySelector(".gallery");
const galleryCards = createGalleryCard(galleryItems);
commonGallery.insertAdjacentHTML('beforeend', galleryCards);
commonGallery.addEventListener('click', onCardGalleryClick);
const modalImg = basicLightbox.create(`<img>`);


function createGalleryCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        `<div class = "gallery__item">
            <li>
                <a class = "gallery__link" href = "${original}">
                    <img class = "gallery__image"
                    src = "${preview}" 
                    alt = "${description}">
                    data-source = "${original}"
                    </img>
            </li> 
            </a>
        </div>`;
    
    })
        .join("");
}

function onCardGalleryClick(event) {
    event.preventDefault();
    
    if (!event.target.nodeName !== "IMG") {
        return;
    }

    const originalImgURL = event.target.getAttribute('data-source');
    
    modalImg.element().querySelector('img').src = originalImgURL;
    modalImg.show();

    document.addEventListener("keydown", onEscButtonClick);
}

function onEscButtonClick (event) {
    if (!(modalImg.visible() && event.key === "Escape")) {
        return;
    }

    modalImg.close();
    document.removeEventListener("keydown", onEscButtonClick);
        
}