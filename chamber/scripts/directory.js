const url = './data/members.json';

const cards = document.querySelector('#cards');

function displayMembers(members) {
    members.forEach((member) => {
        const card = document.createElement('section');
        
        const name = document.createElement('h2');
        name.textContent = member.name;

        const detailsElement = document.createElement('p');
        detailsElement.innerHTML = `Address: ${member.address}`;
        detailsElement.innerHTML += `<br>${member.phone}`;
        detailsElement.innerHTML += `<br><a href="${member.website}" target="_blank">${member.website}</a>`;
        
        const image = document.createElement('img');
        image.setAttribute('src', `./images/members/${member.image}`);
        image.setAttribute('alt', `${member.name} logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '200');
        
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(detailsElement);

        cards.appendChild(card);

    });
}

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getMembers();
