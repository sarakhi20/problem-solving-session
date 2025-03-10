// todo Post-Session Practice Questions:
// todo Find the number of occurrences of an element in an array.
function countElementOccurrences(arr, element) {
    return arr.reduce((count, current) => current === element ? count + 1 : count, 0);
}
console.log(countElementOccurrences([1, 2, 3, 2, 1, 2, 3, 4], 2));
//type2
function countElementOccurrences(arr, element) {
    let count = 0;
    for (let item of arr) {
        if (item === element) {
            count++;
        }
    }
    return count;
}
console.log(countElementOccurrences([1, 2, 3, 2, 1, 2, 3, 4], 2));

// todo Merge two sorted arrays.
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// todo Reverse the elements in an array.
function reverseArray(arr) {
    return arr.slice().reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));
//type2
function reverseArray(arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// todo Search for an element in a sorted array.
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

// todo Find the cumulative sum of an array.
function cumulativeSum(arr) {
    let result = [];
    let sum = 0;
    
    for (let num of arr) {
        sum += num;
        result.push(sum);
    }
    
    return result;
}
console.log(cumulativeSum([1, 2, 3, 4, 5]));

// todo Calculate the product of all elements in an array.
function productOfArray(arr) {
    return arr.reduce((product, num) => product * num, 1);
}
console.log(productOfArray([1, 2, 3, 4, 5]));
//type2
function productOfArray(arr) {
    let product = 1;
    for (let num of arr) {
        product *= num;
    }
    return product;
}
console.log(productOfArray([1, 2, 3, 4, 5]));

// todo Check if an array is a palindrome.
function isPalindromeArray(arr) {
    return arr.join('') === arr.slice().reverse().join('');
}
console.log(isPalindromeArray([1, 2, 3, 2, 1]));
//type2
function isPalindromeArray(arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindromeArray([1, 2, 3, 2, 1]));

// todo Find the intersection of two arrays.
function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
//type2
function arrayIntersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return [...set1].filter(value => set2.has(value));
}
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));