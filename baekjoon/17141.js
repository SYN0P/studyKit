let fs = require('fs');

let min = Number.MAX_VALUE;
let N, M, saftyZoneCount = 0;
const map = [], virus = [];

const spreadVirus = (map) => {
    const queue = [...virus];
    const visited = [];

    let index = 0, time = 0, count = 0;
    while (index < queue.length) {
        const current = queue[index++];
        
        if (visited[current.i * N + current.j] != undefined) continue;
        visited[current.i * N + current.j] = current.t;
        time = Math.max(time, current.t);
        count++;

        if (current.i - 1 >= 0 && (map[current.i - 1][current.j] == 0 || map[current.i - 1][current.j] == 2)) {
            queue.push({i: current.i - 1, j: current.j, t: current.t + 1});
        }

        if (current.i + 1 < N && (map[current.i + 1][current.j] == 0 || map[current.i + 1][current.j] == 2)) {
            queue.push({i: current.i + 1, j: current.j, t: current.t + 1});
        }

        if (current.j - 1 >= 0 && (map[current.i][current.j - 1] == 0 || map[current.i][current.j - 1] == 2)) {
            queue.push({i: current.i, j: current.j - 1, t: current.t + 1});
        }

        if (current.j + 1 < N && (map[current.i][current.j + 1] == 0 || map[current.i][current.j + 1] == 2)) {
            queue.push({i: current.i, j: current.j + 1, t: current.t + 1});
        }
    }

    if (count < saftyZoneCount) time = Number.MAX_VALUE;
    min = Math.min(min, time);
}

const makeVirus = (map, M, depth) => {
    if (depth == M) {
        spreadVirus(map);
        return;
    }

    for (let k = virus.length > 0 ? virus[virus.length - 1].i * N + virus[virus.length - 1].j : 0; k < N * N; k++) {
        const i = Math.floor(k / N);
        const j = k % N;
        if (map[i][j] != 2) continue;
        map[i][j] = 3;
        virus.push({i, j, t: 0});
        makeVirus(map, M, depth + 1);
        map[i][j] = 2;
        virus.pop();
    }
}

const solution = (input) => {
    [N, M] = input[0].split(' ').map((v) => Number(v));

    for (let i = 1; i < input.length; i++) {
        map[i - 1] = input[i].split(' ' ).map((v) => Number(v));
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (map[i][j] == 0 || map[i][j] == 2) saftyZoneCount++;
        }
    }

    makeVirus(map, M, 0);

    if (min == Number.MAX_VALUE) console.log(-1);
    else console.log(min);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);