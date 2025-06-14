// for JSON on Github, need to use raw URL!
// https://raw.githubusercontent.com/prestonakagi/wdd231/refs/heads/main/final/data/ultimate-rules.json
const urlRules = 'https://raw.githubusercontent.com/prestonakagi/wdd231/refs/heads/main/final/data/ultimate-rules.json';

export async function apiFetchRules(whereAdd) {
    try {
        const response = await fetch(urlRules);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayRules(data, whereAdd); // uncomment when ready (this is from the learning activity)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

apiFetchRules();

const displayRules = (data, whereAdd) => {
    const olRulesList = document.createElement("ol");
    // Access the array and use forEach
    data.rules.forEach((rule) => {
        let point = document.createElement("li");
        point.textContent = `${rule}`;
        olRulesList.appendChild(point);
        whereAdd.appendChild(olRulesList);
    });
}