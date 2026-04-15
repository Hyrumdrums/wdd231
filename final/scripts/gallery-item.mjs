export function createGalleryItem(imageData) {
    const figure = document.createElement('figure');
    
    const img = document.createElement('img');
    img.setAttribute('src', `images/cave/${imageData.image}`);
    img.setAttribute('alt', imageData.description);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '400');
    img.setAttribute('height', '300');
    
    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `<strong>${imageData.location} - ${imageData.type}:</strong> ${imageData.description}. <em>Fun Fact:</em> ${imageData.funFact}`;
    
    const heart = document.createElement('span');
    heart.classList.add('heart');

    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(heart);
    
    addLikedState(figure, imageData);
    
    return figure;
}

function addLikedState(figure, imageData) {
    let id = imageData.id;
    let isLiked = localStorage.getItem(`liked_${id}`) === 'true';
    
    // Set initial state on page load
    figure.classList.toggle('liked', isLiked);
    
    figure.addEventListener('click', () => {    
        isLiked = !isLiked;
        localStorage.setItem(`liked_${id}`, isLiked);
        figure.classList.toggle('liked', isLiked);
    });
}