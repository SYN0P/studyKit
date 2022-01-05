let fs = require('fs');

const heap = [];
let lastIndex = 0;
let result = '';

const getLeftChild = (index) => Math.floor(index * 2);
const getRightChild = (index) => Math.floor(index * 2 + 1);
const getParent = (index) => Math.floor(index / 2);

const push = (x) => {
    heap[++lastIndex] = x;

    let index = lastIndex;
    while (index > 0) {
        const parentIndex = getParent(index);
        if (parentIndex < 1) break;
    
        if (x > heap[parentIndex]) {
            heap[index] = heap[parentIndex];
            heap[parentIndex] = x;
            index = parentIndex;
        } else {
            break;
        }
    }
}

const pop = () => {
    if (lastIndex < 1) {
        result += '0\n';
        return;
    }

    result += (heap[1] + '\n');
    heap[1] = heap[lastIndex];
    heap[lastIndex--] = undefined;

    let index = 1;
    const x = heap[1];
    while (index <= lastIndex) {
        const leftIndex = getLeftChild(index);
        const rightIndex = getRightChild(index);

        if (heap[leftIndex] != undefined && heap[leftIndex] > heap[index] && (heap[rightIndex] == undefined || heap[leftIndex] >= heap[rightIndex])) {
            heap[index] = heap[leftIndex];
            heap[leftIndex] = x;
            index = leftIndex;
        } else if (heap[rightIndex] != undefined && heap[rightIndex] > heap[index] && (heap[leftIndex] == undefined || heap[rightIndex] >= heap[leftIndex])) {
            heap[index] = heap[rightIndex];
            heap[rightIndex] = x;
            index = rightIndex;
        } else {
            break;
        }
    }
}

const solution = (input) => {
    const N = Number(input[0]);
    input.splice(0, 1);

    const arr = input.map((v) => Number(v));
    arr.forEach((value) => {
        if (value === 0) pop();
        else push(value);
    });
    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);