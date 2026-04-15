import { createGalleryItem } from './gallery-item.mjs';

const DATA_URL = './scripts/data/images.json';
const gallery = document.querySelector('.gallery');

async function fetchGalleryData() {
    try {
        const response = await fetch(DATA_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

function displayGallery(imageData) {
    gallery.innerHTML = '';
    
    imageData.forEach(item => {
        const galleryItem = createGalleryItem(item);
        gallery.appendChild(galleryItem);
    });
}

async function loadGallery() {
    const data = await fetchGalleryData();
    displayGallery(data);
}

loadGallery();