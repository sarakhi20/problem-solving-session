 // todo Post-Session Practice Questions:
// // todo Merge two sorted arrays without using extra space (two-pointer)
// class TreeNode {
//     constructor(val = 0, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// import buildTree from 'buildTree';
// const buildTree = require('buildTree');

// function serialize(root) {
//     if (!root) return "null";
//     return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
// }

// function deserialize(data) {
//     let nodes = data.split(",");
//     function buildTree() {
//         let val = nodes.shift();
//         if (val === "null") return null;
//         let node = new TreeNode(parseInt(val));
//         node.left = buildTree();
//         node.right = buildTree();
//         return node;
//     }
//     return buildTree();
// }

// function storeInorder(root, arr = []) {
//     if (!root) return;
//     storeInorder(root.left, arr);
//     arr.push(root);
//     storeInorder(root.right, arr);
//     return arr;
// }

// function sortedArrayToBST(arr, start, end) {
//     if (start > end) return null;
//     let mid = Math.floor((start + end) / 2);
//     let node = arr[mid];
//     node.left = sortedArrayToBST(arr, start, mid - 1);
//     node.right = sortedArrayToBST(arr, mid + 1, end);
//     return node;
// }

// function balanceBST(root) {
//     let nodes = storeInorder(root);
//     return sortedArrayToBST(nodes, 0, nodes.length - 1);
// }

// function maxLevelSum(root) {
//     if (!root) return 0;
//     let queue = [root];
//     let maxSum = Number.MIN_SAFE_INTEGER, level = 0, maxLevel = 0;
    
//     while (queue.length) {
//         let size = queue.length, sum = 0;
//         level++;
//         for (let i = 0; i < size; i++) {
//             let node = queue.shift();
//             sum += node.val;
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//         if (sum > maxSum) {
//             maxSum = sum;
//             maxLevel = level;
//         }
//     }
//     return maxLevel;
// }

// function maxDepth(root) {
//     if (!root) return 0;
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// }

// function mergeSortedArrays(arr1, arr2) {
//     let i = arr1.length - 1, j = arr2.length - 1, k = arr1.length + arr2.length - 1;
//     arr1.length = k + 1;
//     while (j >= 0) {
//         if (i >= 0 && arr1[i] > arr2[j]) {
//             arr1[k--] = arr1[i--];
//         } else {
//             arr1[k--] = arr2[j--];
//         }
//     }
//     return arr1;
// }

// // Example Usage
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
// const root = deserialize(serialize(buildTree(preorder, inorder)));
// const balancedRoot = balanceBST(root);
// console.log("Level with max sum:", maxLevelSum(balancedRoot));
// console.log("Depth of deepest leaf node:", maxDepth(balancedRoot));

// // Example usage for merging sorted arrays
// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
// console.log("Merged sorted array:", mergeSortedArrays(arr1, arr2));


// todo Find the first missing positive integer in an array (hashing).
function firstMissingPositive(nums) {
    const numSet = new Set(nums);
    let smallest = 1;
    
    while (numSet.has(smallest)) {
        smallest++;
    }
    
    return smallest;
}

// Example usage
console.log(firstMissingPositive([3, 4, -1, 1])); 
console.log(firstMissingPositive([1, 2, 0]));   
console.log(firstMissingPositive([7, 8, 9, 11]));

 // todo Count the number of subarrays with a sum equal to zero (sliding window).
 function countZeroSumSubarrays(nums) {
    const prefixSumMap = new Map();
    let prefixSum = 0;
    let count = 0;
    
    prefixSumMap.set(0, 1); // To handle cases where subarray itself starts from index 0
    
    for (let num of nums) {
        prefixSum += num;
        
        if (prefixSumMap.has(prefixSum)) {
            count += prefixSumMap.get(prefixSum);
        }
        
        prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
    }
    
    return count;
}

// Example usage
console.log(countZeroSumSubarrays([1, -1, 2, -2, 3, -3])); // Output: 6
console.log(countZeroSumSubarrays([0, 0, 0])); // Output: 6
console.log(countZeroSumSubarrays([3, 4, -7, 1, 2, -6, 1, 2, 3])); // Output: 4

// todo Check if an array contains duplicate elements within k distances (sliding window).
function containsNearbyDuplicate(nums, k) {
    const numSet = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            return true;
        }
        
        numSet.add(nums[i]);
        
        if (numSet.size > k) {
            numSet.delete(nums[i - k]);
        }
    }
    
    return false;
}

// Example usage
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5], 2)); // Output: false
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false


// todo Find the longest mountain in an array (two-pointer).
function longestMountain(arr) {
    let maxLen = 0;
    let i = 1;
    
    while (i < arr.length - 1) {
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            let left = i - 1;
            let right = i + 1;
            
            while (left > 0 && arr[left - 1] < arr[left]) {
                left--;
            }
            
            while (right < arr.length - 1 && arr[right] > arr[right + 1]) {
                right++;
            }
            
            maxLen = Math.max(maxLen, right - left + 1);
            i = right;
        } else {
            i++;
        }
    }
    
    return maxLen;
}

// Example usage
console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // Output: 5
console.log(longestMountain([2, 2, 2])); // Output: 0
console.log(longestMountain([0, 2, 2, 3, 2, 1, 0])); // Output: 5


// todo Sort an array by the parity of elements (two-pointer).
function sortArrayByParity(nums) {
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        while (left < right && nums[left] % 2 === 0) {
            left++;
        }
        while (left < right && nums[right] % 2 !== 0) {
            right--;
        }
        
        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    
    return nums;
}

// Example usage
console.log(sortArrayByParity([3, 1, 2, 4])); // Output: [2, 4, 3, 1]
console.log(sortArrayByParity([0, 1, 2])); // Output: [0, 2, 1]
console.log(sortArrayByParity([1, 3, 5])); // Output: [1, 3, 5]

// todo Find all pairs in an array with a difference equal to a target value (two-pointer).
function findPairsWithDifference(nums, target) {
    nums.sort((a, b) => a - b);
    let left = 0, right = 1;
    let result = [];
    
    while (right < nums.length) {
        let diff = nums[right] - nums[left];
        
        if (diff === target && left !== right) {
            result.push([nums[left], nums[right]]);
            left++;
            right++;
        } else if (diff < target) {
            right++;
        } else {
            left++;
        }
    }
    
    return result;
}

// Example usage
console.log(findPairsWithDifference([1, 5, 2, 2, 3, 7], 2)); // Output: [[1, 3], [3, 5], [5, 7]]
console.log(findPairsWithDifference([8, 12, 16, 4, 0, 20], 4)); // Output: [[0, 4], [4, 8], [8, 12], [12, 16], [16, 20]]
console.log(findPairsWithDifference([1, 3, 5, 7], 2)); // Output: [[1, 3], [3, 5], [5, 7]]


// todo Find the longest subarray with at most two distinct characters (sliding window).
function longestSubarrayWithTwoDistinct(nums) {
    let left = 0, maxLen = 0;
    const freqMap = new Map();
    
    for (let right = 0; right < nums.length; right++) {
        freqMap.set(nums[right], (freqMap.get(nums[right]) || 0) + 1);
        
        while (freqMap.size > 2) {
            freqMap.set(nums[left], freqMap.get(nums[left]) - 1);
            if (freqMap.get(nums[left]) === 0) {
                freqMap.delete(nums[left]);
            }
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}

// Example usage
console.log(longestSubarrayWithTwoDistinct([1, 2, 1, 2, 3])); // Output: 4
console.log(longestSubarrayWithTwoDistinct([4, 4, 4, 4])); // Output: 4
console.log(longestSubarrayWithTwoDistinct([1, 2, 3, 4, 5])); // Output: 2

// todo Find the first non-repeating element in a stream of characters (hashing).
function firstNonRepeatingChar(stream) {
    const charCount = new Map();
    const queue = [];
    
    for (let char of stream) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
        queue.push(char);
        
        while (queue.length > 0 && charCount.get(queue[0]) > 1) {
            queue.shift();
        }
    }
    
    return queue.length > 0 ? queue[0] : null;
}

// Example usage
console.log(firstNonRepeatingChar("aabcbd")); // Output: "c"
console.log(firstNonRepeatingChar("abcabc")); // Output: null
console.log(firstNonRepeatingChar("swiss")); // Output: "w"

// todo Merge two sorted arrays without using extra space (two-pointer).
function mergeSortedArrays(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let i = m - 1, j = n - 1, k = m + n - 1;
    
    nums1.length = m + n;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    
    return nums1;
}

// Example usage
console.log(mergeSortedArrays([1, 3, 5, 0, 0, 0], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([0], [1])); // Output: [0, 1]
console.log(mergeSortedArrays([2, 0], [1])); // Output: [1, 2]

 // todo Find the largest subarray with a sum less than or equal to a given value (sliding window).
 function largestSubarrayWithSum(nums, target) {
    let left = 0, sum = 0, maxLen = 0;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        while (sum > target) {
            sum -= nums[left];
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}

// Example usage
console.log(largestSubarrayWithSum([1, 2, 3, 4, 5], 9)); // Output: 3
console.log(largestSubarrayWithSum([4, 3, 1, 2, 5, 1, 1, 1], 8)); // Output: 4
console.log(largestSubarrayWithSum([10, 5, 2, 6], 10)); // Output: 2

