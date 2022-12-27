const result = document.querySelector('.result');
const numbers = document.querySelectorAll('.digits');
const input = document.querySelector('.userInput');
const calculator = document.querySelector('.calculator');

let isEqualPressed = false; // to see if = is pressed
let displayValue = 0; // to calculate each operation in the background
let isDecimalPressed = ''; //to see if . is pressed once and only once


// create evenListeners for each buttons that shows on screen when clicked.
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
         document.getElementById('userInput').innerHTML = e.target.value;
    })
})





// store the first number that user presses into the calculator.
// and also save which operator has been chosen and then operate() on them 
// when = is pressed.









// basic operators
function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    if (b == 0) {
        alert('You Can\'t Divide a Number By Zero!');
        return 'infinity';
    } else{
        return a / b;
    }
}

// function to call on numbers
function operate(func, a, b){
    if (func === addition){
        return addition(a, b);
    } else if (func === subtraction){
        return subtraction(a, b);
    } else if (func === multiplication){
        return multiplication (a, b);
    } else if (func === division){
        return division(a, b);
    }
}



