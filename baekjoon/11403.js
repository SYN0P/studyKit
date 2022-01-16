let fs = require('fs');

const arr = [];
const connected = [];
let visited = [];

const dfs = (pos, routines) => {
    if (visited[pos] == true) return;

    if (routines.length > 0) visited[pos] = true;
    routines.forEach((routine) => connected[routine][pos] = 1);

    for (let i = 0; i < arr[pos].length; i++) {
        if (arr[pos][i] == 1) dfs(i, [...routines, pos]);
    }
}

const solution = (input) => {
    const N = Number(input[0]);

    for (let i = 0; i < N; i++) {
        arr[i] = input[i + 1].split(' ').map((v) => Number(v));
        connected[i] = input[i + 1].split(' ').map(() => 0);
    }

    for (let i = 0; i < N; i++) {
        visited = [];
        dfs(i, []);
    }

    let result = '';
    for (let i = 0; i < N; i++) {
        result += connected[i].join(' ') + '\n';
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);