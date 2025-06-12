// https://github.com/prestonakagi/wdd231/blob/main/final/data/ultimate-rules.json
const urlRules = 'https://github.com/prestonakagi/wdd231/blob/main/final/data/ultimate-rules.json';

async function apiFetchRules() {
    try {
        const response = await fetch(urlRules);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            //displayRules(data); // uncomment when ready (this is from the learning activity)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

apiFetchRules();

function displayRules(data) {
    const rulesList = document.createElement("ol");
    // Access the array and use forEach
    data.rules.forEach(rule => {
        let point = document.createElement("li");
        point.innerText = `${rule}`;
        rulesList.appendChild(point);
    });
}