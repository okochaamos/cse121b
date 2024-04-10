/* W05: Programming Tasks */

/* Declare and initialize global variables */

let templeList;
let templeDiv = "";

/* async displayTemples Function */

function displayTemples(temples){
    const templesDiv = document.getElementById("temples");
    templesDiv.innerHTML = "<ol>";
    temples.forEach((temple) => {
        templesDiv.innerHTML += `<li>${temple.templeName}</li>`
        
    });
    temples.innerHTML = "</ol>";

}

displayTemples();


/* async getTemples Function using fetch()*/
async function getTemples(){
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templeList = await response.json();
    console.log(templeList)
    displayTemples(templeList);
    
}

/* reset Function */


/* filterTemples Function */




getTemples();

/* Event Listener */
