let fs = require('fs');

const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if ((num / i) % 1 === 0) return false;
    }
    return true;
}

const solution = (input) => {
    input = input.map((v) => Number(v));
    for (let i = 0; i < input.length - 1; i++) {
        let count = 0;
        for (let j = input[i] + 1; j <= input[i] * 2; j++) {
            if (isPrime(j)) count++;
        }
        console.log(count);
    }
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);