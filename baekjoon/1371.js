let fs = require('fs');

function solution(input) {
    const counter = {};
    input.forEach((element) => {
        if (element < 'a' || element > 'z') return;
        if (counter[element] == undefined) counter[element] = 0;
        counter[element] += 1;
    });

    const max = Math.max(...Object.values(counter));

    const result = [];
    for (const [key, value] of Object.entries(counter)) {
        if (value === max) result.push(key);
    }

    return result.sort().join('');
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const result = solution(input);
console.log(result);