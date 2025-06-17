// want 4 days with 4 times during the day, so conditional if statements.

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const spanForecast = document.querySelector('.forecast');
// const weatherIcon = document.querySelector('#weather-icon');
// const weatherIcon = document.getElementById('weather-icon');

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
    // const dateExplainer = document.createElement("p");
    // dateExplainer.innerText(`Times below are 24-hour based, but 21:00 is 9:00 am and 06:00 is 6:00 pm.`);
    // spanForecast.appendChild(dateExplainer);

    let dateTimeString = data.list[0].dt_txt; //"yyyy-mm-dd hh:mm:ss"
    let dateObj = new Date(dateTimeString.replace(" ", "T")); // Convert to ISO format

    let date = dateObj.toISOString().split("T")[0]; // "2025-06-16"
    let hours = dateObj.getHours(); // 15
    let minutes = dateObj.getMinutes(); // 0

    console.log("Date:", date);
    console.log("Hours:", hours);
    console.log("Minutes:", minutes);

    //dt_txt:"2025-06-16 00:00:00", the 00's time is noon, and that is index 0!
    let cardWeather = document.createElement('section');
    cardWeather.setAttribute("class", "card-weather");
    let dayAndTime = document.createElement("p");
    let temp = document.createElement("p");
    let cloudiness = document.createElement("p");
    let wind = document.createElement("p");

    dayAndTime.innerText = `${date} ${hours}:00`;    
    temp.innerText = `${Math.round(data.list[0].main.temp)}°F`;
    cloudiness.innerText = `${data.list[0].weather[0].description}`;
    wind.innerText = `Wind speed: ${Math.round(data.list[0].wind.speed)} mph`;

    cardWeather.appendChild(dayAndTime);
    cardWeather.appendChild(temp);
    cardWeather.appendChild(cloudiness);
    cardWeather.appendChild(wind);

    spanForecast.appendChild(cardWeather);

    // three times for day 1 and 3 more days
    const threeDays = [1, 2, 3, 8, 9, 10, 11, 16, 17, 18, 19, 24, 25, 26, 27];

    threeDays.forEach((num) => {
        let dateTimeString = data.list[num].dt_txt; //"yyyy-mm-dd hh:mm:ss"
        let dateObj = new Date(dateTimeString.replace(" ", "T")); // Convert to ISO format

        let date = dateObj.toISOString().split("T")[0]; // "2025-06-16"
        let hours = dateObj.getHours(); // 15
        let minutes = dateObj.getMinutes(); // 0

        console.log("Date:", date);
        console.log("Hours:", hours);
        console.log("Minutes:", minutes);

        //dt_txt:"2025-06-16 00:00:00", the 00's time is noon, and that is index 0!
        let dayAndTime = document.createElement("p");
        let temp = document.createElement("p");
        let cloudiness = document.createElement("p");
        let wind = document.createElement("p");

        dayAndTime.innerText = `${date} ${hours}:00`;    
        temp.innerText = `${Math.round(data.list[num].main.temp)}°F`;
        cloudiness.innerText = `${data.list[num].weather[0].description}`;
        wind.innerText = `Wind speed: ${Math.round(data.list[num].wind.speed)} mph`;

        cardWeather.appendChild(dayAndTime);
        cardWeather.appendChild(temp);
        cardWeather.appendChild(cloudiness);
        cardWeather.appendChild(wind);

        spanForecast.appendChild(cardWeather);
    })



    // let iconCode = data.list[0].weather[0].icon;
    // let weatherIconImage = document.createElement("img");
    // weatherIconImage.setAttribute('src', `https://openweathermap.org/img/wn/${iconCode}@2x.png`);
    // // not sure if above url is `https://openweathermap.org/img/w/${iconCode}@2x.png` or without @2x too.
    // weatherIconImage.setAttribute('alt', `${data.list[0].weather[0].description}`);
    // weatherIconImage.setAttribute('loading', 'lazy');
    // weatherIcon.appendChild(weatherIconImage);

    // get date and time
    
    // let dateTimeString = data.list[0].dt_txt; //"yyyy-mm-dd hh:mm:ss"
    // let dateObj = new Date(dateTimeString.replace(" ", "T")); // Convert to ISO format

    // let date = dateObj.toISOString().split("T")[0]; // "2025-06-16"
    // let hours = dateObj.getHours(); // 15
    // let minutes = dateObj.getMinutes(); // 0

    // console.log("Date:", date);
    // console.log("Hours:", hours);
    // console.log("Minutes:", minutes);

    // const dateExplainer = document.createElement("p");
    // dateExplainer.innerText(`Times below are 24-hour based, but 21:00 is 9:00 am and 06:00 is 6:00 pm.`);
    // spanForecast.appendChild(dateExplainer);

    // let i = 0; //index counter for list

    // while (hours < 21 || hours > 6) {
    //     i += 1;
    //     dateTimeString = data.list[i].dt_txt; //"yyyy-mm-dd hh:mm:ss"
    //     dateObj = new Date(dateTimeString.replace(" ", "T")); // Convert to ISO format
    //     date = dateObj.toISOString().split("T")[0]; // "2025-06-16"
    //     hours = dateObj.getHours(); // 15
    // }
    
    // while (hours >= 21 && hours <= 6) {
    //     //dt_txt:"2025-06-16 00:00:00", the 00's time is noon, and that is index 0!
    //     let dayAndTime = document.createElement("p");
    //     let temp = document.createElement("p");
    //     let cloudiness = document.createElement("p");
    //     let wind = document.createElement("p");
        
    //     dateTimeString = data.list[i].dt_txt; //"yyyy-mm-dd hh:mm:ss"
    //     dateObj = new Date(dateTimeString.replace(" ", "T")); // Convert to ISO format
    //     date = dateObj.toISOString().split("T")[0]; // "2025-06-16"
    //     hours = dateObj.getHours(); // 15
    //     minutes = dateObj.getMinutes(); // 0

    //     dayAndTime.innerText = `${date} ${hours} ${minutes}`;
    //     temp.innerText = `${Math.round(data.list[i].main.temp)}°F`;
    //     cloudiness.innerText = `${data.list[i].weather[0].description}`;
    //     wind.innerText = `Wind speed: ${Math.round(data.list[i].wind.speed)} mph`;

    //     spanForecast.appendChild(dayAndTime);
    //     spanForecast.appendChild(temp);
    //     spanForecast.appendChild(cloudiness);
    //     spanForecast.appendChild(wind);
    // }
}