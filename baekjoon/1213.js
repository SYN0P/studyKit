let fs = require('fs');

function solution(input) {
    const array = input.split('').sort();
    const solo = [];
    const result = [];

    while (array.length > 0) {
        if (array[0] === array[1]) {
            result.push(array[0]);
            array.splice(0, 2);
        } else {
            solo.push(array[0]);
            array.splice(0, 1);
        }
    }

    if (solo.length <= 1) {
        return result.join('') + (solo[0] || '') + result.reverse().join('');
    } else {
        return `I'm Sorry Hansoo`;
    } 
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
const result = solution(input);
console.log(result);