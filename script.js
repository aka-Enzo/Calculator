// define html number elements
let button1 = document.getElementById('num1');
let button2 = document.getElementById('num2');
let button3 = document.getElementById('num3');
let button4 = document.getElementById('num4');
let button5 = document.getElementById('num5');
let button6 = document.getElementById('num6');
let button7 = document.getElementById('num7');
let button8 = document.getElementById('num8');
let button9 = document.getElementById('num9');
let button0 = document.getElementById('num0');

// operators
let allClear = document.getElementById('allClear');
let backSpace = document.getElementById('backSpace');
let addBtn = document.getElementById('+');
let subtractBtn = document.getElementById('-');
let multiplyBtn = document.getElementById('x');
let divideBtn = document.getElementById('/');
let pointBtn = document.getElementById('.');
let equalBtn = document.getElementById('=');
let negativeBtn = document.getElementById('+/-');
let topText = document.getElementById('topText');
let bottomText = document.getElementById('bottomText');

// define variables 
let defBottomNum = 0;
let isOperatorClicked = false;
let num1 = "";
let num2 = "";
let result = "";
let operator;



// create eventListeners for each buttons that shows on screen when clicked.

button0.addEventListener('click', btn0Clicked);
button1.addEventListener('click', btn1Clicked);
button2.addEventListener('click', btn2Clicked);
button3.addEventListener('click', btn3Clicked);
button4.addEventListener('click', btn4Clicked);
button5.addEventListener('click', btn5Clicked);
button6.addEventListener('click', btn6Clicked);
button7.addEventListener('click', btn7Clicked);
button8.addEventListener('click', btn8Clicked);
button9.addEventListener('click', btn9Clicked);
allClear.addEventListener('click', allClearClicked);
backSpace.addEventListener('click', backSpaceClicked);
addBtn.addEventListener('click', addBtnClicked);
subtractBtn.addEventListener('click', subBtnClicked);
multiplyBtn.addEventListener('click', multiBtnClicked);
divideBtn.addEventListener('click', divideBtnClicked);
pointBtn.addEventListener('click', pointBtnClicked);
equalBtn.addEventListener('click', equalBtnClicked);
negativeBtn.addEventListener('click', negBtnClicked);

// function for operators

function usedOperator(clickedOperator) {
    // prevents to click operators first
    if (num1 != ""){
        if (num2 == ""){
            switch(clickedOperator){
                case "+":
                    operator = "+";
                    break;
                case "-":
                    operator = "-";
                    break;
                case "x":
                    operator = "x";
                    break;
                case "/":
                    operator = '/';
                    break;
            }
            isOperatorClicked = true;
            document.getElementById('topText').innerText = num1 + " " + operator + " " + num2;
        }
        else if (num2 != "") {
            switch(clickedOperator){
                case "+":
                    operator = "+";
                    break;
                case "-":
                    operator = "-";
                    break;
                case "x":
                    operator = "x";
                    break;
                case "/":
                    operator = '/';
                    break;
            }
            num1 = result;
            result = "";
            num2 = "";
            document.getElementById('topText').innerText = num1 + " " + operator + " " + num2;
            document.getElementById('bottomText').innerText = "";
        }
    } 
}

// function for using operators on numbers

function operate() {
    switch(operator){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "x":
            result = multiply(num1, num2);
            break;
        case "/": 
            result = divide(num1, num2);
            result = Math.round(result*100000000)/100000000;
            break;
    }
    document.getElementById('topText').innerText = `${num1} ${operator} ${num2} =`;
    document.getElementById('bottomText').innerText = result;
}

// functions for number eventListeners

function btn0Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 0;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 0;
        document.getElementById('bottomText').innerText = num2;
    }
}

function btn1Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 1;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 1;
        document.getElementById('bottomText').innerText = num2;
    }
}

function btn2Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 2;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 2;
        document.getElementById('bottomText').innerText = num2;
    }
}

function btn3Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 3;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 3;
        document.getElementById('bottomText').innerText = num2;
    }
}

function btn4Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 4;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 4;
        document.getElementById('bottomText').innerText = num2;
    }
}

function btn5Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 5;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 5;
        document.getElementById('bottomText').innerText = num2;
    }
}

function btn6Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 6;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 6;
        document.getElementById('bottomText').innerText = num2;
    }
}

function btn7Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 7;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 7;
        document.getElementById('bottomText').innerText = num2;
    }
}

function btn8Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 8;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 8;
        document.getElementById('bottomText').innerText = num2;
    }
}

function btn9Clicked() {
    if(isOperatorClicked == false && num1.length < 12) {
        num1 += 9;
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true && num2.length < 12){
        num2 += 9;
        document.getElementById('bottomText').innerText = num2;
    }
}

// functions for operator eventListeners

function addBtnClicked() {
    usedOperator("+");
}

function subBtnClicked() {
    usedOperator("-");
}

function multiBtnClicked() {
    usedOperator("x");
}

function divideBtnClicked() {
    usedOperator("/");
}

function equalBtnClicked() {
    if(num2 == 0 && operator == "/"){
        document.getElementById('topText').innerText = 'Division By Zero';
        document.getElementById('bottomText').innerText = 'Infinity';
        num1 = "";
        num2 = "";
        result = "";
        isOperatorClicked = false;
    } else if(num2 != ""){
        operate();
    }
}

function pointBtnClicked() {
    if(isOperatorClicked == false){
        // checks to see if decimal has been clicked before
        if(num1.includes('.') == false) {
            num1 += ".";
            document.getElementById('bottomText').innerText = num1;
        }
    } else if(isOperatorClicked) {
        if(num2.includes('.') == false) {
            num2 += '.';
            document.getElementById('bottomText').innerText = num2;
        }
    }
}

function negBtnClicked() {
    let negative = "-";
    if(isOperatorClicked == false){
        if(num1.includes("-") == false){
            num1 = negative + num1; 
            document.getElementById('bottomText').innerText = num1;
        } else if(num1.includes('-') == true){
            num1 = num1.substring(1);
            document.getElementById('bottomText').innerText = num1;
        }
    } else if(isOperatorClicked == true){
        if(num2.includes('-') == false){
            num2 = negative + num2; 
            document.getElementById('bottomText').innerText = num2;
        } else if(num2.includes('-') == true){
            num2 = num2.substring(1);
            document.getElementById('bottomText').innerText = num2;
        }
    }
}

function backSpaceClicked(){
    if(isOperatorClicked == false){
        num1 = num1.slice(0, -1);
        document.getElementById('bottomText').innerText = num1;
    } else if(isOperatorClicked == true){
        num2 = num2.slice(0, -1);
        document.getElementById('bottomText').innerText = num2;
    }
}

function allClearClicked() {
    num1 = "";
    num2 = "";
    result = 0;
    isOperatorClicked = false;
    document.getElementById('topText').innerText = "";
    document.getElementById('bottomText').innerText = result;
}

function add(number1, number2)
{
    return parseFloat(number1) + parseFloat(number2);
}

function subtract(number1, number2)
{
    return number1 - number2;
}

function multiply(number1, number2)
{
    return number1 * number2;
}

function divide(number1, number2)
{
    return number1 / number2;
}