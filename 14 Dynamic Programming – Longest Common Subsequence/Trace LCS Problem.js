const text_01 = "HELLOWORLD"; // our first text
const text_02 = "OHELOD"; // our second text

// We “prepend” a space to work with 1-indexed positions.
const s1 = " " + text_01; // " HELLOWORLD"
const s2 = " " + text_02; // " OHELOD"

const n = s1.length - 1; // 10
const m = s2.length - 1; // 6

// Assume we have already filled the DP table using the LCS recurrence:
// if (s2[i] === s1[j]) dp[i][j] = dp[i-1][j-1] + 1
// else           dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
//
// For this example, the final result will be dp[m][n] = 5.
// (The LCS length is 5, and the LCS is "HELOD".)
//
// A simplified DP table (with s2 as rows and s1 as columns) would conceptually look like:
//
//         j →   0   1(H)  2(E)  3(L)  4(L)  5(O)  6(W)  7(O)  8(R)  9(L)  10(D)
//      i ↓
//       0   [ 0,   0,    0,    0,    0,    0,    0,    0,    0,    0,    0 ]
//       1(O)[ 0,   0,    0,    0,    0,    1,    1,    1,    1,    1,    1 ]
//       2(H)[ 0,   1,    1,    1,    1,    1,    1,    1,    1,    1,    1 ]
//       3(E)[ 0,   1,    2,    2,    2,    2,    2,    2,    2,    2,    2 ]
//       4(L)[ 0,   1,    2,    3,    3,    3,    3,    3,    3,    3,    3 ]
//       5(O)[ 0,   1,    2,    3,    3,    4,    4,    4,    4,    4,    4 ]
//       6(D)[ 0,   1,    2,    3,    3,    4,    4,    4,    4,    4,    5 ]
//
// (The numbers above come from following the recurrences “down” the table.)
//

/* --- Backtracking to Recover the LCS --- */

// One standard method is:
// 1. Start from the bottom-right cell (i = m, j = n).
// 2. While i > 0 and j > 0:
//    - If s2[i] === s1[j], that means this character is part of the LCS.
//      Prepend s2[i] to your result and move diagonally: i--, j--.
//    - Otherwise, if dp[i-1][j] >= dp[i][j-1], move up (i--),
//      else move left (j--).
//
// Let’s see how that gives "HELOD" step by step. (Remember: indices refer to the strings with a leading space.)
//
// Initial indices: i = 6, j = 10, dp[6][10] = 5
// -----------------------------------------------------------------
//? Step 1:
//   Compare s2[6] and s1[10]:
//   s2[6] is "D" and s1[10] is "D" → They match.
//   So, add "D" to the LCS and move diagonally: (i, j) becomes (5, 9).
//   LCS so far (built in reverse): "D"
//
//? Step 2:
//   Now at i = 5, j = 9, dp[5][9] = 4.
//   Compare s2[5] and s1[9]:
//   s2[5] is "O" and s1[9] is "L" → No match.
//   Look at dp values: If dp[5][9] equals dp[5][8] (or decide based on which neighbor is larger),
//   here both the left cell (dp[5][8]) and the cell above (dp[4][9]) are 4.
//   Typically you choose to move left (or up consistently when equal). Let's move left: set j = 8.
//
//? Step 3:
//   Now at i = 5, j = 8, dp[5][8] = 4.
//   Compare s2[5] = "O" with s1[8] = "R" → No match.
//   Check neighbors: again move left (j = 7).
//
//? Step 4:
//   Now at i = 5, j = 7, dp[5][7] = 4.
//   Compare s2[5] = "O" with s1[7] = "O" → They match!
//   Add "O" to the front of the LCS.
//   Now LCS becomes "O" + previous "D" = "OD".
//   Move diagonally: i = 4, j = 6.
//
//? Step 5:
//   At i = 4, j = 6, dp[4][6] = 3.
//   Compare s2[4] = "L" with s1[6] = "W" → No match.
//   Between dp[4][6] and its neighbors, we move left (j = 5).
//
//? Step 6:
//   At i = 4, j = 5, dp[4][5] = 3.
//   Compare s2[4] = "L" with s1[5] = "O" → No match.
//   Move left: j = 4.
//
//? Step 7:
//   At i = 4, j = 4, dp[4][4] = 3.
//   Compare s2[4] = "L" with s1[4] = "L" → They match!
//   Prepend "L". Now LCS becomes "L" + "OD" = "LOD".
//   Move diagonally: i = 3, j = 3.
//
//? Step 8:
//   At i = 3, j = 3, dp[3][3] = 2.
//   Compare s2[3] = "E" with s1[3] = "L" → No match.
//   In this case, if we compare the left cell dp[3][2] (which is 2) with the top cell dp[2][3] (which is 1),
//   we see they’re equal or the left value is not lower, so we move left: now j = 2.
//
//? Step 9:
//   At i = 3, j = 2, dp[3][2] = 2.
//   Compare s2[3] = "E" with s1[2] = "E" → They match!
//   Prepend "E": now LCS becomes "E" + "LOD" = "ELOD".
//   Move diagonally: i = 2, j = 1.
//
//? Step 10:
//   At i = 2, j = 1, dp[2][1] = 1.
//   Compare s2[2] = "H" with s1[1] = "H" → They match!
//   Prepend "H": now LCS becomes "H" + "ELOD" = "HELOD".
//   Diagonally move: i = 1, j = 0.
//
// Loop ends because j == 0.
//
// Final LCS (read in normal order): "HELOD"
//
/* ------------------------------------------------------ */

// Here’s the standard backtracking implementation for clarity:
let lcs = "";
let i = m,
  j = n;

// Standard backtracking algorithm:
while (i > 0 && j > 0) {
  if (s2[i] === s1[j]) {
    // A match is found; include this character.
    lcs = s2[i] + lcs;
    i--;
    j--;
  } else if (
    /* if cell above is greater or equal */ dp[i - 1][j] >= dp[i][j - 1]
  ) {
    i--; // Move upward.
  } else {
    j--; // Move leftward.
  }
}

console.log("LCS is:", lcs);

// For your particular DP table, this backtracking yields "HELOD".
