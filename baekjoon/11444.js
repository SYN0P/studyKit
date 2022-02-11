let fs = require('fs');

const matrixMul = (a, b) => {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length; j++) {
            for (let k = 0; k < a.length; k++) {
                if (result[i] == undefined) result[i] = [];
                if (result[i][j] == undefined) result[i][j] = BigInt(0);
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

const matrixScalarMod = (arr, N) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = [];
        for (let j = 0; j < arr.length; j++) {
            result[i][j] = arr[i][j] % N;
        }
    }

    return result;
}

const pow = (matrix, mul, div) => {
	if (mul == BigInt(1)) return matrixScalarMod(matrix, div);

	if (mul % BigInt(2) == BigInt(0)) {
		const divide = pow(matrix, mul / BigInt(2), div);
        const conquer = matrixMul(divide, divide);
        return matrixScalarMod(conquer, div);
	} else {
		const divide = pow(matrix, (mul - BigInt(1)) / BigInt(2), div);
        const conquerA = matrixMul(divide, divide);
        const conquerB = matrixMul(conquerA, matrix); 
		return matrixScalarMod(conquerB, div);
	}
}

const solution = (input) => {
    const N = BigInt(input[0]);
    const matrix = [[BigInt(1), BigInt(1)], [BigInt(1), BigInt(0)]];
    const result = pow(matrix, N, BigInt(1000000007));

    console.log(result[0][1].toString());
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);