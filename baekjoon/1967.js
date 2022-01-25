let fs = require('fs');

let max = 0;

const dfs = (tree, index) => {
    if (tree[index] == undefined) return 0;
    
    const weights = [0];
    for (let i = 0; i < tree[index].length; i++) {
        weights.push(dfs(tree, tree[index][i]['index']) + tree[index][i]['weight']);
    }
    
    weights.sort((a, b) => b - a);
    const weightByRoot = weights[0] + weights[1];
    const weightByNode = Math.max(...weights);

    max = Math.max(max, weightByRoot, weightByNode);
    return weightByNode;
}

const solution = (input) => {
    const N = Number(input[0]);
    const tree = [];

    for (let i = 1; i < input.length; i++) {
        const [a, b, c] = input[i].split(' ').map((v) => Number(v));
        if (tree[a] == undefined) tree[a] = [];
    
        tree[a].push({index: b, weight: c});
    }

    dfs(tree, 1);
    console.log(max);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);