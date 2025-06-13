// import {apiFetchRules} from '../data/parse-json.mjs'
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


// top navigation buttons on click to go to respective link AND put wayfinder.

const buttonOne = document.getElementById("button1");

buttonOne.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/final';
});

const buttonTwo = document.getElementById("button2");
buttonTwo.classList.add('wayfinder');

buttonTwo.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/final/rules.html';
});

const buttonThree = document.getElementById("button3");

buttonThree.addEventListener('click', function() {
    window.location.href = 'https://prestonakagi.github.io/wdd231/final/shred.html';
});


// Below is for this page's modules' code

