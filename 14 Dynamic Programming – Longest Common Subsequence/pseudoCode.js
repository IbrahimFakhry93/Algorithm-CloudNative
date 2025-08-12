//! 24 – Dynamic Programming – Longest Common Subsequence – Algorithm – Code
const text_01 = "HELLOWORLD";
const text_02 = "OHELOD";

//& 1) Calculate LCS value

//? Define he length of the two texts:

// n = text_01.length
// m = text_02.length

//? Trick to define rows and columns of zeros
text_01 = " " + text_01;
text_02 = " " + text_02;

//? Define array for the results
//* const dp = []

//* dp[i][j] is the cell value

//? Define nested for loop to loop over rows and columns

//^ look up the slide

//^ outward loop: to loop over text_02 (rows)
for (let i = 0; i <= m; i++) {}

//^ inner loop: to loop over text_1 (columns)
for (let j = 0; j <= n; j++) {}

//? set conditions inside inner loop to:
// define rows and columns of zeros

if (i == 0 || j == 0) {
  dp[i][j] = 0;
}

// if character match
if (text_02[i] === text_01[j])
  dp[i][j] = 1 + dp[i - 1][j - 1]; //* 1 + top left corner
// if not match
else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); //* Max(top cell, left cell)

//? Print the LCS value
console.log(dp[m][n]);

//& 2) Get LCS characters

//* start from the bottom right
//* dp[m][n]
//! if (dp[m][n] > dp[m][n - 1)            :
//~   if (dp[m][n] === dp[m - 1][n])
//*        the current inherited from top (not match)
//*        move to top row

//*        (dp[m - 1][n])
//~   else
//*   current value is origin of match
//*   add the char to the solution
//*   move to the top row
//*        move to left column
//* move to left column

//? define empty string

let str = "";
let i = m;
let j = n;

//* loop backwardly over both rows and columns
while (i > 0 && j > 0) {
  if (dp[i][j] > dp[i][j - 1]) {
    if (dp[i][j] === dp[i - 1][j]) {
      i--; // move to top row
    } else {
      str = text_02[i] + str; // add the char to the solution
      i--;
      j--;
    }
  } else {
    j--; // move to left column
  }
}

//? print the string

console.log(str);
