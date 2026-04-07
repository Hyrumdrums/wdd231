import { ogdenPointsOfInterest } from './places.mjs';

function renderPlaces() {
    const placesContainer = document.querySelector('#places');
    if (!placesContainer) return;

    placesContainer.innerHTML = '';
    
    ogdenPointsOfInterest.forEach((place) => {
        const placeElement = createPlaceCard(place);
        placesContainer.appendChild(placeElement);
    });
}

function createPlaceCard(place) {
    const placeDiv = document.createElement('div');
    placeDiv.classList.add('basic-card');

    const title = document.createElement('h2');
    title.textContent = place.name;

    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = place.image;
    image.alt = place.name;
    image.loading = 'lazy';
    figure.appendChild(image);

    const address = document.createElement('address');
    address.textContent = place.address;

    const description = document.createElement('p');
    description.textContent = place.description;

    const button = document.createElement('button');
    button.textContent = 'Learn More';

    placeDiv.appendChild(title);
    placeDiv.appendChild(figure);
    placeDiv.appendChild(address);
    placeDiv.appendChild(description);
    placeDiv.appendChild(button);

    return placeDiv;
}

renderPlaces();