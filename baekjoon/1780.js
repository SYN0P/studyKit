let fs = require('fs');

let N, arr = [];

const sum = (...areas) => {
    const result = {minus: 0, zero: 0, plus: 0, divided: false};
    areas.forEach((area) => {
        result.minus += area.minus;
        result.zero += area.zero;
        result.plus += area.plus;
        if (area.divided == true) result.divided = true;
    });
    return result;
}

const go = (pos, diameter) => {
    if (diameter == 1) {
        const [r, c] = [Math.floor(pos / N), pos % N];

        if (arr[r][c] == -1) return {minus: 1, zero: 0, plus: 0, divided: false};
        else if (arr[r][c] == 0) return {minus: 0, zero: 1, plus: 0, divided: false};
        else if (arr[r][c] == 1) return {minus: 0, zero: 0, plus: 1, divided: false};
    }

    const area = [
        go(pos, diameter / 3),
        go(pos + (diameter / 3), diameter / 3),
        go(pos + (diameter * 2 / 3), diameter / 3),
        go(pos + (N * diameter / 3), diameter / 3),
        go(pos + (N * diameter / 3) + (diameter / 3), diameter / 3),
        go(pos + (N * diameter / 3) + (diameter * 2 / 3), diameter / 3),
        go(pos + (N * diameter * 2 / 3), diameter / 3),
        go(pos + (N * diameter * 2 / 3)+ (diameter / 3), diameter / 3),
        go(pos + (N * diameter * 2 / 3)+ (diameter * 2 / 3), diameter / 3),
    ]

    const result = sum(...area);
    if (result.minus == 9 && result.zero == 0 && result.plus == 0 && result.divided == false) {
        result.minus = 1;
    } else if (result.minus == 0 && result.zero == 9 && result.plus == 0 && result.divided == false) {
        result.zero = 1;
    } else if (result.minus == 0 && result.zero == 0 && result.plus == 9 && result.divided == false) {
        result.plus = 1;
    } else {
        result.divided = true;
    }

    return result;
}

const solution = (input) => {
    N = Number(input[0]);

    for (let i = 1; i <= N; i++) {
        arr[i - 1] = input[i].split(' ').map((v) => Number(v));
    }

    const result = go(0, N);
    console.log(`${result.minus}\n${result.zero}\n${result.plus}`);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);