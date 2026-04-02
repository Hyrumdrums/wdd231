document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    const firstName = urlParams.get('first') || 'Guest';
    document.getElementById('thank-you-message').textContent = `Thank you ${firstName} for your submission!`;
    
    const submissionData = document.getElementById('submission-data');
    
    submissionData.innerHTML = `
        <p><strong>First Name:</strong> ${urlParams.get('first') || ''}</p>
        <p><strong>Last Name:</strong> ${urlParams.get('last') || ''}</p>
        <p><strong>Email Address:</strong> ${urlParams.get('email') || ''}</p>
        <p><strong>Mobile Phone:</strong> ${urlParams.get('phone') || ''}</p>
        <p><strong>Business/Organization Name:</strong> ${urlParams.get('organization') || ''}</p>
        <p><strong>Membership Level:</strong> ${urlParams.get('membership') || ''}</p>
    `;
});