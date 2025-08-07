//! 17 – Greedy Algorithm – Introduction

//^ check slides:
//* important slides

//* Greedy algorithm is an optimization technique or strategy

//? Elements of greedy strategy:
//* There are sequential steps and in every step, I make a proper decision
//* local optimal solution (greedy choice): look down your feet, not looking forward or in future

//! 18 – Greedy Algorithm – Activity Selection Problem – Algorithm – Code

//* sessions start and end times

//? restrictions:
//* two arrays have same length
//* they are sorted by end times

//^ note on slide:
//* activity 0 : means the first session is added by default to results (desired sessions)

//? Greedy Approach:
//* Greedy choice: attend max possible number of sessions
//* sequential choices or steps: choosing sessions, sessions are considered steps

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

//? Analysis:
// time complexity is O(n) because of the for loop above
//* if the data is not sorted at first, so we will need sort algorithm,
//* fastest sorting algorithm is n * log(n): merge sort
// so the overall time complexity: n*log(n) after neglecting (n): n * log(n) + n
