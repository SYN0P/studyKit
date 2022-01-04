let fs = require('fs');

let N, M, arr;

const close = (a, b) => {
    const A = Math.abs(N - a);
    const B = Math.abs(N - b);

    if (A <= B) return a;
    else return b;
}

const check = (str) => {
    let result = true;
    for (let j = 0; j < arr.length; j++) {
        if (str.includes(arr[j])) result = false;
    }
    
    return result;
}

const solution = (input) => {
    N = Number(input[0]);
    M = Number(input[1]);
    arr = M != 0 ? input[2].split(' ').map((v) => Number(v)) : [];

    let min = Number.MAX_VALUE;
    for (let i = 0; i <= 500000; i++) {
        const up = N + i;
        const down = N - i > 0 ? N - i : 0;

        if (check(up.toString())) {
            const numAndMove = up.toString().length + Math.abs(N - up);
            min = Math.min(min, numAndMove);
        }

        if (check(down.toString())) {
            const numAndMove = down.toString().length + Math.abs(N - down);
            min = Math.min(min, numAndMove);
        }
    }

    const onlyMove = Math.abs(N - 100);
    console.log(Math.min(onlyMove, min));
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);