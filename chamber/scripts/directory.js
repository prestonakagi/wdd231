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
    businessTagLine.innerText = `${company.tagLine}`;
    address.innerText = `ADDRESS: ${company.address}`;
    email.innerText = `EMAIL: ${company.email}`;
    phone.innerText = `PHONE: ${company.phone}`;
    url.innerText = `URL: ${company.website}`;

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
