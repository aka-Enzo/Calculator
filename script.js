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

console.log(operate(subtraction, 300, 50000000));