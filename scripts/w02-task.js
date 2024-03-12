/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Okocha Amos Mba";
console.log(`fullName : ${fullName}`);

var currentYear = new Date();
console.log(`Current year : ${currentYear}`);

let profilePicture = "images/placeholder.jpg";
console.log(`${profilePicture}`);

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

let imageElement = document.getElementById("home");

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.innerTextContent = `<strong>${currentYear}</strong>`;

imageElement.setAttribute("src", "images/placeholder.jpg");

const favoriteFood = ["rice",  "eba",  "yam",  "plantain poridge",  "fish pepper soup", "goatmeat pepper soup"];
console.log(`${favoriteFood}`);
const myFood = favoriteFood.push("edikan ikong soup", "oto");
console.log(`${myFood}`);

const latestFood = favoriteFood.pop();
console.log(`${latestFood}`);

const myLatestFood = favoriteFood.shift();
console.log(`${myLatestFood}`);

foodElement += `<br> ${favoriteFood}`;

foodElement += `<br>${favoriteFood}`;

foodElement.innerHTML = `<strong> ${favoriteFood}</strong>`










/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






