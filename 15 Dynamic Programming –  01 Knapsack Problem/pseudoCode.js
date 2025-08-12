//! 0/1 Knapsack Problem

//* we will add table of all possible weights till max weight (open slide)

//* add zero item at first to items arr , for easy code reading

//? nested for loop:

//^ outward loop:
//* loop forward over items array
//* dp[i] = [];
//! ask chatgpt why this step above

//^ inner loop:
//* loop forward over stages weights till max_weight

if (i == 0 || j == 0) dp[i][j] = 0;
else if (items[i].weight <= j) {
  dp[i][j] = Math.max(
    dp[i - 1][j],
    items[i].profit + dp[i - 1][j - items[i].weight]
  );
} else dp[i][j] = dp[i - 1][j]; //* move to top cell

//? Print Max Profit
// console.log(dp);
console.log("Max Profit: ", dp[items.length - 1][max_weight]);

//*====================================

//? Print the solution, the weights that cause he max profit

solution = [];

const i = items.length - 1;
const j = max_weight;
let remain = max_weight;

while (remain >= 0 && j > 0) {
  if (dp[i][j] > dp[i - 1][j]) {
    solution.push(items[i].name);
    remain -= items[i].weight;
    j = remain; //* move to column[remain]
    i--; //* move to top row
  } //* cell value > top value
  else i--;
}

console.log(solution);
