let fs = require('fs');

const priority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '(': 3,
    ')': 3,
}

const solution = (input) => {
    const str = input[0];
    const operandStack = [];
    const operandList = Object.keys(priority);

    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (operandList.includes(str[i])) {
            if (str[i] == ')') {
                while (operandStack.length > 0 && operandStack[operandStack.length - 1] != '(') {
                    result += operandStack.pop();
                }
                operandStack.pop();
            } else {
                while (operandStack.length > 0 && operandStack[operandStack.length - 1] != '(' && priority[operandStack[operandStack.length - 1]] >= priority[str[i]]) {
                    result += operandStack.pop();
                }
                operandStack.push(str[i]);
            }
        } else {
            result += str[i];
        }
    }

    while (operandStack.length > 0) {
        result += operandStack.pop();
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);