// footer year and datetime last modified

// select the DOM element for year output
const year = document.getElementById("currentyear");

// use the date object
const today = new Date();

const currentYear = today.getFullYear();

// change text displayed on rendered web page
year.innerText = currentYear


// select the DOM element for last modified output
const lastMod = document.getElementById("lastModified");

// use lastModified property of document
// default format is mm/dd/yyyy hh:mm:ss
lastMod.innerText = document.lastModified;


// responsive hamburger effect on nav menu.

// hamburger button only show in mobile (small) view.
// clicking hamburger button toggles nav menu items from viewable to not viewable.
// use a symbol, like "X", to close hamburger menu.

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});


const cards = document.querySelector('#members');

async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/prestonakagi/wdd231/refs/heads/main/chamber/data/members.json');
    const data = await response.json();
    // console.table(data);
    displayCards(data.companies); //references the array not just the overall (single) object.
}

// look at prophets API assignment for anything else in the getData() function.

getData();

const displayCards = (companies) => {
    companies.forEach((company) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let businessTagLine = document.createElement("p"); //need put some info in JSON
    let address = document.createElement("p");
    let email = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("p");
    let icon = document.createElement("img");

    name.innerText = `${company.name}`;
    name.setAttribute("class", "co-name");
    businessTagLine.innerText = `${company.tagLine}`;
    businessTagLine.setAttribute("class", "co-tag");
    address.innerText = `ADDRESS: ${company.address}`;
    address.setAttribute("class", "co-address");
    email.innerText = `EMAIL: ${company.email}`;
    email.setAttribute("class", "co-email");
    phone.innerText = `PHONE: ${company.phone}`;
    phone.setAttribute("class", "co-phone");
    url.innerText = `URL: ${company.website}`;
    url.setAttribute("class", "co-url");

    icon.setAttribute("src", company.icon);
    icon.setAttribute("alt", `Icon of ${company.name}`);
    icon.setAttribute("loading", "lazy");
    //icon.setAttribute("width", "340");
    //icon.setAttribute("height", "440");
    
    card.appendChild(name);
    card.appendChild(businessTagLine);
    card.appendChild(address);
    card.appendChild(email);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(icon);

    cards.appendChild(card);
    });
}


// buttons switch company cards grid and list
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
	cards.classList.remove("grid");
    cards.classList.add("grid");
	cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
	cards.classList.add("list");
	cards.classList.remove("grid");
});


// chamber's contact info
const chamberContact = {title: "Draper Chamber of Commerce", street: "123 E 45678 S", city: "Draper, Utah 84020", email: "info@drapercc.org", phone: "(801) 333-4444"}

const contactInfo = document.querySelector('#address-contact');

// for (let i = 0; i < chamberContact.length; i++) {
//     let pToAdd = document.createElement("p");
//     let info = chamberContact[i];
//     pToAdd.innerText = info;
//     contactInfo.appendChild(pToAdd);
// }

const ctitle = document.createElement("p");
const cstreet = document.createElement("p");
const ccity = document.createElement("p");
const cemail = document.createElement("p");
const cphone = document.createElement("p");

ctitle.innerText = `${chamberContact["title"]}`;
cstreet.innerText = `${chamberContact["street"]}`;
ccity.innerText = `${chamberContact["city"]}`;
cemail.innerText = `${chamberContact["email"]}`;
cphone.innerText = `${chamberContact["phone"]}`;

contactInfo.appendChild(ctitle);
contactInfo.appendChild(cstreet);
contactInfo.appendChild(ccity);
contactInfo.appendChild(cemail);
contactInfo.appendChild(cphone);


// weather API. Need current temp and weather description, and 3 day temp forecast.
// description should include cloudiness, high, low, humidity, sunrise time and sunset time.
const currentDescription = document.querySelector('#current');
const weatherIcon = document.querySelector('#weather-icon');

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=40.52&lon=-111.86&units=imperial&appid=cc7252cbfcb57d0a8dcd1a1bfbab9acb';
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.52&lon=-111.86&units=imperial&appid=cc7252cbfcb57d0a8dcd1a1bfbab9acb';


async function apiFetch() {
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready (this is from the learning activity)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

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

apiFetch();

function displayResults(data) {
    let temp = document.createElement("p");
    let cloudiness = document.createElement("p");
    let high = document.createElement("p");
    let low = document.createElement("p");
    let humidity = document.createElement("p");
    let sunrise = document.createElement("p");
    let sunset = document.createElement("p");
    
    temp.innerText = `${Math.round(data.main.temp)}°F`;
    cloudiness.innerText = `${data.weather[0].description}`;
    high.innerText = `High: ${Math.round(data.main.temp_max)}°F`;
    low.innerText = `Low: ${Math.round(data.main.temp_min)}°F`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    // how convert the sunrise and sunset integers to times am and pm?
    let timeSunrise = data.sys.sunrise;
    let dateSunrise = new Date(timeSunrise*1000);
    // Hours part from the timestamp
    let hoursSunrise = dateSunrise.getHours();

    // Minutes part from the timestamp
    let minutesSunrise = "0" + dateSunrise.getMinutes();

    // Seconds part from the timestamp
    // let secondsSunrise = "0" + dateSunrise.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTimeSunrise = hoursSunrise + ':' + minutesSunrise.substr(-2);

    let timeSunset = data.sys.sunset;
    let dateSunset = new Date(timeSunset*1000);
    // Hours part from the timestamp
    let hoursSunset = dateSunset.getHours();

    // Minutes part from the timestamp
    let minutesSunset = "0" + dateSunset.getMinutes();

    // Seconds part from the timestamp
    // let secondsSunset = "0" + dateSunset.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTimeSunset = hoursSunset + ':' + minutesSunset.substr(-2);

    sunrise.innerText = `Sunrise (24 hr): ${formattedTimeSunrise}`;
    sunset.innerText = `Sunset (24 hr): ${formattedTimeSunset}`;

    currentDescription.appendChild(temp);
    currentDescription.appendChild(cloudiness);
    currentDescription.appendChild(high);
    currentDescription.appendChild(low);
    currentDescription.appendChild(humidity);
    currentDescription.appendChild(sunrise);
    currentDescription.appendChild(sunset);

    let iconCode = data.weather[0].icon;
    let weatherIconImage = document.createElement("img");
    weatherIconImage.setAttribute('src', `https://openweathermap.org/img/wn/${iconCode}@2x.png`);
    // not sure if above url is `https://openweathermap.org/img/w/${iconCode}@2x.png` or without @2x too.
    weatherIconImage.setAttribute('alt', `${data.weather[0].description}`);
    weatherIconImage.setAttribute('loading', 'lazy');
    weatherIcon.appendChild(weatherIconImage);
}


const spanForecast = document.querySelector('.forecast');

// need add displayForecast(data) in to DisplayResults function.
function displayForecast(data) {
    let today = document.createElement("p");
    let tomorrow = document.createElement("p");
    let nextDay = document.createElement("p");
    
    // indexes 5, 13, 21
    today.innerText = `Today: ${Math.round(data.list[5].main.temp_max)}°F`;
    tomorrow.innerText = `Tomorrow: ${Math.round(data.list[13].main.temp_max)}°F`;
    nextDay.innerText = `Day After Tomorrow: ${Math.round(data.list[21].main.temp_max)}°F`;
    
    spanForecast.appendChild(today);
    spanForecast.appendChild(tomorrow);
    spanForecast.appendChild(nextDay);
}


// top navigation buttons on click to go to respective link AND put wayfinder.

const buttonOne = document.getElementById("button1");

buttonOne.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/chamber';
});

const buttonTwo = document.getElementById("button2");
buttonTwo.classList.add('wayfinder');

buttonTwo.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/chamber/directory.html';
});

const buttonThree = document.getElementById("button3");

buttonThree.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/chamber/join.html';
});

const buttonFour = document.getElementById("button4");

buttonFour.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/chamber/discover.html';
});