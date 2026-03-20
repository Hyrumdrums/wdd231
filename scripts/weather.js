const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '736e93279fecb4deaa97991bcc5c7aeb';
const lon = 49.75;
const lat = 6.64;
const units = 'imperial';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
const iconurl = `https://openweathermap.org/img/w/`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function buildIconUrl(iconCode) {
    return `${iconurl}${iconCode}.png`;
};

function displayResults(data) {
    // temp
    const temp = data.main.temp;
    currentTemp.innerHTML = `${temp}&deg;F`;

    // icon
    const iconCode = data.weather[0].icon;
    const iconsrc = buildIconUrl(iconCode);

    // description
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }

apiFetch();