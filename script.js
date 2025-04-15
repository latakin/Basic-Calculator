const display = document.getElementById('display')
function appendToDisplay(key) {
    display.value += key
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