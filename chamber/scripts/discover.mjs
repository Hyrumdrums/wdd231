import { ogdenPointsOfInterest } from './places.mjs';
import { displayVisitMessage } from './lastvisit.mjs';

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
    title.style.gridArea = 'title';

    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = place.image;
    image.alt = place.name;
    image.loading = 'lazy';
    figure.appendChild(image);
    figure.style.gridArea = 'image';

    const address = document.createElement('address');
    address.textContent = place.address;
    address.style.gridArea = 'address';

    const description = document.createElement('p');
    description.textContent = place.description;
    description.style.gridArea = 'description';

    const button = document.createElement('button');
    button.textContent = 'Learn More';
    button.classList.add('cta-button');
    button.style.gridArea = 'button';

    placeDiv.appendChild(title);
    placeDiv.appendChild(figure);
    placeDiv.appendChild(address);
    placeDiv.appendChild(description);
    placeDiv.appendChild(button);

    return placeDiv;
}

renderPlaces();
displayVisitMessage();