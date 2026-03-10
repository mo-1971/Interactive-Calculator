let currentInput = '0';
let shouldResetDisplay = false;

function resetDisplayIfNeeded() {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
}

function handleNumber(numberStr) {
    resetDisplayIfNeeded();
    if (currentInput === '0') {
        currentInput = numberStr;
    } else {
        currentInput += numberStr;
    }
}

function handleDecimal() {
    resetDisplayIfNeeded();
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
}

// Test 1: Number on start
currentInput = '0'; shouldResetDisplay = false;
handleNumber('7');
console.log("Test 1:", currentInput === '7');

// Test 2: Number after operator
currentInput = '5'; shouldResetDisplay = true;
handleNumber('3');
console.log("Test 2:", currentInput === '3');

// Test 3: Decimal on start
currentInput = '0'; shouldResetDisplay = false;
handleDecimal();
console.log("Test 3:", currentInput === '0.');

// Test 4: Decimal after operator
currentInput = '5'; shouldResetDisplay = true;
handleDecimal();
console.log("Test 4:", currentInput === '0.');

// Test 5: Number after decimal
currentInput = '0.'; shouldResetDisplay = false;
handleNumber('5');
console.log("Test 5:", currentInput === '0.5');

// Test 6: Decimal when already decimal
currentInput = '0.5'; shouldResetDisplay = false;
handleDecimal();
console.log("Test 6:", currentInput === '0.5');
