const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));

// format hidden type for timestamp
const dateObj = new Date(myInfo.get('timestamp'));
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedDate = dateObj.toLocaleString('en-US', options);


document.querySelector('#results').innerHTML = `
<p>${formattedDate}</p>
<p>Thank you, ${myInfo.get('first-name')} ${myInfo.get('last-name')} from ${myInfo.get('org-name')}, for joining the Draper Chamber of Commerce at the ${myInfo.get('membership-level')} membership level!</p>
<p>Your phone number is ${myInfo.get('phone')}.</p>
<p>Your email is ${myInfo.get('email')}.</p>`