export function displayVisitMessage() {
    const lastVisit = localStorage.getItem("lastVisit");
    const visitMessage = document.querySelector("#visit-message");
    
    if (!visitMessage) return;

    let daysDiff = 0;

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const now = new Date();
        const timeDiffMilli = now - lastVisitDate;
        daysDiff = timeDiffMilli / (1000 * 60 * 60 * 24);

        daysDiff = Math.floor(daysDiff);    
    }

    let result;

    switch (true) {
        case !lastVisit:
            result = "Welcome! Let us know if you have any questions.";
            break;
        case daysDiff < 1:
            result = "Back so soon! Awesome!";
            break;
        default:
            result = `You last visited ${daysDiff} day${daysDiff === 1 ? '' : 's'} ago.`;
    }

    visitMessage.textContent = result;
    visitMessage.style.display = 'block';
    
    setTimeout(() => {
        visitMessage.style.display = 'none';
    }, 3000);

    localStorage.setItem("lastVisit", new Date().toISOString());
}

