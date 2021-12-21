let fs = require('fs');

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b; 

const calc = (func, a, b) => func(a, b);
const pop = (arr) => [arr.pop(), arr.pop()].reverse();

const solution = (input) => {
    const operand = input.slice(2);
    const arr = input[1].split('');
    
    const stack = [];
    arr.forEach((el) => {
        switch(el) {
            case '+': 
                stack.push(calc(add, ...pop(stack))); 
                break;
            case '-':
                stack.push(calc(substract, ...pop(stack))); 
                break;
            case '*':
                stack.push(calc(multiply, ...pop(stack))); 
                break;
            case '/':
                stack.push(calc(divide, ...pop(stack))); 
                break;
            default:
                stack.push(Number(operand[el.charCodeAt() - 65]));
                break;
        }
    });

    return stack[0].toFixed(2);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = solution(input);
console.log(result);