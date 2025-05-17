//! 17 – Greedy Algorithm – Introduction

//^ check slides

//* Greedy algorithm is an optimization technique

//! 18 – Greedy Algorithm – Activity Selection Problem – Algorithm – Code

//* sessions start and end times

//? restrictions:
//* two arrays have same length
//* they are sorted by end times

const start = [9, 10, 11, 12, 13, 15];
const end = [11, 11, 12, 14, 15, 16];
const results = [0]; //* default, to start with first session starts at 9

let j = 0;

for (let i = 1; i < start.length; i++) {
  if (start[i] >= end[j]) {
    results.push(i);
    j = i;
  }
}

console.log(results);

//* Analysis:
// time complexity is O(n)
//* if the data is not sorted at first, so we will need sort algorithm,
// so the overall ime complexity: n*log(n)
