import { fetchMembers, createCard } from './member-cards.js';

let membersData = [];

async function getMembers() {
    membersData = await fetchMembers();
    
    membersData.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver')

    // randomly get a few
    const filteredMembers = membersData;
    const randomMembers = [];
    for (let i = 0; i < 3; i++) {
        const randomMember = filteredMembers[Math.floor(Math.random() * filteredMembers.length)];
        randomMembers.push(randomMember);
    }

    // Render the filtered members
    renderHighlightMembers(randomMembers);
}

function renderHighlightMembers(members) {
    // TODO: Update selector to match your highlight section
    const highlightContainer = document.querySelector('#member-highlights');
    if (!highlightContainer) return;
    
    highlightContainer.innerHTML = '';
    members.forEach((member) => {
        const element = createCard(member);
        highlightContainer.appendChild(element);
    });
}

getMembers();