import { fetchMembers, createHighlightCard } from './member-cards.js';

let membersData = [];

async function getMembers() {
    membersData = await fetchMembers();
    
    const filteredMembers = membersData.filter(member => member.membership === 2 || member.membership === 3);

    const randomMembers = [];
    const availableMembers = [...filteredMembers];
    
    while (randomMembers.length < 3 && availableMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableMembers.length);
        randomMembers.push(availableMembers[randomIndex]);
        availableMembers.splice(randomIndex, 1);
    }

    // Render the filtered members
    renderHighlightMembers(randomMembers);
}

function renderHighlightMembers(members) {
    const highlightContainer = document.querySelector('#member-highlights');
    if (!highlightContainer) return;
    
    highlightContainer.innerHTML = '';
    members.forEach((member) => {
        const element = createHighlightCard(member);
        highlightContainer.appendChild(element);
    });
}

getMembers();