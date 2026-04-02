const memberships = [
    {
        level: "non-p",
        name: "NP Membership",
        cost: "Free",
        benefits: [
            "For non-profit organizations",
            "Basic chamber networking access",
            "Monthly newsletter"
        ]
    },
    {
        level: "bronze",
        name: "Bronze Membership", 
        cost: "$45/year",
        benefits: [
            "Standard benefits package",
            "Chamber networking events",
            "Business directory listing",
            "Monthly newsletter"
        ]
    },
    {
        level: "silver",
        name: "Silver Membership",
        cost: "$65/year", 
        benefits: [
            "Extra benefits package",
            "Website prioritization sorting",
            "Event discounts",
            "Chamber networking events",
            "Business directory listing",
            "Monthly newsletter"
        ]
    },
    {
        level: "gold",
        name: "Gold Membership",
        cost: "$95/year",
        benefits: [
            "First Class benefits package", 
            "Website prioritization sorting",
            "Annual business owner/manager training",
            "Event discounts",
            "Premium marketing opportunities",
            "Chamber networking events",
            "Business directory listing", 
            "Monthly newsletter"
        ]
    }
];

const membershipDetails = document.getElementById('membership-details');

function displayMembershipDetails(membership) {
    membershipDetails.innerHTML = '';
    membershipDetails.innerHTML = `
      <button id="closeModal">&#x2715;</button>
      <h2>${membership.name}</h2>
      <h3>${membership.cost}</h3>
      <p><strong>Benefits</strong>:</p>
      <ul>${membership.benefits.map(benefit => `<li>${benefit}</li>`).join('')}</ul>
    `;
    membershipDetails.showModal();
    
    closeModal.addEventListener("click", () => {
      membershipDetails.close();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const membershipContainer = document.querySelector('.membership-cards');
    
    memberships.forEach(membership => {
        const cardLink = document.createElement('a');
        cardLink.href = '#';
        cardLink.dataset.level = membership.level;
        
        const card = document.createElement('section');
        card.className = `basic-card ${membership.level}`;
        
        const title = document.createElement('h3');
        title.textContent = membership.name;
        
        const description = document.createElement('p');
        description.textContent = membership.benefits[0];
        
        const cost = document.createElement('p');
        cost.textContent = membership.cost;
        
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(cost);
        cardLink.appendChild(card);
        membershipContainer.appendChild(cardLink);
        
        cardLink.addEventListener('click', (e) => {
            e.preventDefault();
            displayMembershipDetails(membership);
        });
    });
});