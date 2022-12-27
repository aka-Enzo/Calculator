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




// store the first number that user presses into the calculator.
// and also save which operator has been chosen and then operate() on them 
// when = is pressed.








