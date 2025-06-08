import {places} from '../data/interests.mjs'
console.log(places);

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

    // TODO: need change below to match JSON for interest.
        // Keep all classes and their names if can: name, address, icon.
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