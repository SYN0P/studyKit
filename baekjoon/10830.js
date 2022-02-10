let fs = require('fs');

const matrixMul = (a, b) => {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length; j++) {
            for (let k = 0; k < a.length; k++) {
                if (result[i] == undefined) result[i] = [];
                if (result[i][j] == undefined) result[i][j] = 0;
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
	if (mul == 1) return matrixScalarMod(matrix, div);

	if (mul % 2 == 0) {
		const divide = pow(matrix, mul / 2, div);
        const conquer = matrixMul(divide, divide);
        return matrixScalarMod(conquer, div);
	} else {
		const divide = pow(matrix, (mul - 1) / 2, div);
        const conquerA = matrixMul(divide, divide);
        const conquerB = matrixMul(conquerA, matrix); 
		return matrixScalarMod(conquerB, div);
	}
}

const solution = (input) => {
    const [N, B] = input[0].split(' ').map((v) => Number(v));

    const matrix = [];
    for (let i = 0; i < N; i++) {
        matrix[i] = input[i + 1].split(' ').map((v) => Number(v));
    }

    const resultMatrix = pow(matrix, B, 1000);
    let resultString = '';
    for (let i = 0; i < resultMatrix.length; i++) {
        for (let j = 0; j < resultMatrix.length; j++) {
            resultString += resultMatrix[i][j] + ' ';
        }
        resultString += '\n';
    }
    console.log(resultString);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);