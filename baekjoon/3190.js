let fs = require('fs');

const direction = {
    0: {i: -1, j: 0},
    1: {i: 0, j: 1},
    2: {i: 1, j: 0},
    3: {i: 0, j: -1}
}

const isOver = (i, j, N, snake, tail) => {
    if (i < 1 || i > N) return true;
    if (j < 1 || j > N) return true;

    for (let k = tail; k < snake.length - 1; k++) {
        if (i == snake[k].i && j == snake[k].j) return true;
    }

    return false;
}

const move = (i, j, d) => {
    return {i: i + direction[d]['i'], j: j + direction[d]['j'], d};
}

const play = (N, map, timeline) => {
    const snake = [{i: 1, j: 1, d: 1}];
    let time = 1, tail = 0;

    while (true) {
        const head = snake[snake.length - 1];
        const next = move(head.i, head.j, head.d);
        snake.push(next);

        if (isOver(next.i, next.j, N, snake, tail)) break;

        if(map[next.i] && map[next.i][next.j] == true) map[next.i][next.j] = false;
        else tail++;

        if (timeline[time] == 'L') next.d = next.d <= 0 ? 3 : next.d - 1; 
        else if (timeline[time] == 'D') next.d = (next.d + 1) % 4;

        time++;
    }

    console.log(time);
}

const solution = (input) => {
    const N = Number(input[0]);

    const K = Number(input[1]);
    const map = {};
    for (let i = 0; i < K; i++) {
        const [x, y] = input[2 + i].split(' ').map((v) => Number(v));
        if (map[x] == undefined) map[x] = {};
        if (map[x][y] == undefined) map[x][y] = true;
    }

    const L = Number(input[2 + K]);
    const timeline = {};
    for (let i = 0; i < L; i++) {
        const [time, direction] = input[3 + K + i].split(' ');
        timeline[Number(time)] = direction;
    }

    play(N, map, timeline);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);