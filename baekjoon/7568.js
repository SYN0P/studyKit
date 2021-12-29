let fs = require('fs');

const solution = (input) => {
    input.splice(0, 1);
    input.forEach((value, index) => {
        const pos = value.split(' ').map((v) => Number(v));
        input[index] = {x: pos[0], y: pos[1], rank: 1};
    });

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[i]['x'] > input[j]['x'] && input[i]['y'] > input[j]['y']) {
                input[j]['rank']++;
            }
        }
    }

    let result = '';
    input.forEach((value) => {
        result += (value['rank'] + ' ');
    });

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);