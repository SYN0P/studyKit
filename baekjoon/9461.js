let fs = require('fs');

const arr = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
let result = '';

const solution = (input) => {
    const T = Number(input[0]);
    for (let i = 10; i <= 100; i++) {
        arr[i] = arr[i - 1] + arr[i - 5];
    }

    for (let i = 1; i <= T; i++) {
        const N = Number(input[i]);
        result += (arr[N] + '\n');
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);