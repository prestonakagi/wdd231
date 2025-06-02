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


// Form hidden type for timestamp
document.getElementById('timestamp').value = new Date().toISOString();


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


async function getDataNp() {
    const response = await fetch('https://raw.githubusercontent.com/prestonakagi/wdd231/refs/heads/main/chamber/data/members.json');
    const data = await response.json();
    // console.table(data);
    //displayCards(data.companies); //references the array not just the overall (single) object.
    displayMembershipDetails(npID, data.np);
};

async function getDataBronze() {
    const response = await fetch('https://raw.githubusercontent.com/prestonakagi/wdd231/refs/heads/main/chamber/data/members.json');
    const data = await response.json();
    // console.table(data);
    //displayCards(data.companies); //references the array not just the overall (single) object.
    displayMembershipDetails(bronzeID, data.bronze);
};

async function getDataSilver() {
    const response = await fetch('https://raw.githubusercontent.com/prestonakagi/wdd231/refs/heads/main/chamber/data/members.json');
    const data = await response.json();
    // console.table(data);
    //displayCards(data.companies); //references the array not just the overall (single) object.
    displayMembershipDetails(silverID, data.silver);
};

async function getDataGold() {
    const response = await fetch('https://raw.githubusercontent.com/prestonakagi/wdd231/refs/heads/main/chamber/data/members.json');
    const data = await response.json();
    // console.table(data);
    //displayCards(data.companies); //references the array not just the overall (single) object.
    displayMembershipDetails(goldID, data.gold);
};

// look at prophets API assignment for anything else in the getData() function.

// getData();


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
buttonThree.classList.add('wayfinder');

buttonThree.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/chamber/join.html';
});

const buttonFour = document.getElementById("button4");

buttonFour.addEventListener('click', function() {
    window.location.href = '';
});

// display modal when click course button
// only way to close modal is to click top right X button
// for dialog windows

const npID = document.getElementById('np-modal');
const bronzeID = document.getElementById('bronze-modal');
const silverID = document.getElementById('silver-modal');
const goldID = document.getElementById('gold-modal');

// use .join(', ') for arrays of strings!
// need 1st arg for selected ID and 2nd arg = data.specific level.

function displayMembershipDetails(whichModal, memberLevel) {
//   whichModal.innerHTML = '';
  whichModal.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${memberLevel.name}</h2>
    <h3>Level: ${memberLevel.level}</h3>
    <p><strong>Publications</strong>: ${memberLevel.publications.join(', ')}</p>
    <p><strong>Social Media</strong>: ${memberLevel.socialMedia.join(', ')}</p>
    <p><strong>Luncheons</strong>: ${memberLevel.luncheons}</p>
    <p><strong>Number of Sponsorships</strong>: ${memberLevel.sponsorships}</p>
    <p><strong>Fee</strong>: $${memberLevel.fee} per month</p>
  `;
  whichModal.showModal();

  // To close the modal when click X button
    const closeButton = document.getElementById('closeModal');

  closeButton.addEventListener("click", () => {
    whichModal.close();
    // TODO: first modal can be closed, but 2nd modal opens but cannot be closed on click!
    // Actually kind of random which modal cannot be closed.
  });
}

const npButton = document.getElementById('np-button');
npButton.addEventListener("click", () => {
    getDataNp();
});

const bronzeButton = document.getElementById('bronze-button');
bronzeButton.addEventListener("click", () => {
    getDataBronze();
});

const silverButton = document.getElementById('silver-button');
silverButton.addEventListener("click", () => {
    getDataSilver();
});

const goldButton = document.getElementById('gold-button');
goldButton.addEventListener("click", () => {
    getDataGold();
});