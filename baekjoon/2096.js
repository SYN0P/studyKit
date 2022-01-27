// 이 문제는 현재 Node.js로 풀 수 없음

let fs = require('fs');

const solution = (input) => {
    const N = Number(input[0]);

    let max = input[1].split(' ').map((v) => Number(v));
    let min = input[1].split(' ').map((v) => Number(v));
    for (let i = 2; i < input.length; i++) {
        const map = input[i].split(' ').map((v) => Number(v));

        const maxA = Math.max(max[0], max[1]);
        const maxB = Math.max(...max);
        const maxC = Math.max(max[1], max[2]);
        max = [maxA + map[0], maxB + map[1], maxC + map[2]];

        const minA = Math.min(min[0], min[1]);
        const minB = Math.min(...min);
        const minC = Math.min(min[1], min[2]);
        min = [minA + map[0], minB + map[1], minC + map[2]];
    }

    console.log(`${Math.max(...max)} ${Math.min(...min)}`);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);