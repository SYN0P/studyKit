let fs = require('fs');

// i 위치에서 세로 블럭이 오거나, 가로 블럭이 끝나야함
// 세로 블럭이 오면, (i-1) 위치까지의 경우의 수
// 가로 블럭이 끝나면, (i-1) 위치에서 가로 블럭이 시작했으므로 (i-2) 위치까지의 경우의 수
// i 위치에서의 경우의 수 = 둘의 합

const solution = (input) => {
    const N = Number(input[0]);
    const dp = [0, 1, 2, 3, 5];
    for (let i = 5; i <= N; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 10007;
    }

    console.log(dp[N]);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);