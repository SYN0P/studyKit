let fs = require('fs');

const solution = (input) => {
    const N = Number(input[0]);

    let num = 0, count = 0;
    while (true) {
        num++;
        if (num.toString().includes('666')) count++;
        if (count === N) break;
    }

    console.log(num);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);