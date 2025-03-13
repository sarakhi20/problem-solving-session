// todo Post-Session Practice Questions:
// todo Reverse a linked list recursively.
class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    if (!head || !head.next) {
      return head;
    }
  
    let newHead = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
  
    return newHead;
  }
  
  // Helper function to print linked list
  function printList(head) {
    let current = head;
    while (current) {
      process.stdout.write(current.value + ' -> ');
      current = current.next;
    }
    console.log('null');
  }
  
 // Example usage
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  
  console.log("Original list:");
  printList(head);
  
  let reversedHead = reverseLinkedList(head);
  
  console.log("Reversed list:");
  printList(reversedHead);

//   todo Check if a linked list is a palindrome.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head) {
    let arr = [];
    let current = head;

    // Convert linked list to array
    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    // Check if the array is a palindrome
    let left = 0, right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
    }

    return true;
}

// Example Usage
const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(head));

// todo Remove the n-th node from the end of a linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;

    // Move first pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node
    second.next = second.next.next;

    return dummy.next;
}

// Example Usage
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(removeNthFromEnd(head, 2));

// todo Find the intersection point of two linked lists.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    return pointerA;
}

// Example Usage
const common = new ListNode(8, new ListNode(10));
const headA = new ListNode(3, new ListNode(7, common));
const headB = new ListNode(99, new ListNode(1, common));

console.log(getIntersectionNode(headA, headB));

// todo Flatten a multilevel doubly linked list.
class Node {
    constructor(val = 0, next = null, child = null) {
        this.val = val;
        this.next = next;
        this.child = child;
    }
}

function flatten(head) {
    if (!head) return head;
    
    let stack = [];
    let current = head;
    
    while (current) {
        if (current.child) {
            if (current.next) stack.push(current.next);
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }
        
        if (!current.next && stack.length) {
            current.next = stack.pop();
            current.next.prev = current;
        }
        
        current = current.next;
    }
    
    return head;
}

// Example Usage
const head = new Node(1, new Node(2, new Node(3, null, new Node(7, new Node(8, new Node(9))))));
console.log(flatten(head));

// todo Add two numbers represented by linked lists.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummyHead.next;
}

// Example Usage
// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// console.log(addTwoNumbers(l1, l2));

// todo Partition a linked list around a value x.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function partition(head, x) {
    let beforeHead = new ListNode(0);
    let before = beforeHead;
    let afterHead = new ListNode(0);
    let after = afterHead;

    while (head) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }
    
    after.next = null;
    before.next = afterHead.next;
    
    return beforeHead.next;
}

// Example Usage
const head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
console.log(partition(head, 3));

// todo Clone a linked list with random pointers.
class Node {
    constructor(val = 0, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function copyRandomList(head) {
    if (!head) return null;
    
    let map = new Map();
    let current = head;
    
    while (current) {
        map.set(current, new Node(current.val));
        current = current.next;
    }
    
    current = head;
    while (current) {
        let copy = map.get(current);
        copy.next = map.get(current.next) || null;
        copy.random = map.get(current.random) || null;
        current = current.next;
    }
    
    return map.get(head);
}

// Example Usage
const head = new Node(7, new Node(13, new Node(11, new Node(10, new Node(1)))));
head.next.random = head;
head.next.next.random = head.next.next.next.next;
head.next.next.next.random = head.next.next;
head.next.next.next.next.random = head;

console.log(copyRandomList(head));

// todo Split a linked list into two halves.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function splitLinkedList(head) {
    if (!head || !head.next) return [head, null];
    
    let slow = head, fast = head, prev = null;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = null; // Split the list
    return [head, slow];
}

// Example Usage
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const [firstHalf, secondHalf] = splitLinkedList(head);
console.log(firstHalf, secondHalf); 

// todo Merge two sorted linked lists.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}

// Example Usage
const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const l2 = new ListNode(2, new ListNode(4, new ListNode(6)));
console.log(mergeTwoLists(l1, l2));

// todo Sort a linked list using merge sort.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}

function findMiddle(head) {
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (prev) prev.next = null;
    return slow;
}

function mergeSort(head) {
    if (!head || !head.next) return head;
    
    let middle = findMiddle(head);
    let left = mergeSort(head);
    let right = mergeSort(middle);
    
    return mergeTwoLists(left, right);
}

// Example Usage
const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
console.log(mergeSort(head)); 

