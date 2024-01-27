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

function showResult(){
    const expression = equation.textContent;
    const regex = /(-?\d+(?:\.\d+)?)\s*([+\-\/x])\s*(-?\d+(?:\.\d+)?)/;

    const match = expression.match(regex);
    if (match) {
        const firstNumber = parseFloat(match[1]);
        const operator = match[2];
        const secondNumber = parseFloat(match[3]);
      
        const result = operate(operator, firstNumber, secondNumber)
        equation.textContent = result;
      } else {
        console.log("Invalid expression");
      }
}

function nestOperation(){
    const expression = equation.textContent;
    const regex = /(-?\d+(?:\.\d+)?)\s*([+\-\/x])\s*(-?\d+(?:\.\d+)?)/;

    const match = expression.match(regex);
    if (match) {
        const firstNumber = parseFloat(match[1]);
        const operator = match[2];
        const secondNumber = parseFloat(match[3]);
      
        const result = operate(operator, firstNumber, secondNumber)
        equation.textContent = result;
      } else {
        console.log("Invalid expression");
      }
}

const buttons = document.querySelectorAll('.calcu-btn');
const equation = document.querySelector('.equation');
const clearBtn = document.querySelector('.clear-btn');
const equalButton = document.querySelector('.equal-btn');
const operatorButtons = document.querySelectorAll('.operate-btn');

clearBtn.addEventListener('click', () => equation.textContent = "");
operatorButtons.forEach(button => {
    button.addEventListener('click', nestOperation);
})

function displayNum(event){
    const value = event.target.textContent;
    equation.textContent += value;
}

buttons.forEach(button => {
    button.addEventListener('click', displayNum)
});

equalButton.addEventListener('click', showResult)