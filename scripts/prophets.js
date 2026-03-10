const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

function displayProphets(prophets) {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        // formally registered complaint: "this should be named something other than fullName"
        const fullName = document.createElement('h2');
        // ditto
        
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const detailsElement = document.createElement('p');
        detailsElement.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        detailsElement.innerHTML += `<br>Place of Birth: ${prophet.birthplace}`;
        
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - Latter-day President number ${prophet.order}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        card.appendChild(fullName);
        card.appendChild(detailsElement);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}

async function getProphets() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getProphets();