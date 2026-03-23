const MEMBERS_URL = './data/members.json';

export function getStarBadge(membershipLevel) {
    switch(membershipLevel) {
        case 1:
            return 'images/star-bronze.svg';
        case 2:
            return 'images/star-silver.svg';
        case 3:
            return 'images/star-gold.svg';
        default:
            return '';
    }
}

export function createCard(member) {
    const card = document.createElement('section');
    card.classList.add('member-card');
    
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
    
    const starBadge = document.createElement('img');
    starBadge.setAttribute('src', getStarBadge(member.membership));
    starBadge.setAttribute('alt', `${member.membership} star membership`);
    starBadge.setAttribute('class', 'star-badge');
    starBadge.setAttribute('width', '40');
    starBadge.setAttribute('height', '40');
    
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(detailsElement);
    card.appendChild(starBadge);

    return card;
}

export function createRow(member) {
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

export function createHighlightCard(member) {
    const card = document.createElement('section');
    card.classList.add('highlight-card');
    
    const name = document.createElement('h2');
    name.textContent = member.name;
    name.classList.add('highlight-name');
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('highlight-content');
    
    const logo = document.createElement('img');
    logo.setAttribute('src', `./images/members/${member.logo}`);
    logo.setAttribute('alt', `${member.name} logo`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '100');
    logo.setAttribute('height', '100');
    
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('highlight-details');
    const address = document.createElement('p');
    address.textContent = member.address;
    const phone = document.createElement('p');
    phone.textContent = member.phone;
    const website = document.createElement('p');
    const link = document.createElement('a');
    link.href = member.website;
    link.target = '_blank';
    link.textContent = member.website;
    website.appendChild(link);
    
    detailsDiv.appendChild(address);
    detailsDiv.appendChild(phone);
    detailsDiv.appendChild(website);
    
    const starBadge = document.createElement('img');
    starBadge.setAttribute('src', getStarBadge(member.membership));
    starBadge.setAttribute('alt', `${member.membership} star membership`);
    starBadge.setAttribute('class', 'star-badge highlight-star');
    starBadge.setAttribute('width', '30');
    starBadge.setAttribute('height', '30');
    
    contentDiv.appendChild(logo);
    contentDiv.appendChild(detailsDiv);
    
    card.appendChild(name);
    card.appendChild(contentDiv);
    card.appendChild(starBadge);
    
    return card;
}

export async function fetchMembers() {
    try {
        const response = await fetch(MEMBERS_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}