/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Okocha Amos Mba";
console.log(`fullName : ${fullName}`);

var currentYear = new Date();
console.log(`Current year : ${currentYear}`);

let profilePicture = "images/placeholder.jpg";
console.log(`${profilePicture}`);

const favoriteFood = ["Rice",  "Eba",  "Plantain Poridge",  "fish Pepper Soup", ];
console.log(`Favorite Food : ${favoriteFood}`);

const mawize = favoriteFood.push("Ofe Nsala", "Chicken & Chips");
console.log(mawize);
console.log(favoriteFood);

const flesh = favoriteFood.pop();
console.log(flesh);
console.log(favoriteFood)

const abu = favoriteFood.shift();
console.log(abu);
console.log(favoriteFood)




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

foodElement.innerHTML = `<br>${favoriteFood}`;



imageElement.setAttribute("src", "images/placeholder.jpg", alt = "Profile Picture");







/* Step 4 - Adding Content */







/* Step 5 - Array */






