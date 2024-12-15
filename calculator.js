const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let num1 = 0;
let num2;
let oper;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.dataset.number;
        const operator = button.dataset.operator;
        const action = button.dataset.action;

        if (number) {
            if (num1 === 0 & number === '0') {
                display.textContent = num1;
            }
            else if (num1 === 0 & number !== '0') {
                if (!oper) {
                    num1 = number;
                    display.textContent = num1;
                }
                else if (!num2) {
                    num2 = number;
                    display.textContent = `${num1} ${oper} ${num2}`;
                }
                else {
                    num2 = num2 + number;
                    display.textContent = `${num1} ${oper} ${num2}`;
                }
            }
            else if (num1 !== 0) {
                if (!num2 & !oper) {
                    if (number !== 0) {
                        num1 = num1 + number;
                    }
                    else if (number === 0) {

                    }
                    display.textContent = num1;
                }
                else if (!num2) {
                    num2 = number;
                    display.textContent = `${num1} ${oper} ${num2}`;
                }
                else {
                    num2 = num2 + number;
                    display.textContent = `${num1} ${oper} ${num2}`;
                }
            }
        }
        else if (operator) {
            if (!oper) {
                if (operator === 'add') {
                    oper = '+';
                    display.textContent = display.textContent + ' +';
                }
                else if (operator === 'subtract') {
                    oper = '-';
                    display.textContent = display.textContent + ' -';
                }
                else if (operator === 'multiply') {
                    oper = 'x';
                    display.textContent = display.textContent + ' x';
                }
                else if (operator === 'divide') {
                    oper = '÷';
                    display.textContent = display.textContent + ' ÷';
                }
            }
        }
        else if (action === 'clear') {
            num1 = 0, num2 = 0, oper = null;
            display.textContent = num1;
        }
        else if (action === 'calculate') {
            console.log("hello");
        }
    });
});