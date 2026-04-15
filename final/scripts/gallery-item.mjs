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
    
    figure.appendChild(img);
    figure.appendChild(figcaption);
    
    return figure;
}