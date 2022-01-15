let fs = require('fs');

const solution = (input) => {
    const [A, B] = input[0].split(' ');
    const length = Math.max(A.length, B.length);

    let result = '', next = 0;
    for (let i = 1; i <= length; i++) {
        const a = Number(A[A.length - i]) || 0;
        const b = Number(B[B.length - i]) || 0;
        const sum = a + b + next;

        next = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    if (next > 0) result = next + result;
    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);