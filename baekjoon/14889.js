let fs = require('fs');

let memberAmount = 0, min = Number.MAX_VALUE;
let map = [], teamA = [], teamB = [];

const getScore = (map, team) => {
    let score = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = 0; j < team.length; j++) {
            score += map[team[i]][team[j]];
        }
    }
    return score;
}

const go = (id) => {
    if (id == memberAmount) {
        if (teamA.length != memberAmount / 2) return;

        const scoreA = getScore(map, teamA);
        const scoreB = getScore(map, teamB);
        const diff = Math.abs(scoreA - scoreB);
        min = Math.min(min, diff);
        return;
    }

    teamA.push(id);
    go(id + 1);
    teamA.pop();

    teamB.push(id);
    go(id + 1);
    teamB.pop();
}

const solution = (input) => {
    memberAmount = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        map.push(input[i].split(' ').map((v) => Number(v)));
    }

    go(0);
    return min;
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = solution(input);
console.log(result);