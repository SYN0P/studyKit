let fs = require('fs');

const run = (p, n, arr) => {
    let isReverse = false;

    for (let i = 0; i < p.length; i++) {
        if (p[i] == 'R') {
            isReverse = !isReverse;
        } else if (p[i] == 'D') {
            if (arr.length <= 0) {
                console.log('error');
                return;
            }

            if (isReverse) {
                arr.pop();
            } else {
                arr.shift();
            }
        }
    }

    if (isReverse) {
        console.log(`[${arr.reverse().join(',')}]`);
    } else {
        console.log(`[${arr.join(',')}]`);
    }
}

const solution = (input) => {
    const T = Number(input[0]);
    input.splice(0, 1);

    for (let i = 0; i < T; i++) {
        const p = input[i * 3];
        const n = Number(input[(i * 3) + 1]);
        const arr = input[(i * 3) + 2] == '[]' ? [] : input[(i * 3) + 2].replace('[', '').replace(']', '').split(',');    
        run(p, n, arr);
    }
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);