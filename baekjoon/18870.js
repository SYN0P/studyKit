let fs = require('fs');

const solution = (input) => {
    const arr = input[1].split(' ').map((v, i) => ({index: i + 1, value: Number(v)}));
    arr.sort((a, b) => a.value - b.value);

    let value = -Number.MAX_VALUE, compValue = -1;
    arr.forEach((pos) => {
        if (pos.value != value) {
            compValue += 1;
            value = pos.value;
        }
        pos.value = compValue;
    });

    let result = '';
    arr.sort((a, b) => a.index - b.index);
    arr.forEach((pos) => result += (pos.value + ' '));

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);