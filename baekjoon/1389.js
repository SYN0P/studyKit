let fs = require('fs');

const user = {};

const compare = (a, b) => {
    if (a.depth == b.depth) return a.index - b.index;
    else return a.depth - b.depth;
}

const search = (userId, userDepth) => {
    const friendDepth = {};
    const queue = [{id: userId, depth: userDepth}];

    while (queue.length > 0) {
        const element = queue.shift();
        if (friendDepth[element.id] != undefined && element.depth > friendDepth[element.id]) continue;

        friendDepth[element.id] = element.depth;
        queue.push(...user[element.id].map((friendId) => ({id: friendId, depth: element.depth + 1})));
    }

    return Object.values(friendDepth).reduce((prev, cur) => prev + cur, 0);
}

const solution = (input) => {
    const [N, M] = input[0].split(' ').map((v) => Number(v));
    for (let i = 1; i <= M; i++) {
        const connection = input[i].split(' ').map((v) => Number(v));
        if (user[connection[0]] == undefined) user[connection[0]] = [];
        if (user[connection[1]] == undefined) user[connection[1]] = [];

        user[connection[0]].push(connection[1]);
        user[connection[1]].push(connection[0]);
    }

    let result = [];
    for (let i = 1; i <= N; i++) {
        result.push({id: i, depth: search(i, 0)});
    }

    result.sort(compare);
    console.log(result[0].id);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);