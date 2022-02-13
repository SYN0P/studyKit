let fs = require('fs');

const MOD = BigInt(1000000007);

// a를 b번 곱하는 함수
const pow = (a, b) => {
	if (b == BigInt(0)) return BigInt(1);
	else if (b == BigInt(1)) return a;

	if (b % BigInt(2) == BigInt(0)) {
		const p = pow(a, b / BigInt(2));
		return (p * p) % MOD;
	} else {
		const p = pow(a, (b - BigInt(1)) / BigInt(2));
		return ((p * p) % MOD) * a % MOD;
	}
}

// a를 b로 나누는 함수
const divide = (a, b) => {
	const result = (a * pow(b, MOD - BigInt(2))) % MOD;
    return a * pow(b, MOD - BigInt(2)) % MOD;
}

const solution = (input) => {
    const M = BigInt(input[0])

    let sum = BigInt(0);
    for (let i = 1; i <= M; i++) {
        const [N, S] = input[i].split(' ').map((v) => BigInt(v));
        sum = (sum + divide(S, N)) % MOD;
    }

    console.log(sum.toString());
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);