let fs = require('fs');

let N, R, C;
let count = -1;

const go = (pos, depth) => {
    const powN = Math.pow(2, N);
    const powDepth = Math.pow(2, N - depth);

    if (depth > N) {
        count++;
        
        const r = Math.floor(pos / powN);
        const c = pos % powN;

        if (r == R && c == C) console.log(count);
        return;
    }
    
    const centerPos = pos + (powN * powDepth) + powDepth;
    const centerPosR = Math.floor(centerPos / powN);
    const centerPosC = centerPos % powN;
    const areaCount = Math.pow(4, N - depth);

    if(R < centerPosR && C < centerPosC) go(pos, depth + 1)
    else count += areaCount;

    if (R < centerPosR && C >= centerPosC) go(pos + (powDepth), depth + 1);
    else count += areaCount;

    if (R >= centerPosR && C < centerPosC) go(pos + (powN * powDepth), depth + 1);
    else count += areaCount;

    if (R >= centerPosR && C >= centerPosC) go(pos + (powN * powDepth) + (powDepth), depth + 1);
    else count += areaCount;
}

const solution = (input) => {
    [N, R, C] = input[0].split(' ').map((v) => Number(v));
    go(0, 1);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);