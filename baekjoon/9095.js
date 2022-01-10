let fs = require('fs');

let result = '';

const test = (N) => {
    const arr = [0, 1, 2, 4, 7];
    for (let i = 5; i <= N; i++) {
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
    }

    result += (arr[N] + '\n');
}

const solution = (input) => {
    const T = Number(input[0]);

    for (let i = 1; i <= T; i++) {
        test(Number(input[i]));
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);