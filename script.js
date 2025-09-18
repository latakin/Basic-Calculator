let currentNumber = "";
let previousNumber = "";
let operator = "";
let display = "";

function add(a,b) {
    return a + b;
}


function subtract(a,b) {
    if(b === 0) {
        return "syntax error"
    }
    return a - b;
}
function divide(a,b) {
    return a / b;
}
function multiply(a,b) {
    return a * b;
}

function calculate(previousNumber, currentNumber, operator ) {
    previousNumber = parseInt(previousNumber);
    currentNumber = parseInt(currentNumber);
    if(operator === '+') {
        return add(previousNumber,currentNumber);
    } else if(operator === '-') {
        return subtract(previousNumber, currentNumber);
    } else if (operator === '/') {
        return divide(previousNumber, currentNumber);
    } else if(operator === '*') {
        return multiply(previousNumber, currentNumber);
    }

}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

function clear() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    display = "0";
}

function handleNumberButton(digit) {
    if(digit ===  "." && currentNumber.includes('.')) {
        return;
    }

    currentNumber += digit;
    updateDisplay(currentNumber);
}

function handleoperatorButton(op) {
    if(!currentNumber &&  !previousNumbeer) {
        return;
    }
    
    if (currentNumber && previousNumber) {
        const result = calculate(previousNumber, currentNumber, operator);
        if (result === 'Error' ) {
            updateDisplay('Error');
            clear();
            return;
        }

        previousNumber =result;
        currentNumber = "";
        updateDisplay(result);

    } else if (currentNumber) {
        previousNumber = currentNumber;
        currentNumber = "";
    }


    operator = op;
}

function handleEqualsButton() {
    if (previousNumber && currentNumber && operator) {
        const result = calculate(previousNumber, currentNumber, operator);
        if(result == 'Error') {
            updateDisplay('Error');
            clear();
            return;
        }
        updateDisplay(result);
        previousNumber = result;
        currentNumber = "";
        operator = "";
    }
}

function handleClearButton() {
    clear();
    updateDisplay("0");
}


document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        handleNumberButton(button.textContent);
    })
})

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        handleoperatorButton(button.textContent);
    })
})

document.getElementById('equals').addEventListener('click', () => {
    handleEqualsButton();
})

document.getElementById('clear').addEventListener('click', () => {
    handleClearButton();
})

function handleBackspace() {
    if (currentNumber) {
        currentNumber = currentNumber.slice(0, -1);
        updateDisplay(currentNumber || "0")
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const backspace = document.getElementById('delete');
    if (backspace) {
        backspace.addEventListener('click', () => {
            handleBackspace();
        })
    } else {
        console.error('Backspace not found')
    }
})






/*
const display = document.getElementById('display');
const operators = document.querySelectorAll('.operator');
const addition = operators[0];
const subtraction = operators[1];
const division = operators[2];
const multiplication = operators[3]
function appendToDisplay(key) {
    display.value += key
}



function add(a,b) {
    addition.addEventListener('click', ()=> a + b)
    return a + b;
}


function subtract(a,b) {
     addition.addEventListener('click', ()=> a - b)
    return a - b;
}
function divide(a,b) {
     addition.addEventListener('click', ()=> a / b)
    return a / b;
}
function multiply(a,b) {
     addition.addEventListener('click', ()=> a * b)
    return a * b;
}

function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = 'syntax error'
    }
    

}

function clearKey() {
    display.value = "";
}

function delLastKey() {
    display.value = display.value.toString().slice(0, -1);
}

function percent() {
    try {
        display.value = eval(display.value) / 100
    }
    catch(error) {
        display.value = 'Math Error';
    }
    
} 
    */