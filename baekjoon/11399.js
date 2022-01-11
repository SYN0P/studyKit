let fs = require('fs');

const solution = (input) => {
    const arr = input[1].split(' ').map((v, i) => ({index: i + 1, time: Number(v)}));
    arr.sort((a, b) => a.time - b.time);

    let totalTime = 0, waitTime = 0;
    arr.forEach((p) => {
        waitTime += p.time;
        totalTime += waitTime;
    });

    console.log(totalTime);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);