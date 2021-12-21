let fs = require('fs');

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => Math.floor(a / b); 

const calc = (func, a, b) => func(a, b);

const solution = (input) => {
    let result = 0;
    let operator = null;

    input.forEach((el) => {
        if (isNaN(el)) {
            operator = el;
            return;
        }

        const num = Number(el);
        switch(operator) {
            case '+': 
                result = calc(add, result, num);
                break;
            case '-':
                result = calc(substract, result, num);
                break;
            case '*':
                result = calc(multiply, result, num);
                break;
            case '/':
                result = calc(divide, result, num);
                break;
            case '=':
                break;
            default:
                result = num;
                break;
        }
    });

    return result;
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = solution(input);
console.log(result);