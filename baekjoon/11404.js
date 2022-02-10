let fs = require('fs');

const solution = (input) => {
    const N = Number(input[0]);
    const M = Number(input[1]);
    
    let map = [];
    for (let i = 0; i <= N; i++) {
        map[i] = [];
        for (let j = 0; j <= N; j++) {
            if (i == j) map[i][j] = 0;
            else map[i][j] = Number.MAX_VALUE; 
        }
    }

    for (let i = 0; i < M; i++) {
        const [a, b, c] = input[i + 2].split(' ').map((v) => Number(v));
        map[a][b] = Math.min(map[a][b], c);
    }

    for (let k = 0; k <= N; k++) {
        for (let i = 0; i <= N; i++) {
            for (let j = 0; j <= N; j++) {
                const waypointCost = map[i][k] + map[k][j];
                const directCost = map[i][j];

                map[i][j] = Math.min(waypointCost, directCost);
            }
        }
    }

    let result = '';
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (map[i][j] == Number.MAX_VALUE) result += '0' + ' ';
            else result += map[i][j] + ' ';
        }
        result += '\n';
    }

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);