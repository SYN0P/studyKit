let fs = require('fs');

const direction = {
    0: {i: -1, j: 0},
    1: {i: 0, j: 1},
    2: {i: 1, j: 0},
    3: {i: 0, j: -1}
}

const map = [];
const cleaned = [];

const rotateLeft = (i, j, d) => {
    d = d <= 0 ? 3 : d - 1;
    return [i + direction[d]['i'], j + direction[d]['j'], d];
}

const moveBack = (i, j, d) => {
    d = (d + 2) % 4;
    return [i + direction[d]['i'], j + direction[d]['j'], d];
}

const clean = (i, j, d) => {
    cleanLoop:
    while (true) {
        cleaned[i][j] = true;

        rotateLoop:
        for (let k = 1; k <= 4; k++) {
            const [ri, rj, rd] = rotateLeft(i, j, d);
            if (map[ri][rj] == 0 && cleaned[ri][rj] == false) {
                i = ri;
                j = rj;
                d = rd;
                continue cleanLoop;
            } else {
                d = rd;
            }
        }

        const [bi, bj, bd] = moveBack(i, j, d);
        if (map[bi][bj] == 0) {
            i = bi;
            j = bj;
            continue cleanLoop;
        }

        break;
    }
}

const solution = (input) => {
    const [N, M] = input[0].split(' ').map((v) => Number(v));
    const [r, c, d] = input[1].split(' ').map((v) => Number(v));
    
    for (let i = 1; i <= N; i++) {
        map.push(input[i + 1].split(' ').map((v) => Number(v)));
        cleaned.push(input[i + 1].split(' ').map(() => false));
    }

    clean(r, c, d);

    const count = cleaned.reduce((prev, current) => {
        return prev + current.reduce((prev, current) => {
            return prev + (current ? 1 : 0);
        }, 0);
    }, 0);

    console.log(count);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);