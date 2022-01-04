let fs = require('fs');

const solution = (input) => {
    const N = Number(input[0]);

    let sum = 1, count = 0;
    for (let i = 1; i <= N; i++) {
        sum *= i;

        while(sum % 10 === 0) {
            sum /= 10;
            count++;
        }

        if (sum >= 1000000) {
            sum = sum % 1000000;
        }
    }

    console.log(count);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);