function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function subtract(...numbers) {
    return numbers.reduce((result, num) => result - num);
}

function multiply(...numbers) {
    return numbers.reduce((product, num) => product * num);
}

function divide(...numbers) {
    return numbers.reduce((result, num) => result / num);
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid Operator"
    }
}


// Test the operate function
let result = operate("/", 5, 4);
console.log(`${result}`);
