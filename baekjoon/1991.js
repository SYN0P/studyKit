let fs = require('fs');

let preorder = '';
let inorder = '';
let postorder = '';

const dfs = (tree, index) => {
    if (tree[index] == undefined) return;
    const str = String.fromCharCode(index + 'A'.charCodeAt());

    preorder += str;
    if (tree[index]['left'] != '.'.charCodeAt()) dfs(tree, tree[index]['left']);
    inorder += str;
    if (tree[index]['right'] != '.'.charCodeAt()) dfs(tree, tree[index]['right']);
    postorder += str;
}

const solution = (input) => {
    const N = Number(input[0]);
    const tree = [];

    for (let i = 1; i < input.length; i++) {
        const [a, b, c] = input[i].split(' ').map((v) => v.charCodeAt() - 'A'.charCodeAt());
        tree[a] = {left: b, right: c};
    }

    dfs(tree, 0);
    console.log(`${preorder}\n${inorder}\n${postorder}`);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);