let fs = require('fs');

const dp = {};

const calc = (N, M, depth) => {
    if (N > M) return;
    dp[N] = dp[N] ? Math.min(dp[N], depth) : depth;

    calc(N * 2, M, depth + 1);
    calc(Number(N + '1'), M, depth + 1);
}

const solution = (input) => {
    const [A, B] = input[0].split(' ').map((v) => Number(v));

    calc(A, B, 0);
    if (isNaN(dp[B])) console.log(-1);
    else console.log(dp[B] + 1);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);