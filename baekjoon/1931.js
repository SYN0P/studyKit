let fs = require('fs');

const compare = (a, b) => {
    if (a.end == b.end) return a.start - b.start;
    else return a.end - b.end;
}

const solution = (input) => {
    const N = Number(input[0]);

    const arr = [];
    for (let i = 1; i <= N; i++) {
        const [start, end] = input[i].split(' ').map((v) => Number(v));
        arr.push({start, end});
    }

    arr.sort(compare);

    let last = 0, count = 0;
    arr.forEach((task) => {
        if (task.start < last || task.end < last) return;
        last = task.end;
        count++;
    });

    console.log(count);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);