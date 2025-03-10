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


// todo Find the minimum element in a rotated sorted array.
