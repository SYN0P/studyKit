let fs = require('fs');

const solution = (input) => {
    const num = input[1].split(' ').map((v) => Number(v));
    
    const sum = [0];
    for (let i = 1; i <= num.length; i++) {
        sum[i] = sum[i - 1] + num[i - 1];
    }

    let result = '';
    for (let i = 2; i < input.length; i++) {
        const [x, y] = input[i].split(' ').map((v) => Number(v));
        result += (sum[y] - sum[x - 1]) + '\n';
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);