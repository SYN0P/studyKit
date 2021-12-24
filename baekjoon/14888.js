let fs = require('fs');

let N = 0, numbers = [], min = 1000000001, max = -1000000001;
let countSum = 0, countSub = 0, countMul = 0, countDiv = 0;

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a < 0 ? -parseInt(Math.abs(a) / b) : parseInt(a / b);

const go = (id, result, currentSum, currentSub, currentMul, currentDiv) => {
    if (id == numbers.length) {
        min = Math.min(min, result);
        max = Math.max(max, result);
        return;
    }

    if (currentSum < countSum) go(id + 1, sum(result, numbers[id]), currentSum + 1, currentSub, currentMul, currentDiv);
    if (currentSub < countSub) go(id + 1, sub(result, numbers[id]), currentSum, currentSub + 1, currentMul, currentDiv);
    if (currentMul < countMul) go(id + 1, mul(result, numbers[id]), currentSum, currentSub, currentMul + 1, currentDiv);
    if (currentDiv < countDiv) go(id + 1, div(result, numbers[id]), currentSum, currentSub, currentMul, currentDiv + 1);
}

const solution = (input) => {
    N = Number(input[0]);
    numbers = input[1].split(' ').map((v) => Number(v));
    [countSum, countSub, countMul, countDiv] = input[2].split(' ').map((v) => Number(v));

    go(1, numbers[0], 0, 0, 0, 0);
    console.log(max != 0 ? max : 0);
    console.log(min != 0 ? min : 0);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);