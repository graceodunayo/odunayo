let display = document.getElementById('display');

function addValue(value) {
    if (value === 'PI') {
        display.value += Math.PI;
    } else if (value === 'E') {
        display.value += Math.E;
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        let result = eval(
            display.value
                .replace(/\^/g, '**')
                .replace(/sin\(/g, 'Math.sin(')
                .replace(/cos\(/g, 'Math.cos(')
                .replace(/tan\(/g, 'Math.tan(')
                .replace(/log\(/g, 'Math.log10(')
                .replace(/sqrt\(/g, 'Math.sqrt(')
        );
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}
