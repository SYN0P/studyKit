let fs = require('fs');

const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if ((num / i) % 1 === 0) return false;
    }
    return true;
}

const solution = (input) => {
    const [M, N] = input.map((v) => Number(v));
    let sum = 0, min = -1;

    for (let i = Math.max(M, 2); i <= N; i++) {
        if (isPrime(i)) {
            sum += i;
            if (min === -1) min = i;
        }
    }

    if (min !== -1) console.log(sum);
    console.log(min);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);