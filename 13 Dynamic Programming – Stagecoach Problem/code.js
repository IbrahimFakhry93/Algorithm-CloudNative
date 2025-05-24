// let labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// let data = [
//   [0, 2, 4, 3, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 7, 4, 6, 0, 0, 0],
//   [0, 0, 0, 0, 3, 2, 4, 0, 0, 0],
//   [0, 0, 0, 0, 4, 1, 5, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 4, 0],
//   [0, 0, 0, 0, 0, 0, 0, 6, 3, 0],
//   [0, 0, 0, 0, 0, 0, 0, 3, 3, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// let n = data.length;

// const states = [];
// states[n - 1] = { from: "", to: "", totalCost: 0 };

// for (let i = n - 2; i >= 0; i++) {
//   states[i] = {
//     from: labels[i],
//     to: "",
//     totalCost: Number.MAX_SAFE_INTEGER,
//   };
//   for (var j = i + 1; j < n; j++) {
//     if (data[i][j] == 0) continue;
//     const newCost = data[i][j] + states[j].totalCost;
//     if (newCost < states[i].totalCost) {
//       states[i].to = labels[j];
//       states[i].totalCost = newCost;
//     }
//   }
// }

// console.log(states);

// const path = ["A"];
// let i = 0;
// let k = 0;

// while (i < states.length) {
//   if (states[i].from === path[k]) {
//     path[k + 1] = states[i].to;
//     k++;
//   }

//   i++;
// }

// console.log("Minimum Cost:", states[0].totalCost);
// console.log("Minimum path:", path);

//*==================================================================
let labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let data = [
  [0, 2, 4, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 7, 4, 6, 0, 0, 0],
  [0, 0, 0, 0, 3, 2, 4, 0, 0, 0],
  [0, 0, 0, 0, 4, 1, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 6, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let n = data.length; // n is 10, the number of nodes

// Dynamic programming table to store the best path from each stage to the end.
const states = [];

// The destination (last node) has zero cost.
states[n - 1] = { from: labels[n - 1], to: "", totalCost: 0 };

// Work backwards from the second-to-last node down to the start.
for (let i = n - 2; i >= 0; i--) {
  states[i] = {
    from: labels[i],
    to: "",
    totalCost: Number.MAX_SAFE_INTEGER,
  };
  // Only examine moves that go forward.
  for (let j = i + 1; j < n; j++) {
    // Skip if there is no direct path from i to j.
    if (data[i][j] === 0) continue;
    const newCost = data[i][j] + states[j].totalCost;
    if (newCost < states[i].totalCost) {
      states[i].totalCost = newCost;
      states[i].to = labels[j];
    }
  }
}

console.log("States Table:", states);

// Build the path by following the "to" pointers.
// Start from index 0 (node "A").
const path = [];
let currentIndex = 0;
while (true) {
  path.push(labels[currentIndex]);
  // When no further pointer exists, stop – we've reached the destination.
  if (states[currentIndex].to === "") break;
  // Find the index of the next node using the label.
  currentIndex = labels.indexOf(states[currentIndex].to);
}

console.log("Minimum Cost:", states[0].totalCost);
console.log("Minimum Path:", path);
