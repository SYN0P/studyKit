let fs = require('fs');

const solution = (input) => {
    const [N, K] = input[0].split(' ').map((v) => Number(v));
    
    const product = [[]];
    for (let i = 1; i <= N; i++) {
        product.push(input[i].split(' ').map((v) => Number(v)));
    }

    const dp = [];
    for (let i = 0; i <= N; i++) {
        dp[i] = [0];
    }
    for (let i = 0; i <= K; i++) {
        dp[0][i] = 0;
    }

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= K; j++) {
            const valueA = product[i][0] <= j ? dp[i - 1][j - product[i][0]] + product[i][1] : 0;
            const valueB = dp[i - 1][j];

            dp[i][j] = valueA > valueB ? valueA : valueB;
        }
    }

    console.log(dp[N][K]);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);