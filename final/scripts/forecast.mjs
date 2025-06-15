// want 4 days with 4 times during the day, so conditional if statements.

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const spanForecast = document.querySelector('.forecast');
const weatherIcon = document.querySelector('#weather-icon');

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.52&lon=-111.86&units=imperial&appid=cc7252cbfcb57d0a8dcd1a1bfbab9acb';

export async function apiFetch() {
    try {
        const responseForecast = await fetch(urlForecast);
        if (responseForecast.ok) {
            const dataForecast = await responseForecast.json();
            console.log(dataForecast); // testing only
            displayForecast(dataForecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// apiFetch();

// need add displayForecast(data) in to DisplayResults function.
export function displayForecast(data) {
    //dt_txt:"2025-06-16 00:00:00", the 00's time is noon, and that is index 0!
    let temp = document.createElement("p");
    let cloudiness = document.createElement("p");
    let wind = document.createElement("p");
    
    temp.innerText = `${Math.round(data.list[0].main.temp)}°F`;
    cloudiness.innerText = `${data.list[0].weather[0].description}`;
    wind.innerText = `Wind speed: ${Math.round(data.main.temp_min)} mph`;

    spanForecast.appendChild(temp);
    spanForecast.appendChild(cloudiness);
    spanForecast.appendChild(wind);

    let iconCode = data.list[0].weather[0].icon;
    let weatherIconImage = document.createElement("img");
    weatherIconImage.setAttribute('src', `https://openweathermap.org/img/wn/${iconCode}@2x.png`);
    // not sure if above url is `https://openweathermap.org/img/w/${iconCode}@2x.png` or without @2x too.
    weatherIconImage.setAttribute('alt', `${data.list[0].weather[0].description}`);
    weatherIconImage.setAttribute('loading', 'lazy');
    weatherIcon.appendChild(weatherIconImage);
}