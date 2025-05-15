const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data to make a Javascript object (an array of objects)
    //console.table(data); // call data.prophets instead?
    displayProphets(data.prophets); //references the array not just the overall (single) object.
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let dob = document.createElement("p");
    let pob = document.createElement("p");
    let portrait = document.createElement("img");

    fullName.innerText = `${prophet.name} ${prophet.lastname}`;
    dob.innerText = `Date of Birth: ${prophet.birthdate}`;
    pob.innerText = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");
    
    card.appendChild(fullName);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(portrait);

    cards.appendChild(card);
    });
}