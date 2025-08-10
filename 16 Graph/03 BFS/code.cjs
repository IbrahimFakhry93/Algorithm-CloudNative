const { Queue, Deque } = require("datastructures-js");

const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["E", "D", "A"]],
  ["C", ["D", "F", "A"]],
  ["D", ["E", "F", "B"]],
  ["E", ["F", "B"]],
  ["F", ["D", "E", "C", "H"]],
  ["G", ["H", "I"]],
  ["H", ["G", "I", "F"]],
  ["I", ["G", "H"]],
]);

// console.log(graph.get("A")); // Output: ['B', 'C']

// console.log(graph.size);

//* Initialize an empty queue
const q = new Queue();

// console.log(q.isEmpty()); // Output: true

//* Add elements to the queue
q.enqueue("A");

// console.log(q.front()); // Output: 'A' (first element)
// console.log(q.size()); // Output: 1 (number of elements in the queue)

const visited = new Map();

visited.set("A", true);
// console.log(visited);

let current_vertex;
let destinations = [];
let path = [];
while (q.size() > 0) {
  current_vertex = q.dequeue();
  // console.log(current_vertex);
  destinations = graph.get(current_vertex);

  // console.log(destinations);

  for (let i = 0; i < destinations.length; i++) {
    if (!visited.get(destinations[i])) {
      q.enqueue(destinations[i]);
      visited.set(destinations[i], true);

      //* one way to print solution
      // console.log(`${current_vertex} => ${destinations[i]}`);

      //* second way: Store traversal step
      path.push(`${current_vertex} => ${destinations[i]}`);
    }
  }
}

// Print the entire path efficiently at once
console.log(path.join(" , "));
