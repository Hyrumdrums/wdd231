import { fetchMembers, createCard, createRow } from './member-cards.js';

const cards = document.querySelector('#cards');

let membersData = [];

function displayMembers(members, createFunction) {
    cards.innerHTML = '';
    members.forEach((member) => {
        const element = createFunction(member);
        cards.appendChild(element);
    });
}

async function getMembers() {
    membersData = await fetchMembers();
    displayMembers(membersData, createCard);
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
