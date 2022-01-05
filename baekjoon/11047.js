let fs = require('fs');

const solution = (input) => {
    const [N, K] = input[0].split(' ').map((v) => Number(v));
    input.splice(0, 1);
    const arr = input.map((v) => Number(v));

    let remain = K, count = 0;
    for (let i = 1; i <= N; i++) {
        while (remain >= arr[N - i]) {
            count++;
            remain -= arr[N - i];
        }
    }

    console.log(count);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);