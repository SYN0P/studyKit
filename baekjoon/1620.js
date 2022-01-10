let fs = require('fs');

const solution = (input) => {
    const [N, M] = input[0].split(' ').map((v) => Number(v));

    const numToName = {}, nameToNum = {};
    for (let i = 1; i <= N; i++) {
        numToName[i] = input[i];
        nameToNum[input[i]] = i;
    }

    let result = '';
    for (let i = N + 1; i <= N + M; i++) {
        if (numToName[input[i]]) result += (numToName[input[i]] + '\n');
        else if (nameToNum[input[i]]) result += (nameToNum[input[i]] + '\n');
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);