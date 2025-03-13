// todo Post-Session Practice Questions:
// todo Perform an in-order traversal iteratively.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(root) {
    let stack = [];
    let current = root;
    let result = [];
    
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        result.push(current.val);
        
        current = current.right;
    }
    
    return result;
}

// Example Usage
// const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
// console.log(inOrderTraversal(root));

// todo Calculate the sum of all nodes in a binary tree.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sumOfNodes(root) {
    if (!root) return 0;
    return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example Usage
// const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// console.log(sumOfNodes(root)); 

// todo Find the diameter of a binary tree.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function diameterOfBinaryTree(root) {
    let diameter = 0;
    
    function depth(node) {
        if (!node) return 0;
        let leftDepth = depth(node.left);
        let rightDepth = depth(node.right);
        diameter = Math.max(diameter, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }
    
    depth(root);
    return diameter;
}

// Example Usage
// const root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
// console.log(diameterOfBinaryTree(root));

// todo Check if two binary trees are identical.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isIdentical(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.val !== root2.val) return false;
    
    return isIdentical(root1.left, root2.left) && isIdentical(root1.right, root2.right);
}

// Example Usage
// const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
// const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
// console.log(isIdentical(tree1, tree2));

// todo Convert a binary tree to a doubly linked list.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class DoublyLinkedListNode {
    constructor(val = 0, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

function treeToDoublyList(root) {
    if (!root) return null;
    let head = null, prev = null;
    
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        
        let dllNode = new DoublyLinkedListNode(node.val);
        if (!head) head = dllNode;
        if (prev) {
            prev.next = dllNode;
            dllNode.prev = prev;
        }
        prev = dllNode;
        
        inorder(node.right);
    }
    
    inorder(root);
    return head;
}

// Example Usage
// const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(5));
// console.log(treeToDoublyList(root)); 
// todo Convert a binary tree to a doubly linked list.

// todo Construct a binary tree from its inorder and preorder traversals.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    
    let rootVal = preorder.shift();
    let root = new TreeNode(rootVal);
    let inorderIndex = inorder.indexOf(rootVal);
    
    root.left = buildTree(preorder, inorder.slice(0, inorderIndex));
    root.right = buildTree(preorder, inorder.slice(inorderIndex + 1));
    
    return root;
}

// Example Usage
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
// console.log(buildTree(preorder, inorder)); 

// todo Print all nodes at k distance from the root.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    
    let rootVal = preorder.shift();
    let root = new TreeNode(rootVal);
    let inorderIndex = inorder.indexOf(rootVal);
    
    root.left = buildTree(preorder, inorder.slice(0, inorderIndex));
    root.right = buildTree(preorder, inorder.slice(inorderIndex + 1));
    
    return root;
}

function printNodesAtKDistance(root, k) {
    if (!root) return;
    if (k === 0) {
        console.log(root.val);
        return;
    }
    printNodesAtKDistance(root.left, k - 1);
    printNodesAtKDistance(root.right, k - 1);
}

// Example Usage
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
// const root = buildTree(preorder, inorder);
// console.log("Nodes at distance k:");
// printNodesAtKDistance(root, 2); 

// todo Serialize and deserialize a binary tree.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    if (!root) return "null";
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data) {
    let nodes = data.split(",");
    function buildTree() {
        let val = nodes.shift();
        if (val === "null") return null;
        let node = new TreeNode(parseInt(val));
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    return buildTree();
}

// Example Usage
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
// const root = buildTree(preorder, inorder);
// const serialized = serialize(root);
// console.log("Serialized Tree:", serialized);
// const deserializedRoot = deserialize(serialized);
// console.log("Deserialized Tree Root:", deserializedRoot);

// todo Find the level with the maximum sum in a binary tree.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    if (!root) return "null";
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data) {
    let nodes = data.split(",");
    function buildTree() {
        let val = nodes.shift();
        if (val === "null") return null;
        let node = new TreeNode(parseInt(val));
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    return buildTree();
}

function maxLevelSum(root) {
    if (!root) return 0;
    let queue = [root];
    let maxSum = Number.MIN_SAFE_INTEGER, level = 0, maxLevel = 0;
    
    while (queue.length) {
        let size = queue.length, sum = 0;
        level++;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (sum > maxSum) {
            maxSum = sum;
            maxLevel = level;
        }
    }
    return maxLevel;
}

// Example Usage
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
// const root = deserialize(serialize(buildTree(preorder, inorder)));
// console.log("Level with max sum:", maxLevelSum(root));

// todo Calculate the depth of the deepest leaf node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    if (!root) return "null";
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data) {
    let nodes = data.split(",");
    function buildTree() {
        let val = nodes.shift();
        if (val === "null") return null;
        let node = new TreeNode(parseInt(val));
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    return buildTree();
}

function maxLevelSum(root) {
    if (!root) return 0;
    let queue = [root];
    let maxSum = Number.MIN_SAFE_INTEGER, level = 0, maxLevel = 0;
    
    while (queue.length) {
        let size = queue.length, sum = 0;
        level++;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (sum > maxSum) {
            maxSum = sum;
            maxLevel = level;
        }
    }
    return maxLevel;
}

function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Example Usage
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
// const root = deserialize(serialize(buildTree(preorder, inorder)));
// console.log("Level with max sum:", maxLevelSum(root));
// console.log("Depth of deepest leaf node:", maxDepth(root));

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    if (!root) return "null";
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data) {
    let nodes = data.split(",");
    function buildTree() {
        let val = nodes.shift();
        if (val === "null") return null;
        let node = new TreeNode(parseInt(val));
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    return buildTree();
}

function storeInorder(root, arr = []) {
    if (!root) return;
    storeInorder(root.left, arr);
    arr.push(root);
    storeInorder(root.right, arr);
    return arr;
}

function sortedArrayToBST(arr, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = arr[mid];
    node.left = sortedArrayToBST(arr, start, mid - 1);
    node.right = sortedArrayToBST(arr, mid + 1, end);
    return node;
}

function balanceBST(root) {
    let nodes = storeInorder(root);
    return sortedArrayToBST(nodes, 0, nodes.length - 1);
}

function maxLevelSum(root) {
    if (!root) return 0;
    let queue = [root];
    let maxSum = Number.MIN_SAFE_INTEGER, level = 0, maxLevel = 0;
    
    while (queue.length) {
        let size = queue.length, sum = 0;
        level++;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (sum > maxSum) {
            maxSum = sum;
            maxLevel = level;
        }
    }
    return maxLevel;
}

function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Example Usage
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const root = deserialize(serialize(buildTree(preorder, inorder)));
const balancedRoot = balanceBST(root);
console.log("Level with max sum:", maxLevelSum(balancedRoot));
console.log("Depth of deepest leaf node:", maxDepth(balancedRoot));

