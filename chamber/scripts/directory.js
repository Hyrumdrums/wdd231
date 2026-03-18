const url = './data/members.json';

const cards = document.querySelector('#cards');

let membersData = [];

function createCard(member) {
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

    return card;
}

function createRow(member) {
    const row = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = member.name;

    const addressCell = document.createElement('td');
    addressCell.textContent = member.address;

    const phoneCell = document.createElement('td');
    phoneCell.textContent = member.phone;

    const websiteCell = document.createElement('td');
    const link = document.createElement('a');
    link.href = member.website;
    link.target = '_blank';
    link.textContent = member.website;
    websiteCell.appendChild(link);
    
    row.appendChild(nameCell);
    row.appendChild(addressCell);
    row.appendChild(phoneCell);
    row.appendChild(websiteCell);

    return row;
}

function displayMembers(members, createFunction) {
    cards.innerHTML = '';
    members.forEach((member) => {
        const element = createFunction(member);
        cards.appendChild(element);
    });
}

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        membersData = data;
        displayMembers(membersData, createCard);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.querySelector('#grid-view').addEventListener('click', (e) => {
    e.preventDefault();
    displayMembers(membersData, createCard);
});

document.querySelector('#list-view').addEventListener('click', (e) => {
    e.preventDefault();
    cards.innerHTML = '';
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Name', 'Address', 'Phone', 'Website'].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    membersData.forEach(member => {
        const row = createRow(member);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    cards.appendChild(table);
});

getMembers();
