document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    let currentInput = '0';
    let previousInput = null;
    let operator = null;
    let shouldResetDisplay = false;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function handleNumber(numberStr) {
        if (currentInput === '0' || shouldResetDisplay) {
            currentInput = numberStr;
            shouldResetDisplay = false;
        } else {
            currentInput += numberStr;
        }
        updateDisplay();
    }

    function handleOperator(op) {
        if (operator !== null) {
            calculateResult();
        }
        previousInput = currentInput;
        operator = op;
        shouldResetDisplay = true;
    }

    function calculateResult() {
        if (operator === null || previousInput === null) return;
        
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    result = 'Error';
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        operator = null;
        previousInput = null;
        updateDisplay();
        shouldResetDisplay = true; // reset on next number
    }

    function handleClear() {
        currentInput = '0';
        previousInput = null;
        operator = null;
        shouldResetDisplay = false;
        updateDisplay();
    }

    function handleDecimal() {
        if (shouldResetDisplay) {
            currentInput = '0.';
            shouldResetDisplay = false;
        } else if (!currentInput.includes('.')) {
            currentInput += '.';
        }
        updateDisplay();
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            
            if (button.classList.contains('btn-number')) {
                if (buttonText === '.') {
                    handleDecimal();
                } else {
                    handleNumber(buttonText);
                }
            } else if (button.classList.contains('btn-operator')) {
                handleOperator(buttonText);
            } else if (button.classList.contains('btn-equal')) {
                calculateResult();
            } else if (button.classList.contains('btn-clear')) {
                handleClear();
            }
        });
    });
});
