let fs = require('fs');

let N, arr;
let max = [], seq = [];

const simulation = (index, move, point) => {
    index += move;
    if (index >= N) return;
    if (seq[seq.length - 2] == index - 2 && seq[seq.length - 1] == index - 1) return;

    point += arr[index];
    if (point < max[move - 1][index]) return;
    max[move - 1][index] = point;

    seq.push(index);
    simulation(index, 1, point);
    simulation(index, 2, point);
    seq.pop();
}

const solution = (input) => {
    N = Number(input[0]);
    input.splice(0, 1);
    arr = input.map((v) => Number(v));
    max[0] = input.map(() => 0);
    max[1] = input.map(() => 0);

    simulation(-1, 1, 0);
    simulation(-1, 2, 0);
    console.log(Math.max(max[0][N-1], max[1][N-1]));
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);