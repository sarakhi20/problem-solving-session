// todo Post-Session Practice Questions:
// todo Calculate the difference between two integers.
function difference(x, y) {
  return x > y ? x - y : y - x;
}
console.log(difference(10,20))
console.log(difference(10,30))

// todo Check if a number is even or odd.
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(10))
console.log(isEvenOrOdd(9))

// todo Calculate the perimeter of a rectangle
function calculatePerimeter(length, width) {
  return 2 * (length + width);
}
console.log(calculatePerimeter(10, 5));

//todo Find the largest of four numbers.

function findLargest(a, b, c, d) {
  return Math.max(a, b, c, d);
}
console.log(findLargest(10, 25, 15, 8));

// todo Calculate the average of three numbers.
function calculateAverage(a, b, c) {
  return (a + b + c) / 3;
}
console.log(calculateAverage(10, 20, 30));

// todo Count the number of vowels in a string
function countVowels(str) {
  let count = 0;
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i].toLowerCase())) 
      
      {
      count++;
    }
  }

  return count;
}
console.log(countVowels("hi how are you")
);


// todo Determine if a character is uppercase
function isUpperCase(char) {
  return char === char.toUpperCase();
}
console.log(isUpperCase('A')); // Output: true
console.log(isUpperCase('b')); // Output: false

// todo Print the reverse of a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));
//easy type
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

// todo Find the square of a numbe
function squareNumber(num) {
  return num * num;
}
console.log(squareNumber(7));