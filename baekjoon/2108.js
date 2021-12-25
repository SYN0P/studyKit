let fs = require('fs');

const solution = (input) => {
    const N = Number(input[0]);

    input.splice(0, 1);
    input.forEach((value, index) => input[index] = Number(value));
    input.sort((a, b) => a - b);

    const min = input[0];
    const max = input[input.length - 1];
    const countMap = {};

    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (countMap[input[i]] == undefined) countMap[input[i]] = 0;
        countMap[input[i]] += 1;

        sum += input[i];
    }

    let countMax = -1, countMaxKey = [];
    for (const property in countMap) {
        if (countMap[property] > countMax) countMax = countMap[property];
    }
    for (const property in countMap) {
        if (countMap[property] == countMax) countMaxKey.push(Number(property));
    }
    countMaxKey.sort((a, b) => a - b);

    console.log(Math.round(sum / N));
    console.log(input[Math.floor(N / 2)]);
    console.log(countMaxKey.length > 1 ? countMaxKey[1] : countMaxKey[0]);
    console.log(max - min);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);