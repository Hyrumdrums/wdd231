const timeline = document.querySelector('.timeline');
const modal = document.getElementById('image-modal');
const closeBtn = document.querySelector('.close-modal');

timeline.addEventListener('click', (e) => {
    if (e.target.classList.contains('timeline-thumb') || e.target.hasAttribute('data-image')) {
        const imageSrc = e.target.getAttribute('data-image') || e.target.src;
        
        const modalImage = document.createElement('img');
        modalImage.src = imageSrc;
        modalImage.alt = 'Historical cave image';
        
        modal.innerHTML = '';
        modal.appendChild(modalImage);
        modal.appendChild(closeBtn);
        
        modal.showModal();
    }
});

closeBtn.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});