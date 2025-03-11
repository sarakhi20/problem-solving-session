// todo Post-Session Practice Questions:
// todo Implement a circular queue.
class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === -1;
    }

    // Check if the queue is full
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    // Enqueue (Add an element)
    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is full!");
            return;
        }

        if (this.isEmpty()) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        console.log(`${value} enqueued`);
    }

    // Dequeue (Remove an element)
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }

        let removedValue = this.queue[this.front];

        if (this.front === this.rear) {
            // Only one element was present, reset queue
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        console.log(`${removedValue} dequeued`);
        return removedValue;
    }

    // Get the front element
    frontElement() {
        return this.isEmpty() ? "Queue is empty!" : this.queue[this.front];
    }

    // Get the rear element
    rearElement() {
        return this.isEmpty() ? "Queue is empty!" : this.queue[this.rear];
    }

    // Print the queue
    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }

        let i = this.front;
        let result = [];

        while (true) {
            result.push(this.queue[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }

        console.log("Queue:", result.join(" <- "));
    }
}

// Example usage
// const cq = new CircularQueue(5);
// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.enqueue(40);
// cq.enqueue(50);
// cq.printQueue();

// cq.dequeue();
// cq.dequeue();
// cq.enqueue(60);
// cq.enqueue(70);
// cq.printQueue();

// console.log("Front Element:", cq.frontElement());
// console.log("Rear Element:", cq.rearElement());

// todo Sort a stack using recursion.
class Stack {
    constructor() {
        this.stack = [];
    }

    // Push an element onto the stack
    push(value) {
        this.stack.push(value);
    }

    // Pop an element from the stack
    pop() {
        return this.stack.pop();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Peek at the top element of the stack
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // Print the stack
    printStack() {
        console.log("Stack:", this.stack.join(" -> "));
    }
}

// Function to insert an element in a sorted stack
function sortedInsert(stack, value) {
    // Base case: If stack is empty or the top element is smaller, push the value
    if (stack.isEmpty() || value > stack.peek()) {
        stack.push(value);
        return;
    }

    // Remove top element
    let temp = stack.pop();
    
    // Recursive call to insert in sorted order
    sortedInsert(stack, value);

    // Push the removed element back
    stack.push(temp);
}

// Function to sort the stack using recursion
function sortStack(stack) {
    if (!stack.isEmpty()) {
        // Remove top element
        let temp = stack.pop();
        
        // Recursively sort the remaining stack
        sortStack(stack);

        // Insert the removed element in sorted order
        sortedInsert(stack, temp);
    }
}

// Example Usage
// const stack = new Stack();
// stack.push(30);
// stack.push(10);
// stack.push(50);
// stack.push(20);
// stack.push(40);

// console.log("Original Stack:");
// stack.printStack();

// sortStack(stack);

// console.log("Sorted Stack:");
// stack.printStack();

// todo Find the maximum element in a stack in constant time.
class MaxStack {
    constructor() {
        this.stack = [];
        this.maxStack = []; // Auxiliary stack to track max values
    }

    // Push element onto stack
    push(value) {
        this.stack.push(value);
        
        // Push max value onto maxStack
        if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(value);
        } else {
            this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
        }
    }

    // Pop element from stack
    pop() {
        if (this.stack.length === 0) {
            console.log("Stack is empty!");
            return null;
        }
        this.maxStack.pop(); // Remove from maxStack
        return this.stack.pop(); // Remove from main stack
    }

    // Get max element in O(1) time
    getMax() {
        if (this.maxStack.length === 0) {
            console.log("Stack is empty!");
            return null;
        }
        return this.maxStack[this.maxStack.length - 1]; // Top of maxStack is the max element
    }

    // Print stack
    printStack() {
        console.log("Stack:", this.stack.join(" -> "));
    }
}

// Example usage
// const maxStack = new MaxStack();
// maxStack.push(10);
// maxStack.push(20);
// maxStack.push(5);
// maxStack.push(30);
// maxStack.push(15);

// console.log("Max Element:", maxStack.getMax()); // 30

// maxStack.pop();
// console.log("Max Element after pop:", maxStack.getMax()); // 30

// maxStack.pop();
// console.log("Max Element after another pop:", maxStack.getMax()); // 20

// maxStack.printStack();

// todo Design a data structure supporting min, max, push, and pop in constant time.
class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minStack = []; // Tracks minimum values
        this.maxStack = []; // Tracks maximum values
    }

    // Push element onto stack
    push(value) {
        this.stack.push(value);

        // Push min value onto minStack
        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        }

        // Push max value onto maxStack
        if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(value);
        } else {
            this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
        }
    }

    // Pop element from stack
    pop() {
        if (this.stack.length === 0) {
            console.log("Stack is empty!");
            return null;
        }
        this.minStack.pop(); // Remove from minStack
        this.maxStack.pop(); // Remove from maxStack
        return this.stack.pop(); // Remove from main stack
    }

    // Get minimum element in O(1) time
    getMin() {
        if (this.minStack.length === 0) {
            console.log("Stack is empty!");
            return null;
        }
        return this.minStack[this.minStack.length - 1]; // Top of minStack
    }

    // Get maximum element in O(1) time
    getMax() {
        if (this.maxStack.length === 0) {
            console.log("Stack is empty!");
            return null;
        }
        return this.maxStack[this.maxStack.length - 1]; // Top of maxStack
    }

    // Print stack
    printStack() {
        console.log("Stack:", this.stack.join(" -> "));
    }
}

// Example Usage
// const stack = new MinMaxStack();
// stack.push(10);
// stack.push(20);
// stack.push(5);
// stack.push(30);
// stack.push(15);

// console.log("Min Element:", stack.getMin()); 
// console.log("Max Element:", stack.getMax()); 

// stack.pop();
// console.log("Min Element after pop:", stack.getMin()); 
// console.log("Max Element after pop:", stack.getMax()); 

// stack.pop();
// console.log("Min Element after another pop:", stack.getMin()); 
// console.log("Max Element after another pop:", stack.getMax());

// stack.printStack();

// todo Reverse the first k elements of a queue.
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items.length > 0 ? this.items[0] : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        console.log("Queue:", this.items.join(" -> "));
    }
}

function reverseFirstK(queue, k) {
    if (queue.isEmpty() || k <= 0 || k > queue.size()) {
        console.log("Invalid k value");
        return;
    }

    let stack = [];

    // Step 1: Push first K elements onto the stack
    for (let i = 0; i < k; i++) {
        stack.push(queue.dequeue());
    }

    // Step 2: Enqueue back the elements from stack
    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }

    // Step 3: Move remaining elements to the back
    let remaining = queue.size() - k;
    for (let i = 0; i < remaining; i++) {
        queue.enqueue(queue.dequeue());
    }
}

// Example Usage
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);

// console.log("Original Queue:");
// queue.printQueue();

// reverseFirstK(queue, 4);

// console.log("Queue after reversing first 4 elements:");
// queue.printQueue();

// todo Implement a priority queue.
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    // Insert an element with priority
    enqueue(value, priority) {
        let newNode = { value, priority };
        let added = false;

        // Insert the new node at the correct position based on priority
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority > priority) {
                this.queue.splice(i, 0, newNode);
                added = true;
                break;
            }
        }

        // If not added, push to the end
        if (!added) {
            this.queue.push(newNode);
        }
    }

    // Remove and return the highest priority element
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        return this.queue.shift();
    }

    // Peek at the highest priority element
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        return this.queue[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.queue.length;
    }

    // Print queue
    printQueue() {
        console.log(this.queue.map(item => `[${item.value}, P=${item.priority}]`).join(" -> "));
    }
}

// Example Usage
// const pq = new PriorityQueue();
// pq.enqueue("Task A", 3);
// pq.enqueue("Task B", 1);
// pq.enqueue("Task C", 2);
// pq.enqueue("Task D", 5);

// console.log("Priority Queue:");
// pq.printQueue();

// console.log("Dequeued:", pq.dequeue()); // Task B (Priority 1)
// console.log("Queue after Dequeue:");
// pq.printQueue();

// console.log("Peek:", pq.peek()); // Task C (Priority 2)
// console.log("Queue Size:", pq.size());

// todo Find the minimum element in a stack.
class MinStack {
    constructor() {
        this.mainStack = [];
        this.minStack = [];
    }

    // Push element onto stack
    push(value) {
        this.mainStack.push(value);

        // Push to minStack if it's the new minimum
        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        }
    }

    // Pop element from stack
    pop() {
        if (this.mainStack.length === 0) {
            console.log("Stack is empty!");
            return null;
        }

        let removed = this.mainStack.pop();
        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return removed;
    }

    // Get the minimum element
    getMin() {
        if (this.minStack.length === 0) {
            console.log("Stack is empty!");
            return null;
        }
        return this.minStack[this.minStack.length - 1];
    }

    // Peek top element
    peek() {
        if (this.mainStack.length === 0) {
            console.log("Stack is empty!");
            return null;
        }
        return this.mainStack[this.mainStack.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.mainStack.length === 0;
    }

    // Print stack
    printStack() {
        console.log("Stack:", this.mainStack.join(" -> "));
    }
}

// Example Usage
// const stack = new MinStack();
// stack.push(5);
// stack.push(3);
// stack.push(7);
// stack.push(2);
// stack.push(8);

// console.log("Stack:");
// stack.printStack();

// console.log("Minimum:", stack.getMin()); // 2

// stack.pop(); // Removes 8
// console.log("Minimum after pop:", stack.getMin()); // 2

// stack.pop(); // Removes 2
// console.log("Minimum after pop:", stack.getMin()); // 3

// todo Check if a string can be reduced to an empty string by recursive removal of adjacent duplicates.
function canReduceToEmptyIterative(str) {
    let stack = [];

    for (let char of str) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // Remove adjacent duplicate
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0; // If stack is empty, string was fully reduced
}

// Example Usage
// console.log(canReduceToEmptyIterative("abbaca"));  
// console.log(canReduceToEmptyIterative("aabb"));    
// console.log(canReduceToEmptyIterative("abc"));     
// console.log(canReduceToEmptyIterative("aabccba")); 
// console.log(canReduceToEmptyIterative("aaaa")); 

// todo Design a system that supports efficient insertion and retrieval of most recent elements (deque).
class RecentItemsDeque {
    constructor(size) {
        this.deque = [];
        this.size = size;
    }

    // Insert at the front
    insertFront(item) {
        if (this.deque.length >= this.size) {
            this.deque.pop(); // Remove the oldest element from the back
        }
        this.deque.unshift(item); // Add new element at the front
    }

    // Insert at the rear
    insertRear(item) {
        if (this.deque.length >= this.size) {
            this.deque.shift(); // Remove the oldest element from the front
        }
        this.deque.push(item); // Add new element at the rear
    }

    // Retrieve the most recent elements
    getRecentItems() {
        return [...this.deque]; // Return a copy of the deque
    }
}

// Example Usage
const recentItems = new RecentItemsDeque(5);

recentItems.insertRear(1);
recentItems.insertRear(2);
recentItems.insertRear(3);
recentItems.insertFront(0);
recentItems.insertRear(4);
recentItems.insertRear(5);

console.log(recentItems.getRecentItems()); 

