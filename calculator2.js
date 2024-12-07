let firstNumber = null;
let secondNumber = null;
let operation = null;

let resultElem = document.getElementById('result');

function clickNumber(num) {
    let stringNum = String(num);

    if (operation === null) {
        // Building the first number
        firstNumber = firstNumber ? firstNumber + stringNum : stringNum;
        resultElem.innerText = firstNumber;
    } else {
        // Building the second number
        secondNumber = secondNumber ? secondNumber + stringNum : stringNum;
        resultElem.innerText = secondNumber;
    }
}

function clickOperator(op) {
    if (firstNumber !== null) {
        operation = op; // Set the operation only if the first number exists
    }
}

function showResult() {
    if (firstNumber !== null && secondNumber !== null && operation !== null) {
        let first = parseFloat(firstNumber);
        let second = parseFloat(secondNumber);
        let calculation = 0;

        switch (operation) {
            case '+':
                calculation = first + second;
                break;
            case '-':
                calculation = first - second;
                break;
            case '/':
                calculation = second !== 0 ? first / second : 'Error'; // Handle division by zero
                break;
            case '*':
                calculation = first * second;
                break;
        }

        clearResult(); // Reset the state for a new calculation
        if (calculation !== 'Error') {
            firstNumber = String(calculation); // Allow further operations with the result
        }
        resultElem.innerText = calculation;
    }
}

function clearResult() {
    firstNumber = null;
    secondNumber = null;
    operation = null;

    resultElem.innerText = '0'; // Display a default value when cleared
}