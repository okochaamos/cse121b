/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Okocha Amos Mba";
console.log(`fullName : ${fullName}`);

var currentYear = new Date();
console.log(`Current year : ${currentYear}`);

let profilePicture = "images/placeholder.jpg";
console.log(`${profilePicture}`);

const favoriteFood = ["rice",  "eba",  "yam",  "plantain poridge",  "fish pepper soup", "goatmeat pepper soup"];
console.log(`Favorite Food : ${favoriteFood}`)



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
console.log(`name: ${nameElement}`);

const foodElement = document.getElementById("food");
console.log(`foods : ${foodElement}`)

const yearElement = document.querySelector("#year");
console.log(`year : ${yearElement}`)

let imageElement = document.getElementById("home");
console.log(`home : ${imageElement}`)

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.innerTextContent = `<strong>${currentYear}</strong>`;

foodElement.innerHTML = `<strong>${favoriteFood}<strong>`



imageElement.setAttribute("src", "images/placeholder.jpg", alt = "Profile Picture");







/* Step 4 - Adding Content */








/* Step 5 - Array */






