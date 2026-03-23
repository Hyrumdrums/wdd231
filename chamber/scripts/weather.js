const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastDiv = document.querySelector('#forecast');

// icky to keep here, but for a puplic api on free tier, it's not a huge deal.
const apiKey = '736e93279fecb4deaa97991bcc5c7aeb';
const lat = 41.223;
const lon = -111.9738;
const units = 'imperial';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
const iconurl = `https://openweathermap.org/img/wn/`;

async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function buildIconUrl(iconCode) {
    return `${iconurl}${iconCode}@4x.png`;
};

function displayCurrentWeather(data) {
    const temp = Math.round(data.main.temp);
    currentTemp.innerHTML = `${temp}&deg;F`;

    const iconCode = data.weather[0].icon;
    const iconsrc = buildIconUrl(iconCode);
    const desc = data.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    const today = new Date();
    const targetDates = [];

    // first assemble the desired dates
    for (let i = 1; i <= 3; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        targetDates.push(date);
    }

    // lookup the forcast for each day
    const dailyForecasts = [];
    for (const targetDate of targetDates) {
        const forecast = data.list.find(f => {
            const fDate = new Date(f.dt * 1000);
            return fDate.toDateString() === targetDate.toDateString();
        });
        if (forecast) {
            dailyForecasts.push({
                date: targetDate,
                temp: Math.round(forecast.main.temp),
                desc: forecast.weather[0].description
            });
        }
    }
    
    forecastDiv.innerHTML = dailyForecasts.map(forecast => {
        let formattedDate = forecast.date.toLocaleDateString('en-US', { weekday: 'short' });
        return `<p>${formattedDate}: ${forecast.temp}&deg;F</p>`;
    }).join('');
}

getCurrentWeather();
getForecast();