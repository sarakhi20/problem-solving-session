// todo Post-Session Practice Questions:
// todo Find the floor and ceiling of a target in a sorted array.
function findFloorCeiling(arr, target) {
    let floor = -1, ceiling = -1;
    
    for (let num of arr) {
        if (num <= target) {
            floor = num;
        }
        if (num >= target && ceiling === -1) {
            ceiling = num;
        }
    }
    
    return { floor, ceiling };
}
console.log(findFloorCeiling([1, 2, 3, 5, 6, 8, 10], 4));

// todo Find the smallest missing element in a sorted array.
function findSmallestMissingElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i;
        }
    }
    return arr.length;
}
console.log(findSmallestMissingElement([0, 1, 2, 3, 5, 6, 7]));

// todo Perform ternary search on a sorted array.
function ternarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);
    
    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;
    
    if (target < arr[mid1]) {
        return ternarySearch(arr, target, left, mid1 - 1);
    } else if (target > arr[mid2]) {
        return ternarySearch(arr, target, mid2 + 1, right);
    } else {
        return ternarySearch(arr, target, mid1 + 1, mid2 - 1);
    }
}


const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 5;
console.log(ternarySearch(sortedArray, targetValue));

// todo Find the index of a target in an infinite array.
function ternarySearchRecursive(arr, left, right, target) {
    if (left <= right) {
        let mid1 = left + Math.floor((right - left) / 3);
        let mid2 = right - Math.floor((right - left) / 3);

        if (arr[mid1] === target) return mid1;
        if (arr[mid2] === target) return mid2;

        if (target < arr[mid1]) {
            return ternarySearchRecursive(arr, left, mid1 - 1, target);
        } else if (target > arr[mid2]) {
            return ternarySearchRecursive(arr, mid2 + 1, right, target);
        } else {
            return ternarySearchRecursive(arr, mid1 + 1, mid2 - 1, target);
        }
    }
    return -1; // Target not found
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 9;

// Using recursive approach
const indexRecursive = ternarySearchRecursive(arr, 0, arr.length - 1, target);
console.log(`Recursive: Element found at index ${indexRecursive}`);


// todo Find the minimum element in a rotated sorted array.
function findIndexInInfiniteArray(arr, target) {
    let low = 0, high = 1;

    // Expand search range exponentially
    while (arr[high] < target) {
        low = high;
        high *= 2;

        // Handle cases where high exceeds available indices
        if (high >= arr.length) {
            high = arr.length - 1;
            break;
        }
    }

    // Perform binary search within the found range
    return binarySearch(arr, low, high, target);
}

function binarySearch(arr, low, high, target) {
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1; // Target not found
}

// Example usage
const infiniteArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]; // Simulating an "infinite" array
const searchTarget = 19;  // Renamed variable
const index = findIndexInInfiniteArray(infiniteArray, searchTarget);
console.log(`Target found at index: ${index}`);

// todo Find the minimum element in a rotated sorted array.
function findMinInRotatedArray(arr) {
    let low = 0, high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        // If mid is greater than high, min is in the right part
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            // Min is in the left part (including mid)
            high = mid;
        }
    }

    return arr[low]; // The minimum element
}

// Example usage
const rotatedArray = [4, 5, 6, 7, 1, 2, 3];
console.log(`Minimum element: ${findMinInRotatedArray(rotatedArray)}`); // Output: 1

// todo Count the frequency of elements using binary search.
function binarySearchFirst(arr, target) {
    let low = 0, high = arr.length - 1, firstIndex = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            firstIndex = mid; // Store possible first occurrence
            high = mid - 1; // Move left
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return firstIndex;
}

function binarySearchLast(arr, target) {
    let low = 0, high = arr.length - 1, lastIndex = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            lastIndex = mid; // Store possible last occurrence
            low = mid + 1; // Move right
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return lastIndex;
}

function countFrequency(arr, target) {
    let first = binarySearchFirst(arr, target);
    if (first === -1) return 0; // Target not found

    let last = binarySearchLast(arr, target);
    return last - first + 1;
}

// Example usage
const numbers = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 6];
const searchValue = 5; // Renamed variable
console.log(`Frequency of ${searchValue}: ${countFrequency(numbers, searchValue)}`);

// todo Find the closest element to a target in a sorted array.
function findClosestElement(arr, target) {
    let low = 0, high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) return arr[mid]; // Exact match

        if (arr[mid] < target) {
            low = mid + 1; // Move right
        } else {
            high = mid; // Move left
        }
    }

    // Edge case: If low is at the start of the array
    if (low === 0) return arr[0];

    // Edge case: If low is at the end of the array
    if (low === arr.length) return arr[arr.length - 1];

    // Compare arr[low] and arr[low - 1] to find the closest
    return (Math.abs(arr[low] - target) < Math.abs(arr[low - 1] - target)) 
           ? arr[low] 
           : arr[low - 1];
}

const numArray = [1, 3, 5, 8, 12, 15, 18, 20]; 
const newTarget = 9; // Changed variable name to avoid redeclaration

console.log(`Closest element to ${newTarget}: ${findClosestElement(numArray, newTarget)}`);

// todo Implement an exponential search.
function exponentialSearch(arr, x) {
    if (arr[0] === x) return 0;
    
    // Find a range where the element might be present
    let i = 1;
    while (i < arr.length && arr[i] <= x) {
        i = i * 2;
    }

    // Perform binary search within the found range
    return binarySearch(arr, i / 2, Math.min(i, arr.length - 1), x);
}

function binarySearch(arr, left, right, x) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === x) return mid;
        if (arr[mid] < x) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}
let a = [2, 3, 4, 10, 40];
let x = 10;
let result = exponentialSearch(arr, x);
console.log("Element found at index " + result);

// todo Find the peak index in a bitonic array.
function findPeakIndex(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[mid + 1]) {
            // Peak is on the left side (including mid)
            right = mid;
        } else {
            // Peak is on the right side
            left = mid + 1;
        }
    }

    return left; // Peak index
}

// Example usage
const bitonicArray = [1, 3, 8, 12, 9, 5, 2]; // 12 is peak at index 3
const peakIndex = findPeakIndex(bitonicArray);
console.log(`Peak index: ${peakIndex}, Peak value: ${bitonicArray[peakIndex]}`);



 

