import {places} from '../data/interests.mjs'
// console.log(places);

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


const cards = document.querySelector('#interests');

async function getData() {
    // TODO: the fetch URL needs to change to correct JSON.
    const response = await fetch('https://raw.githubusercontent.com/prestonakagi/wdd231/refs/heads/main/chamber/data/members.json');
    const data = await response.json();
    // console.table(data);
    displayCards(places); //references the array not just the overall (single) object.
}

// look at prophets API assignment for anything else in the getData() function.

getData();

const displayCards = (places) => {
    places.forEach((place) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let description = document.createElement("p");
    let icon = document.createElement("img");

    // TODO: need change below to match JSON for interest.
        // Keep all classes and their names if can: name, address, icon.
    name.innerText = `${place.name}`;
    name.setAttribute("class", "co-name");
    address.innerText = `ADDRESS: ${place.address}`;
    address.setAttribute("class", "co-address");
    description.innerText = `${place.description}`;
    description.setAttribute("class", "co-description");

    icon.setAttribute("src", place.photo_url);
    icon.setAttribute("alt", `Icon of ${place.name}`);
    icon.setAttribute("loading", "lazy");
    //icon.setAttribute("width", "340");
    //icon.setAttribute("height", "440");
    
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(icon);

    cards.appendChild(card);
    });
}


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


// top navigation buttons on click to go to respective link AND put wayfinder.

const buttonOne = document.getElementById("button1");

buttonOne.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/chamber';
});

const buttonTwo = document.getElementById("button2");

buttonTwo.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/chamber/directory.html';
});

const buttonThree = document.getElementById("button3");

buttonThree.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/chamber/join.html';
});

const buttonFour = document.getElementById("button4");
buttonFour.classList.add('wayfinder');

buttonFour.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/chamber/discover.html';
});


// On page load
window.addEventListener('load', () => {
  const lastVisitKey = 'lastVisitDate';
  
  // Retrieve the last visit date from localStorage
  const lastVisit = localStorage.getItem(lastVisitKey);
  
  // Get the current date and time
  const now = new Date();
  
  // Define the target time on the next day (e.g., 3:00 PM)
  const targetTime = new Date(now);
  targetTime.setDate(now.getDate() + 1); // Move to the next day
  targetTime.setHours(15, 0, 0, 0); // Set to 3:00 PM (15:00:00)
  
  // Calculate the time difference in milliseconds
  const timeDifference = targetTime - now;
  
  // Convert the difference to hours, minutes, and seconds
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  // Display the string in the sidebar content area
  const sidebarContent = document.getElementById('sidebar-content');

  if (lastVisit) {
    // console.log(`Welcome! Your last visit was on: ${new Date(lastVisit).toLocaleString()}`);
    console.log(`Welcome! Let us know if you have any questions.`);
    sidebarContent.textContent = `Welcome! Let us know if you have any questions.`;
  } else if (lastVisit == true && hours > 0 && hours < 24) {
    console.log(`Back so soon! Awesome!`);
    sidebarContent.textContent = `Back so soon! Awesome!`;
  }
  else if (lastVisit == true && hours > 24) {
    if(days == 1) {
        console.log(`You last visited ${days} day ago.`);
        sidebarContent.textContent = `You last visited ${days} day ago.`;
    }
    else if (days > 1) {
    console.log(`You last visited ${days} days ago.`);
    sidebarContent.textContent = `You last visited ${days} days ago.`;
  }
};

  
  if (sidebarText) {
    sidebarContent.textContent = sidebarText;
  } else {
    sidebarContent.textContent = 'No content available.';
  }

  // Store the current date as the last visit date
  const currentDate = new Date().toISOString();
  localStorage.setItem(lastVisitKey, currentDate);
});
