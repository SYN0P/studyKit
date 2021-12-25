let fs = require('fs');

function solution(a, b) {
    let before = 0, after = 0, sum = 0;
    for (let i = 1; i < 1000; i++) {
        before = after + 1;
        after += i;

        const start = Math.max(before, a);
        const end = Math.min(after, b);
        
        if (after < a) continue;
        if (before > b) break;

        const diff = end - start + 1;
        if (diff > 0) {
            sum += (diff * i);
        }
    }
    return sum;
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(' ').map((v) => Number(v));
const result = solution(...input);
console.log(result);