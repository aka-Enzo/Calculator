const result = document.querySelector('.result');
const numbers = document.querySelector('.digit');
const input = document.querySelector('.userInput');
const calculator = document.querySelector('.calculator');

let passedEqual = false; // to see if = is pressed
let displayValue = 0; // to calculate each operation in the background
let passedDecimal = ''; //to see if . is pressed once and only once

numbers.addEventListener('click', (e) => {
    const key = e.target;
    const keyValue = key.textContent;
    let display = input.textContent;
    const {type} = key.dataset;
    const {lastKeyType} = calculator.dataset;
});



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

function display() {
    
}
