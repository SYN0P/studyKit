let fs = require('fs');

const solution = (input) => {
    const [M, N] = input[0].split(' ').map((v) => Number(v));
    input.splice(0, 1);

    const numberList = input, numberListSum = 0;
    numberList.forEach((v, i) => {
        numberList[i] = Number(v);
        numberListSum += numberList[i];
    });

    let start = 0, mid = 1, end = numberListSum;
    let result = Number.MAX_VALUE;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        console.log(`${start} | ${mid} | ${end}`);

        let count = 1, sum = 0;
        for (let i = 0; i < numberList.length; i++) {
            if (numberList[i] > mid) {
                count = Number.MAX_VALUE;
                break;
            }

            sum += numberList[i];

            if (sum > mid) {
                count += 1;
                sum = numberList[i];
                // console.log(sum);
            }
        }

        console.log(`=> ${count}/${N}`);
        if (count <= N) {
            end = mid - 1;
            result = Math.min(result, mid);
        } else if (count > N) {
            start = mid + 1;
        }
    }

    return result;
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = solution(input);
console.log(result);