let fs = require('fs');

const solution = (input) => {
    const [N, M] = input[0].split(' ').map((v) => Number(v));
    
    const dic = {};
    for (let i = 1; i <= N; i++) {
        const data = input[i].split(' ');
        dic[data[0]] = data[1];
    }

    let result = '';
    for (let i = N + 1; i <= N + M; i++) {
        result += (dic[input[i]] + '\n');
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);