let fs = require('fs');

const map = [];
const dice = {top: 0, bottom: 0, front: 0, back: 0, left: 0, right: 0};
let result = '';

const direction = {
    1: {ud: 0, lr: 1},
    2: {ud: 0, lr: -1},
    3: {ud: -1, lr: 0},
    4: {ud: 1, lr: 0},
}

const moveDice = (dir) => {
    if (dir == 1) {
        const target = dice.right;
        dice.right = dice.top;
        dice.top = dice.left;
        dice.left = dice.bottom;
        dice.bottom = target;
    } else if (dir == 2) {
        const target = dice.left;
        dice.left = dice.top;
        dice.top = dice.right;
        dice.right = dice.bottom;
        dice.bottom = target;
    } else if (dir == 3) {
        const target = dice.front;
        dice.front = dice.top;
        dice.top = dice.back;
        dice.back = dice.bottom;
        dice.bottom = target;
    } else if (dir == 4) {
        const target = dice.back;
        dice.back = dice.top;
        dice.top = dice.front;
        dice.front = dice.bottom;
        dice.bottom = target;
    }
}

const move = (N, M, x, y, dir) => {
    const [nextX, nextY] = [x + direction[dir]['ud'], y + direction[dir]['lr']];
    if (nextX < 0 || nextX >= N) return [x, y];
    else if (nextY < 0 || nextY >= M) return [x, y];

    moveDice(dir);
    if (map[nextX][nextY] == 0) {
        map[nextX][nextY] = dice.bottom;
    } else {
        dice.bottom = map[nextX][nextY];
        map[nextX][nextY] = 0;
    }

    result += dice.top + '\n';
    return [nextX, nextY];
}

const solution = (input) => {
    const [N, M, x, y, K] = input[0].split(' ').map((v) => Number(v));

    for (let i = 1; i <= N; i++) {
        map.push(input[i].split(' ').map((v) => Number(v)));
    }

    const command = input[N + 1].split(' ').map((v) => Number(v));
    let currentX = x, currentY = y;
    for (let i = 0; i < K; i++) {
        [currentX, currentY] = move(N, M, currentX, currentY, command[i]);
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);