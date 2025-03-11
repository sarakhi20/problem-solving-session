// todo Post-Session Practice Questions:
// todo Sort an array using merge sort.
function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    // Merge two sorted arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // Add remaining elements (if any)
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case: already sorted

    let mid = Math.floor(arr.length / 2);
    let leftHalf = mergeSort(arr.slice(0, mid));
    let rightHalf = mergeSort(arr.slice(mid));

    return merge(leftHalf, rightHalf);
}

// Example usage
//const array = [8, 3, 5, 1, 7, 6, 2, 4];
//const sortedArray = mergeSort(array);
//console.log("Sorted Array:", sortedArray);

// todo Implement quicksort on an array of integers.
function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case: already sorted

    let pivot = arr[Math.floor(arr.length / 2)]; // Choose a pivot
    let left = [];
    let right = [];
    let equal = [];

    for (let num of arr) {
        if (num < pivot) left.push(num);
        else if (num > pivot) right.push(num);
        else equal.push(num);
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage
// const array = [8, 3, 5, 1, 7, 6, 2, 4];
// const sortedArray = quickSort(array);
// console.log("Sorted Array:", sortedArray);

// todo Sort a nearly sorted array (where each element is at most k places away from its target position).
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    _heapifyDown() {
        let index = 0;
        while (true) {
            let left = 2 * index + 1, right = 2 * index + 2, smallest = index;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

function sortNearlySortedArray(arr, k) {
    let minHeap = new MinHeap();
    let result = [];

    // Insert first k+1 elements into the min heap
    for (let i = 0; i < Math.min(k + 1, arr.length); i++) {
        minHeap.insert(arr[i]);
    }

    for (let i = k + 1; i < arr.length; i++) {
        result.push(minHeap.extractMin());
        minHeap.insert(arr[i]);
    }

    // Extract remaining elements
    while (minHeap.size() > 0) {
        result.push(minHeap.extractMin());
    }

    return result;
}

// Example usage
// const arr = [6, 5, 3, 2, 8, 10, 9]; // K = 3 (each element is at most 3 places away)
// const k = 3;
// const sortedArray = sortNearlySortedArray(arr, k);
// console.log("Sorted Array:", sortedArray);

// todo Perform a bucket sort on an array of decimals.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

function bucketSort(arr) {
    if (arr.length === 0) return arr;

    let n = arr.length;
    let buckets = Array.from({ length: n }, () => []); // Create empty buckets

    // Put elements into buckets
    for (let num of arr) {
        let index = Math.floor(num * n); // Determine bucket index
        buckets[index].push(num);
    }

    // Sort each bucket
    for (let bucket of buckets) {
        insertionSort(bucket);
    }

    // Concatenate all buckets
    return [].concat(...buckets);
}

// Example usage
// const array = [0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51];
// const sortedArray = bucketSort(array);
// console.log("Sorted Array:", sortedArray);


// todo Sort an array of integers by frequency of elements.
function sortByFrequency(arr) {
    // Step 1: Count frequency of each element
    let freqMap = new Map();
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Sort based on frequency, then by element value
    return arr.sort((a, b) => {
        if (freqMap.get(a) !== freqMap.get(b)) {
            return freqMap.get(b) - freqMap.get(a); // Higher frequency first
        }
        return a - b; // If frequency is the same, sort by number
    });
}

// Example usage
// const array = [4, 3, 1, 6, 3, 1, 1, 4, 4, 6, 6, 6];
// const sortedArray = sortByFrequency(array);
// console.log("Sorted Array:", sortedArray);

// todo Sort an array of strings lexicographically.
function lexicographicSort(arr) {
    return arr.sort(); // Default sort() sorts lexicographically
}

// Example usage
// const words = ["banana", "apple", "cherry", "mango", "grape"];
// const sortedWords = lexicographicSort(words);
// console.log("Sorted Words:", sortedWords);

// todo Sort an array using heap sort.
function heapSort(arr) {
    let n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root with last item
        heapify(arr, i, 0); // Heapify the reduced heap
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
        heapify(arr, n, largest); // Recursively heapify the affected subtree
    }
}

// Example usage
// const array = [12, 11, 13, 5, 6, 7];
// const sortedArray = heapSort(array);
// console.log("Sorted Array:", sortedArray);

// todo Sort a matrix row-wise and column-wise.
function sortMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Step 1: Flatten the matrix
    let flatArray = matrix.flat();

    // Step 2: Sort the array
    flatArray.sort((a, b) => a - b);

    // Step 3: Convert back to a matrix
    let sortedMatrix = [];
    for (let i = 0; i < rows; i++) {
        sortedMatrix.push(flatArray.slice(i * cols, (i + 1) * cols));
    }

    return sortedMatrix;
}

// Example usage
const matrix = [
    [10, 20, 30],
    [5, 15, 25],
    [35, 40, 45]
];

const sortedMatrix = sortMatrix(matrix);
console.log("Sorted Matrix:", sortedMatrix);

// todo Find the kth smallest element in an array.
function kthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1]; // K is 1-based index
}

// Example usage
// const array = [7, 10, 4, 3, 20, 15];
// const k = 3;
// console.log(`Kth Smallest Element: ${kthSmallest(array, k)}`);


// todo Sort an array containing negative and positive numbers, with negatives coming first.

function sortNegativesFirst(arr) {
    return arr.sort((a, b) => (a >= 0 && b < 0 ? 1 : -1));
}

// Example usage
const array = [3, -2, -1, 5, -4, 6, -3, 2];
console.log("Sorted Array:", sortNegativesFirst(array));





