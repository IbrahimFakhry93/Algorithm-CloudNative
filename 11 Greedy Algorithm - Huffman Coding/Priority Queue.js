//& Title: Using @datastructures-js/priority-queue for Priority Queues in JavaScript

//? Note:
//* This snippet demonstrates how to use the external library @datastructures-js/priority-queue.

//? Note:
//* It covers installation import and provides examples for MinPriorityQueue, MaxPriorityQueue, and a custom PriorityQueue.

//* Make sure you have installed the library via:
//~ npm install @datastructures-js/priority-queue

// Import the necessary classes from the library
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

//* Example 1: Using MinPriorityQueue (lowest value has highest priority)
console.log("----- MinPriorityQueue Example -----");

const minQueue = new MinPriorityQueue();
minQueue.enqueue(10);
minQueue.enqueue(5);
minQueue.enqueue(20);

//? Note: For MinPriorityQueue, front() returns the smallest (highest priority) element.
console.log("Front element:", minQueue.front()); // Expected output: 5
console.log("Dequeue element:", minQueue.dequeue()); // Removes and returns 5
console.log("Remaining elements (as array):", minQueue.toArray());

//* Example 2: Using MaxPriorityQueue (highest value has highest priority)
console.log("\n----- MaxPriorityQueue Example -----");

const maxQueue = new MaxPriorityQueue();
maxQueue.enqueue(10);
maxQueue.enqueue(5);
maxQueue.enqueue(20);

//? Note: For MaxPriorityQueue, front() returns the largest (highest priority) element.
console.log("Front element:", maxQueue.front()); // Expected output: 20
console.log("Dequeue element:", maxQueue.dequeue()); // Removes and returns 20
console.log("Remaining elements (as array):", maxQueue.toArray());

//* Example 3: Custom PriorityQueue (using comparator for objects)
//? Note: This custom PriorityQueue uses objects with a 'priority' field,
//? Note: and a comparator function to decide the ordering (ascending by priority value).
console.log("\n----- Custom PriorityQueue Example -----");

const tasksQueue = new PriorityQueue((a, b) => a.priority - b.priority);
tasksQueue.enqueue({ task: "Low priority", priority: 3 });
tasksQueue.enqueue({ task: "High priority", priority: 1 });
tasksQueue.enqueue({ task: "Medium priority", priority: 2 });

console.log("Front task:", tasksQueue.front());
// Expected output: { task: "High priority", priority: 1 } because 1 is the smallest priority value.
console.log("Dequeue task:", tasksQueue.dequeue()); // Removes the highest priority task
console.log("Remaining tasks:", tasksQueue.toArray());

//? Note: Additional helpful methods include size(), isEmpty(), etc.
