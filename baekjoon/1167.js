let fs = require('fs');

let max = 0;

const dfs = (tree, index, visited) => {
    if (tree[index] == undefined) return -1;
    if (visited[index] == true) return -1;

    visited[index] = true;
    
    const weights = [0];
    for (let i = 0; i < tree[index].length; i++) {
        const weight = dfs(tree, tree[index][i]['index'], visited);
        if (weight >= 0) weights.push(weight + tree[index][i]['weight']);
    }
    
    weights.sort((a, b) => b - a);
    const weightByRoot = weights.length >= 2 ? weights[0] + weights[1] : 0;
    const weightByNode = Math.max(...weights);

    max = Math.max(max, weightByRoot, weightByNode);
    return weightByNode;
}

const solution = (input) => {
    const N = Number(input[0]);
    const tree = [];

    for (let i = 1; i < input.length; i++) {
        const data = input[i].split(' ').map((v) => Number(v));
        if (tree[data[0]] == undefined) tree[data[0]] = [];
        for (let j = 1; j < data.length - 1; j += 2) {
            tree[data[0]].push({index: data[j], weight: data[j + 1]});
        }
    }

    dfs(tree, 1, []);
    console.log(max);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);