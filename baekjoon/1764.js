let fs = require('fs');

const solution = (input) => {
    const [N, M] = input[0].split(' ').map((v) => Number(v));
    const result = [];

    const dic = {};
    for (let i = 1; i <= N + M; i++) {
        if (dic[input[i]] == undefined) dic[input[i]] = 1;
        else dic[input[i]] += 1; 
    }

    const keys = Object.keys(dic);
    keys.forEach((key) => {
        if (dic[key] >= 2) result.push(key);
    });

    result.sort();
    console.log(result.length);
    console.log(result.join('\n'));
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);