let fs = require('fs');

const solution = (input) => {
    const N = Number(input[0]);
    const dp = [0, 1, 3];
    for (let i = 3; i <= N; i++) {
        dp[i] = (dp[i-1] + (dp[i-2] * 2)) % 10007;
    }

    console.log(dp[N]);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);