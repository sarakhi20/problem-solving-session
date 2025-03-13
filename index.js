
// write a function findpair(arr: number[], target: number): [number, number] that finds two distinct numbers in the sorted array arr[] such that their sum is equal to target. The function should return the indices of the two numbers in a tuple [i,j] where i<j. if no such pair exists, return [-1,-1] give js code

function findPair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [-1, -1];
}

// Example usage
// console.log(findPair([1, 2, 3, 4, 6], 6));
function findPair(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        sum < target ? left++ : right--;
    }
    
    return [-1, -1];
}
// console.log(findPair([1, 2, 3, 4, 6], 6));
function findPair(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
console.log(findPair([1, 2, 3, 4, 6], 6));
//find the first non repeating character
function firstNonRepeatingChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatingChar("supsu")); // Output: "w"
