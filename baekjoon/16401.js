let fs = require('fs');

const solution = (input) => {
    const [M, N] = input[0].split(' ').map((v) => Number(v));
    const cookie = input[1].split(' ');
    let sum = 0;
    cookie.forEach((v, i) => {
        cookie[i] = Number(v);
        sum += cookie[i];
    });
    cookie.sort((a, b) => a - b);
    if (M > sum) return 0;

    let start = 1, end = cookie[cookie.length - 1], mid = 1, ok = 1;
    while (start < end) {
        mid = Math.round(start + (end - start) / 2);

        let possibleCookie = 0;
        cookie.forEach((v) => {
            const quota = Math.floor(v / mid);
            possibleCookie += quota;
        });

        // console.log(`${start} | ${mid} | ${end} | ${possibleCookie}/${M}`);
        if (possibleCookie < M) {
            end = mid - 1;
        } else if (possibleCookie >= M) {
            ok = mid;
            start = mid;
        }
    }

    return ok;
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = "4 3\n10 10 15";
const result = solution(input);
console.log(result);