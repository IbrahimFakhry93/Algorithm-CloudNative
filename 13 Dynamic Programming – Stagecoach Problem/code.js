const labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const data = [
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

//* data indices values are actually costs
//* so data[i][j] is a cost

const n = data.length;
const states = Array(n)
  .fill()
  .map(() => ({}));

states[n - 1] = { from: "", to: "", totalCost: 0 };
//* DP from right to left (assuming edges go only forward: i -> j where j > i)
for (let i = n - 2; i >= 0; i--) {
  states[i] = {
    from: labels[i],
    to: "",
    totalCost: Number.MAX_SAFE_INTEGER,
  };

  for (let j = i + 1; j < n; j++) {
    if (data[i][j] == 0) continue;

    const newCost = data[i][j] + states[j].totalCost;

    if (newCost < states[i].totalCost) {
      states[i].to = labels[j]; //* move the point along the shortest route
      states[i].totalCost = newCost;
    }
  }
}

console.log(states);

const path = [labels[0]];

let i = 0;
let j = 0;

while (i < states.length) {
  if (states[i].from == path[j]) {
    path[j + 1] = states[i].to;

    j++;
  }

  i++;
}

console.log("Minimum Cost: ", states[0].totalCost);
console.log("Path:", path.join(" -> "));

//*===============================================================================

//* Where dynamic programming shows up in your code
//* You’re doing shortest path on a DAG (Directed Acyclic Graph) with only forward edges (i → j where j > i).
//* That’s a classic dynamic programming setup because you solve “from the end back to the start,” caching subproblem results and reusing them.
//* states[i].totalCost stores the result and avoids recomputation

//* This ensures all future costs states[i].totalCost are already computed when evaluating states[j].totalCost.
