// variables 

let op1 = '';
let op2 = '';
let currentOperation = null;
let resetScreen = false;

const numBtn = document.querySelectorAll('[data-number]');
const opBtn = document.querySelectorAll('[data-operator]');
const equalBtn = document.getElementById('equals');
const pointBtn = document.getElementById('.');
const deleteBtn = document.getElementById('backSpace');
const clearBtn = document.getElementById('allClear');
const signBtn = document.getElementById('+/-');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');

// eventListeners
window.addEventListener('keydown', keyboardInput);
equalBtn.addEventListener('click', evaluate);
pointBtn.addEventListener('click', addPoint);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNum);
signBtn.addEventListener('click', addNegative);

numBtn.forEach((btn) => {
    btn.addEventListener('click', () =>
    addNumber(btn.textContent));
});

opBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        setOperation(btn.textContent);
    });
});

function addNumber(num) {
    if (bottomText.textContent === '0' || resetScreen) {
        reset();
    }
    bottomText.textContent += num;
}

function reset() {
    bottomText.textContent = "";
    resetScreen = false;
}

function clear() {
    bottomText.textContent =  '0';
    topText.textContent = "";
    op1 =  "";
    op2 = "";
    currentOperation = null;
}

function addPoint() {
    if (resetScreen) {
        reset();
    } 
    if (bottomText.textContent === ""){
        bottomText.textContent = '0';
    } else if (bottomText.textContent.includes('.')){
        return
    }
    bottomText.textContent += '.'
}

function deleteNum() {
    bottomText.textContent = bottomText.textContent
    .toString()
    .slice(0, -1);
}

function addNegative() {
    if (resetScreen) {
        reset();
    } 
    
    if (bottomText.textContent.includes('-')){
        bottomText.textContent = bottomText.textContent.substring(1);
        return bottomText.textContent;
    }
    bottomText.textContent = '-' + bottomText.textContent;
}

function setOperation(operator) {
    if (currentOperation !== null) {
        evaluate();
    }
    op1 = bottomText.textContent;
    currentOperation = operator;
    topText.textContent = `${op1} ${currentOperation}`;
    resetScreen = true;
}

function evaluate() {
    if (currentOperation === null || resetScreen) {
        return
    }
    if (currentOperation === '÷' && bottomText.textContent === '0'){
        alert("You can't divide by 0!")
        bottomText.textContent = 'Infinity';
        return;
    }
    op2 = bottomText.textContent;
    bottomText.textContent = result(operate(currentOperation, op1, op2));
    topText.textContent = `${op1} ${currentOperation} ${op2} =`
    currentOperation = null;
}

function result(num) {
    return Math.round(num * 1000000) / 1000000;
}

// for recognizing keyboard input
function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) addNumber(e.key)
  if (e.key === '.') addPoint()
  if (e.key === '=' || e.key === 'Enter') evaluate()
  if (e.key === 'Backspace') deleteNum()
  if (e.key === 'Escape') clear()
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    setOperation(convert(e.key))
}

function convert(keyboardOperator) {
  if (keyboardOperator === '/') return '÷'
  if (keyboardOperator === '*') return 'x'
  if (keyboardOperator === '-') return '-'
  if (keyboardOperator === '+') return '+'
}

function add(a, b) {
    return a + b;
}
  
function subtract(a, b) {
    return a - b;
}
  
function multiply(a, b) {
    return a * b;
}
  
function divide(a, b) {
    return a / b;
}
  
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '-':
        return subtract(a, b)
      case 'x':
        return multiply(a, b)
      case '÷':
        if(b === 0){
            return null
        }else return divide(a, b)
      default:
        return null
    }
}