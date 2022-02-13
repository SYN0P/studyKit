let fs = require('fs');

let max = 0;
let N, M;
const map = [], virus = [];

const spreadVirus = (map) => {
    const queue = [...virus];
    const visited = [];

    let index = 0;
    while (index < queue.length) {
        const current = queue[index++];
        
        if (visited[current.i * M + current.j] == true) continue;
        visited[current.i * M + current.j] = true;

        if (current.i - 1 >= 0 && map[current.i - 1][current.j] == 0) {
            queue.push({i: current.i - 1, j: current.j});
        }

        if (current.i + 1 < N && map[current.i + 1][current.j] == 0) {
            queue.push({i: current.i + 1, j: current.j});
        }

        if (current.j - 1 >= 0 && map[current.i][current.j - 1] == 0) {
            queue.push({i: current.i, j: current.j - 1});
        }

        if (current.j + 1 < M && map[current.i][current.j + 1] == 0) {
            queue.push({i: current.i, j: current.j + 1});
        }
    }

    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (map[i][j] == 0 && visited[i * M + j] != true) count++;
        }
    }

    max = Math.max(max, count);
}

const makeWall = (map, depth) => {
    if (depth == 3) {
        spreadVirus(map);
        return;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (map[i][j] != 0) continue;
            map[i][j] = 1;
            makeWall(map, depth + 1);
            map[i][j] = 0;
        }
    }
}

const solution = (input) => {
    [N, M] = input[0].split(' ').map((v) => Number(v));

    for (let i = 1; i < input.length; i++) {
        map[i - 1] = input[i].split(' ' ).map((v) => Number(v));
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (map[i][j] == 2) {
                virus.push({i, j});
            }
        }
    }

    makeWall(map, 0);
    console.log(max);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);