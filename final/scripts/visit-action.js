document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    const name = urlParams.get('name') || 'Guest';
    document.getElementById('thank-you-message').textContent = `Thank you ${name} for your question!`;
    
    const submissionData = document.getElementById('submission-data');
    
    submissionData.innerHTML = `
        <p><strong>Name:</strong> ${urlParams.get('name') || ''}</p>
        <p><strong>Email Address:</strong> ${urlParams.get('email') || ''}</p>
        <p><strong>Question:</strong> ${urlParams.get('question') || ''}</p>
    `;
});