let fs = require('fs');

const solution = (input) => {
    const T = Number(input[0]);

    let idx = 1, result = '';
    for (let i = 1; i <= T; i++) {
        const N = Number(input[idx]);
        const map = {};
        for (let j = 1; j <= N; j++) {
            const [name, type] = input[idx + j].split(' ');
            if (map[type] == undefined) map[type] = 1;
            map[type] += 1;
        }
        result += (Object.values(map).reduce((prev, current) => prev * current, 1) - 1) + '\n';
        idx += N + 1;
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);