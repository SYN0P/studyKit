let fs = require('fs');

const searchFirst = (arr, value) => {
    let start = 0, end = arr.length - 1;

    let result = Number.MAX_VALUE;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        
        if (arr[mid] == value) {
            result = Math.min(result, mid);
        }
        
        if (arr[mid] < value) {
            start = mid + 1;
        } else if (arr[mid] >= value) {
            end = mid - 1;
        }
    }

    return result != Number.MAX_VALUE ? result : -1;
}

const searchLast = (arr, value) => {
    let start = 0, end = arr.length - 1;

    let result = -1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        
        if (arr[mid] == value) {
            result = Math.max(result, mid);
        }
        
        if (arr[mid] <= value) {
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1;
        }
    }

    return result != -1 ? result : -1;
}

const solution = (input) => {
    const cards = input[1].split(' ');
    const numbers = input[3].split(' ');

    cards.forEach((v, i) => cards[i] = Number(v));
    numbers.forEach((v, i) => numbers[i] = Number(v));

    cards.sort((a, b) => a - b);

    let result = '';
    numbers.forEach((v) => {
        const resultFirst = searchFirst(cards, v);
        const resultLast = searchLast(cards, v);

        if (resultFirst != -1 && resultLast != -1) {
            result += (resultLast - resultFirst + 1).toString() + ' ';
        } else {
            result += '0 ';
        }
    });

    console.log(result);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);