let fs = require('fs');

const solution = (input) => {
    const str = input[0];

    let totalSum = 0, blockSum = 0, digit = 1;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == '-') {
            totalSum -= blockSum;
            blockSum = 0;
            digit = 1;
        } else if (str[i] == '+') {
            digit = 1;
        } else {
            blockSum += (Number(str[i]) * digit);
            digit *= 10;
        }
    }

    totalSum += blockSum;
    console.log(totalSum);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);