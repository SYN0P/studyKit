let fs = require('fs');

const solution = (a, b) => {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        const numA = a[i].charCodeAt() - 'A'.charCodeAt();
        const numB = b[i].charCodeAt() - 'A'.charCodeAt();

        const diff = numB >= numA ? numB - numA : (numB + 26) - numA;
        result.push(diff);
    }
    console.log('Distances: ' + result.join(' '));
}

const run = (input) => {
    for (let i = 1; i < input.length; i++) {
        solution(...input[i].split(' ').map((v) => v.split('')));
    }
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = run(input);