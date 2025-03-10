// todo Post-Session Practice Questions:
// todo Find the LCM of two numbers.
function findLCM(a, b) {
    let lcm = Math.max(a, b);
    while (lcm % a !== 0 || lcm % b !== 0) {
        lcm++;
    }
    return lcm;
}
console.log(findLCM(4, 6));

// todo Generate a pyramid pattern of numbers.
function generatePyramid(rows) {
    let pyramid = '';
    for (let i = 1; i <= rows; i++) {
        pyramid += ' '.repeat(rows - i) + Array.from({ length: i }, (_, index) => index + 1).join(' ') + '\n';
    }
    return pyramid;
}
console.log(generatePyramid(5));

// todo Calculate the GCD of two numbers.
function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(findGCD(48, 18));

// todo Check if a number is a palindrome.
function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome(123));
console.log(isPalindrome(121));
//type2
function isPalindrome(num) {
    let original = num, reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return original === reversed;
}
console.log(isPalindrome(123));
console.log(isPalindrome(121));

// todo Print an inverted triangle pattern of stars.
function generateInvertedTriangle(rows) {
    let triangle = '';
    for (let i = rows; i >= 1; i--) {
        triangle += ' '.repeat(rows - i) + '* '.repeat(i).trim() + '\n';
    }
    return triangle;
}
console.log(generateInvertedTriangle(5));

// todo Check if two numbers are coprime.
function areCoprime(a, b) {
    return findGCD(a, b) === 1;
}
console.log(areCoprime(14, 25));
console.log(areCoprime(14, 18));

// todo Print a diamond pattern of stars.
function generateDiamond(rows) {
    let diamond = '';
    for (let i = 1; i <= rows; i += 2) {
        diamond += ' '.repeat((rows - i) / 2) + '*'.repeat(i) + '\n';
    }
    for (let i = rows - 2; i >= 1; i -= 2) {
        diamond += ' '.repeat((rows - i) / 2) + '*'.repeat(i) + '\n';
    }
    return diamond;
}
console.log(generateDiamond(7));

// todo Print Pascal’s triangle up to N rows.
function generatePascalsTriangle(n) {
    let triangle = [];
    for (let i = 0; i < n; i++) {
        triangle[i] = [];
        triangle[i][0] = triangle[i][i] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }
    return triangle.map(row => row.join(' ')).join('\n');
}
console.log(generatePascalsTriangle(5));

// todo Find all divisors of a number.
function findDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== num / i) {
                divisors.push(num / i);
            }
        }
    }
    return divisors.sort((a, b) => a - b);
}
console.log(findDivisors(27));

// todo Print a checkerboard pattern.
function generateCheckerboard(size) {
    let board = '';
    for (let i = 0; i < size; i++) {
        board += (i % 2 === 0 ? ' *'.repeat(size / 2) : '* '.repeat(size / 2)) + '\n';
    }
    return board;
}
console.log(generateCheckerboard(8));