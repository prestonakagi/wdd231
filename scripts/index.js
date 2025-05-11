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


// header picture and name
const myName = `Preston Akagi`;
const profile = {
    className: "logo",
    path: "images/profile.webp", 
    alternate: "Preston Akagi Profile Picture"
}

const banner = document.getElementById("pic-heading");
// create child elements of img and p
const picElement = document.createElement("img");
picElement.setAttribute("class", profile.className);
picElement.setAttribute("src", profile.path);
picElement.setAttribute("alt", profile.alternate);
const nameElement = document.createElement("p");
nameElement.innerText = myName;

banner.appendChild(picElement);
banner.appendChild(nameElement);


// Course Work content
const classes =[];


// Certificate courses array of objects of each subject
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// make list elements for completed course work

// // array with number of subjects in courses
// const numberOfSubjects = courses.length;
// const coursesIndexes = [];
// for (let i = 0; i < length; i++) {
//     coursesIndexes.push(i);
// }


// display all courses
const certificateDiv = document.querySelector('.classes-grid');
courses.forEach(course => {
    const certChild = document.createElement("p");
    if (course.completed) {
        certChild.innerText = `✔️ ${course.subject} ${course.number}`;
        certificateDiv.appendChild(certChild);
    } else {
        certChild.innerText = `${course.subject} ${course.number}`;
        certificateDiv.appendChild(certChild);
    }
    
  // show total number of credits of filtered courses
  const creditsElement = document.getElementById('credits');
  const creditCount = courses.reduce((accumulator, course) => { 
    return accumulator + course.credits;
   }, 0);
   
  creditsElement.innerText = `The total number of credits for the courses listed below is ${creditCount}.`;
});

// display filtered courses for WDD courses and CSE courses
// using buttons that listen for the click event.

// DOM event click response effect on nav menu options.

const allLink = document.getElementById('all-courses');
allLink.addEventListener('click', () => {
  while (certificateDiv.firstChild) {
    certificateDiv.removeChild(certificateDiv.firstChild);
    }
  courses.forEach(course => {
    const allChild = document.createElement("p");
    if (course.completed) {
        allChild.innerText = `✔️ ${course.subject} ${course.number}`;
        certificateDiv.appendChild(allChild);
    } else {
        allChild.innerText = `${course.subject} ${course.number}`;
        certificateDiv.appendChild(allChild);
    }
  });
  // show total number of credits of filtered courses
  const creditsElement = document.getElementById('credits');
  const creditCount = courses.reduce((accumulator, course) => { 
    return accumulator + course.credits;
   }, 0);
   
  creditsElement.innerText = `The total number of credits for the courses listed below is ${creditCount}.`;
});

const wddFilteredCourses = courses.filter((course) => course.subject == 'WDD');
const wddLink = document.getElementById('wdd-courses');
wddLink.addEventListener('click', () => {
  while (certificateDiv.firstChild) {
    certificateDiv.removeChild(certificateDiv.firstChild);
    }
  wddFilteredCourses.forEach(course => {
    const wddChild = document.createElement("p");
    if (course.completed) {
        wddChild.innerText = `✔️ ${course.subject} ${course.number}`;
        certificateDiv.appendChild(wddChild);
    } else {
        wddChild.innerText = `${course.subject} ${course.number}`;
        certificateDiv.appendChild(wddChild);
    }
  });
  // show total number of credits of filtered courses
  const creditsElement = document.getElementById('credits');
  const creditCount = wddFilteredCourses.reduce((accumulator, course) => { 
    return accumulator + course.credits;
   }, 0);
   
  creditsElement.innerText = `The total number of credits for the courses listed below is ${creditCount}.`;
});

const cseFilteredCourses = courses.filter((course) => course.subject == 'CSE');
const cseLink = document.getElementById('cse-courses');
cseLink.addEventListener('click', () => {
  while (certificateDiv.firstChild) {
    certificateDiv.removeChild(certificateDiv.firstChild);
    }
  cseFilteredCourses.forEach(course => {
    const cseChild = document.createElement("p");
    if (course.completed) {
        cseChild.innerText = `✔️ ${course.subject} ${course.number}`;
        certificateDiv.appendChild(cseChild);
    } else {
        cseChild.innerText = `${course.subject} ${course.number}`;
        certificateDiv.appendChild(cseChild);
    }
  });
  // show total number of credits of filtered courses
  const creditsElement = document.getElementById('credits');
  const creditCount = cseFilteredCourses.reduce((accumulator, course) => { 
    return accumulator + course.credits;
   }, 0);
   
  creditsElement.innerText = `The total number of credits for the courses listed below is ${creditCount}.`;
});


