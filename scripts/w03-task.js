/* LESSON 3 - Programming Tasks */




/* FUNCTIONS */
/* Function Definition - Add Numbers */



function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    var addNumber1 = Number(document.querySelector('#add1').value);
    var addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
    
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    var subtractNumbers1 = Number(document.querySelector('#subtract1').value);
    var subtractNumbers2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumbers1, subtractNumbers2);


}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2){
    return number1 * number2;
}

function multiplyNumbers() {
    let multiplyNumbers1 = Number(document.querySelector('#factor1').value);
    let multiplyNumbers2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumbers1, multiplyNumbers2);
    
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



function divide (number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    var divideNumber1 = Number(document.querySelector('#dividend').value);
    var divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
    
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);




document.getElementById('getTotal').addEventListener('click', function(){
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var membership = document.getElementById('member').checked;
    var total = membership ? subtotal * 0.2 : subtotal;

    document.getElementById('total').textContent = `$ ${total.tofixed(2)}`;
});

document.querySelector('#getTotal').addEventListener('click', getTotal);


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */

let myArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
const arrayElement = document.getElementById('array');
console.log(`array: ${myArrays}`);

document.querySelector('#array').innerHTML = myArrays


/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = myArrays.filter(numbers => numbers % 2 === 1);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = myArrays.filter(numbers => numbers % 2 === 0);


/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = myArrays.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = myArrays.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = (myArrays.reduce((sum, number) => sum + number) * 2);