let fs = require('fs');

const party = {};
const knownPeople = [];

const dfs = (knownPerson) => {
    if (knownPeople[knownPerson] == true) return;
    knownPeople[knownPerson] = true;

    if (party[knownPerson]) {
        for (item of party[knownPerson]) {
            dfs(item);
        }
    }
}

const solution = (input) => {
    const [N, M] = input[0].split(' ').map((v) => Number(v));
    const known = input[1].split(' ').map((v) => Number(v));
    known.splice(0, 1);

    for (let i = 0; i < M; i++) {
        const members = input[2 + i].split(' ').map((v) => Number(v));
        for (let j = 1; j <= members[0]; j++) {
            for (let k = 1; k <= members[0]; k++) {
                if (party[members[j]] == undefined) party[members[j]] = new Set();
                if (members[j] != members[k]) party[members[j]].add(members[k]);
                
                if (party[members[k]] == undefined) party[members[k]] = new Set();
                if (members[k] != members[j]) party[members[k]].add(members[j]);
            }
        }
    }

    for (let i = 0; i < known.length; i++) {
        dfs(known[i]);
    }

    let count = 0;
    partyLoop:
    for (let i = 0; i < M; i++) {
        const members = input[2 + i].split(' ').map((v) => Number(v));
        for (let j = 1; j <= members[0]; j++) {
            if (knownPeople[members[j]] == true) continue partyLoop;
        }
        count++;
    }
    
    console.log(count);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);