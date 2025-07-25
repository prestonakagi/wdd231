const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('user-name'));
console.log(myInfo.get('user-email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('questions'));


// format hidden type for timestamp
const dateObj = new Date(myInfo.get('timestamp'));
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedDate = dateObj.toLocaleString('en-US', options);


document.querySelector('#results').innerHTML = `
<!--<p>${formattedDate}</p> saying "Invalid Date"-->
<p>Thank you, ${myInfo.get('user-name')}, for sending your questions about Ultimate Frisbee!</p>
<p>We will respond with answers as soon as possible.</p>
<p>Your phone number is ${myInfo.get('phone')}.</p>
<p>Your email is ${myInfo.get('user-email')}.</p>
<p>The questions you sent are the following:<br>${myInfo.get('questions')}</p>`

// store values to localStorage

// Get form values
// const name = document.getElementById('name').value;
// const email = document.getElementById('email').value;
// Save to localStorage
localStorage.setItem('name', myInfo.get('user-name'));
localStorage.setItem('phone', myInfo.get('phone'));
localStorage.setItem('email', myInfo.get('user-email'));
localStorage.setItem('questions', myInfo.get('questions'));
