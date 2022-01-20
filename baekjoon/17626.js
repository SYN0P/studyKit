let fs = require('fs');

const solution = (input) => {
    const num = Number(input[0]);

    const arr = [0,];
    for (let i = 1; i <= num; i++) {
        let countMin = Number.MAX_VALUE;
        for (let j = 1; j * j <= i; j++) {
            countMin = Math.min(countMin, arr[i - j * j] + 1);
        }
        arr[i] = countMin;
    }
    
    console.log(arr[num]);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);