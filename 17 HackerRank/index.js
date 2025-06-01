function searchIndex(v, s, e, arr) {
  if (s > e) return -1;
  const m = Math.floor((s + e) / 2);

  if (v === arr[m]) return m; //! i thought this is the base condition

  if (v > arr[m]) {
    searchIndex(v, m + 1, e, arr);
  } else searchIndex(v, s, m - 1, arr);
}

const arr = [1, 4, 5, 7, 9, 12];
const v = 4;

// searchIndex(v, 0, arr.length - 1, arr);
// console.log(searchIndex(v, 0, arr.length - 1, arr));

//! mentor
(function () {
  function searchIndex(v, s, e, arr) {
    if (s > e) return -1; //! I forgot when the index is not existed, because I'm searching for something existed
    const m = Math.floor((s + e) / 2);

    if (v === arr[m]) return m; //! i thought this is the base condition

    if (v > arr[m]) {
      return searchIndex(v, arr[m + 1], e, arr); //! I was searching by value while my intention in my mind to search by index
    } else return searchIndex(v, s, arr[m - 1], arr);
  }

  const arr = [1, 4, 5, 7, 9, 12];
  const v = 4;

  //   searchIndex(v, 0, arr.length - 1, arr);
  //   console.log(searchIndex(v, 0, arr.length - 1, arr));
})();

//*=========================================================================================================
//! I couldn't do it iteratively by myself
(function () {
  function searchIndexIterative(v, arr) {
    let s = 0;
    let e = arr.length - 1;
    let m;
    while (s <= e) {
      m = Math.floor((s + e) / 2);

      if (v === arr[m]) return m;

      if (v > arr[m]) s = m + 1;
      else e = m - 1;
    }

    return -1;
  }

  const arr = [1, 4, 5, 7, 9, 12];
  const v = 4;

  //   console.log(searchIndexIterative(v, arr));
})();

//*=========================================================================================================

(function () {
  function compareTriplets(a, b) {
    if (a.length != b.length) return;
    let arr = new Array(2).fill(0);

    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) ++arr[0];
      if (b[i] > a[i]) ++arr[1];
      else continue;
    }

    return arr;
  }

  //   console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
})();

//! mentor
(function () {
  function compareTriplets(a, b) {
    if (a.length != b.length) return;
    let arr = new Array(2).fill(0);
    let count = 0; //! error
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) arr[0] = ++count;
      if (b[i] > a[i]) arr[1] = ++count;
      else continue;
    }

    return arr;
  }

  //   console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
})();

//*=====================================================================================
//! mentor

(function () {
  function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
      sum += ar[i];
      //! arr instead of ar (error)
      //!  return sum;
    }
    return sum;
    return BigInt(sum);
  }

  //   console.log(
  //     aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
  //   );
})();

//*=====================================================================================

(function () {
  function isStrictlySquareMatrix(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) return false; // Ensure it's a valid matrix

    let rowCount = matrix.length;

    return matrix.every((row) => row.length === rowCount); // Ensure all rows have equal columns
  }

  // Example usage:
  const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const nonSquareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2], // Not a square matrix
  ];

  //   console.log(isStrictlySquareMatrix(squareMatrix)); // Output: true
  //   console.log(isStrictlySquareMatrix(nonSquareMatrix)); // Output: false
})();
//*=====================================================================================
(function () {
  function diagonalDifference(sqArr) {
    // Write your code here

    if (!Array.isArray(sqArr) || sqArr.length === 0) return false;
    const sqArrLength = sqArr.length;
    for (let i = 0; i < sqArrLength; i++) {
      if (sqArrLength !== sqArr[i].length) return false;
    }

    //? or:
    // Ensure all rows have the same length (square matrix check)
    // const size = sqArr.length;
    //  if (!sqArr.every((row) => row.length === size)) return false;

    let sumDia1 = 0;
    let sumDia2 = 0;

    for (let i = 0; i < sqArrLength; i++) {
      sumDia2 += sqArr[i][sqArrLength - 1 - i];
      sumDia1 += sqArr[i][i];
    }

    return Math.abs(sumDia1 - sumDia2);
  }

  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

  const arr2 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];

  diagonalDifference(arr);
  diagonalDifference(arr2);

  //   console.log(diagonalDifference(arr2));
})();
//*=================================================================================

(function () {
  function plusMinus(arr) {
    // Write your code here
    const n = arr.length;
    let ratio1 = 0,
      ratio2 = 0,
      ratio3 = 0;
    let sum1 = 0,
      sum2 = 0,
      sum3 = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] > 0) sum1++;
      if (arr[i] < 0) sum2++;
      if (arr[i] === 0) sum3++;
    }

    ratio1 = sum1 / n;
    ratio2 = sum2 / n;
    ratio3 = sum3 / n;

    console.log(ratio1.toFixed(6));
    console.log(ratio2.toFixed(6));
    console.log(ratio3.toFixed(6));
  }

  const arr = [-4, 3, -9, 0, 4, 1];

  //   plusMinus(arr);
})();
//*=================================================================================
(function () {
  function stairCase(n) {
    for (let i = 0; i < n; i++) {
      let line = "";
      for (let j = 0; j < i + 1; j++) {
        line += "#";
      }
      console.log(line);
    }
  }

  // stairCase(4);
})();

//! mentor
//! icouldn't invert the triangle but i know the space correlation but not he exact format  n - i - 1
(function () {
  function stairCase(n) {
    for (let i = 0; i < n; i++) {
      let line = " ".repeat(n - i - 1) + "#".repeat(i + 1);
      console.log(line);
    }
  }

  // stairCase(4);

  //! c++

  //   #include <iostream>
  // #include <string>

  // void stairCase(int n) {
  //     for (int i = 0; i < n; i++) {
  //         std::string spaces(n - i - 1, ' ');  // Generates leading spaces
  //         std::string hashes(i + 1, '#');      // Generates '#' symbols
  //         std::cout << spaces << hashes << std::endl;
  //     }
  // }

  // int main() {
  //     stairCase(4);
  //     return 0;
  // }
})();

//! without .repeat
(function () {
  function stairCase(n) {
    for (let i = 0; i < n; i++) {
      let spaces = "";
      let hashes = "";

      // Loop to add spaces
      for (let j = 0; j < n - i - 1; j++) {
        spaces += " ";
      }

      // Loop to add hashes
      for (let k = 0; k < i + 1; k++) {
        hashes += "#";
      }

      console.log(spaces + hashes);
    }
  }

  // stairCase(4);
})();
//*=============================================================================================================================

//& Mini-Max Sum
(function () {
  //& My Solution

  //! I solve right from the first time but I can't strace it in my mind
  function miniMaxSum2(arr) {
    // Write your code here

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = 0; j < arr.length; j++) {
        if (i === j) continue;

        sum += arr[j];
      }

      if (sum > max) max = sum;
      if (sum < min) min = sum;
    }

    console.log(min, max);
  }

  const arr = [1, 2, 3, 4, 5];

  // miniMaxSum2(arr);
})();

//& Second Solution:
//! I thought about it but I didn't do it firstly

(function () {
  function miniMaxSum(arr) {
    // Write your code here

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i] > max) max = arr[i];
      if (arr[i] < min) min = arr[i];
    }

    const maxSum = sum - min;
    const minSum = sum - max;

    // console.log(minSum, maxSum);
  }

  const arr = [1, 2, 3, 4, 5];

  // miniMaxSum(arr);
})();

//! this problem  Mini-Max Sum is not Greedy Algorithm approach:

//& Title: MinMax Sum Problem & Greedy Algorithm Discussion
//? Note: This snippet outlines the logic behind calculating the minimum and maximum sums
//? by summing exactly four out of five integers, along with a discussion on why this is not a greedy algorithm.

//* Problem Overview:
//* Given five positive integers, we need to determine:
//*   - The minimum sum obtainable by summing exactly four integers.
//*   - The maximum sum obtainable by summing exactly four integers.
//*
//* Mathematical Insight:
//*   - Total Sum = a + b + c + d + e
//*   - Minimum Sum = Total Sum - (Maximum element)
//*   - Maximum Sum = Total Sum - (Minimum element)
//*
//* Discussion on Greedy Algorithm:
//*   - Greedy algorithms build a solution iteratively by making locally optimal choices.
//*   - In this problem, we are not making iterative "choices" but rather using global information
//*     (the total sum and the extreme values) to calculate the result in one or two passes.
//*   - While "discarding" the largest or smallest element might seem like a greedy step,
//*     it is actually a direct computation based on mathematical properties, not an iterative strategy.

//* Pseudocode Representation:
/*
   Input: five positive integers stored in an array "arr"
    totalSum = sum(arr)         // Calculate the total sum of all elements.
    minElement = min(arr)       // Find the minimum element in the array.
    maxElement = max(arr)       // Find the maximum element in the array.

    minSum = totalSum - maxElement  // Omitting the maximum provides the minimum sum.
    maxSum = totalSum - minElement  // Omitting the minimum provides the maximum sum.

   Output:
    Print minSum and maxSum (space-separated).
*/

//* Conclusion:
//* The solution relies on overall data properties rather than greedy, step-by-step decision making.
//* It is efficient because it computes required values in a constant number of passes over the array.

//*=============================================================================================================================

//& Birthday Cake Candles

// You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
//  Your task is to count how many candles are the tallest.

function birthdayCakeCandles(candles) {
  // Write your code here
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) max = candles[i];
  }
  let count = 0;
  console.log(max);
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) count++;
  }

  return count;
}

const candles = [3, 2, 1, 3];

// console.log(birthdayCakeCandles(candles));

//& Title: Birthday Cake Candles - Efficiency and Time Complexity Discussion
//? Note: This snippet outlines the time complexity of the provided solution and discusses a potential one-pass optimization.

//^ Explanation:
//* The given solution uses two loops:
//*   1. The first loop finds the maximum value in the array in O(n) time.
//*   2. The second loop counts how many times this maximum value appears, also in O(n) time.
//*
//! Therefore, the overall time complexity is O(n) + O(n) = O(n).
//*
//* While you could combine these two loops into one (tracking both the maximum and its count simultaneously),
//* the asymptotic time complexity would remain O(n). The benefit of a single pass would be a lower constant factor,
//* but it won’t change the worst-case performance.

//* Alternative Single-Pass Approach (as a commentary, not a required solution):
//~ combine both loops into a single loop (by tracking the maximum value and its count simultaneously)
//! mentor
/*
function birthdayCakeCandles(candles) {
    let maxHeight = 0;
    let count = 0;
    for (const height of candles) {
        if (height > maxHeight) {
            maxHeight = height;
           ! count = 1;
        } else if (height === maxHeight) {
           ! count++;
        }
    }
    return count;
}
*/

//? Summary:
//* - The current solution is O(n) in time complexity.
//* - Combining loops might reduce the number of iterations in practice, but the asymptotic complexity remains O(n).
//*=============================================================================================================================

//& Time Conversion
(function () {
  function timeConversion(s) {
    // Write your code here
    let match = "";
    const reg = /^(?<hours>\d{2}):\d{2}:\d{2}(?<time>PM|AM)$/g;
    while ((match = reg.exec(s))) {
      console.log(match.groups);
    }

    // const lastTwo = s.match(/(..)$/)[1];
    // cl
    // if (lastTwo === "PM")

    const time = s.slice(-2);
    const hours = s.slice(0, 2);
    console.log(time, hours);

    const arr = s.split(":");
    // console.log(arr);

    // console.log(arr[2].match(/AM/));

    if (arr[0] === "12" && arr[2].match(/AM/)) {
      arr[0] = +arr[0] - 12 + "0";
      arr[2] = arr[2].slice(0, -2);
      console.log(arr.join(":"));
    }
    if (arr[0] < "12" && arr[2].match(/PM/)) {
      arr[0] = +arr[0] + 12;
      arr[2] = arr[2].slice(0, -2);
      console.log(arr.join(":"));
    }
  }

  const s = "07:05:45PM";
  const s2 = "12:01:00AM";
  // timeConversion(s2);
  // timeConversion(s);
})();

(function () {
  function timeConversion2(s) {
    const arr = s.split(":");
    if (arr[0] === "12" && arr[2].match(/AM|PM/)) {
      arr[0] = "00";
      arr[2] = arr[2].slice(0, -2);
      console.log(arr.join(":"));
      s = arr.join(":");
      return s;
    }
    if (arr[0] < "12" && arr[2].match(/PM/)) {
      arr[0] = +arr[0] + 12;
      arr[2] = arr[2].slice(0, -2);
      console.log(arr.join(":"));
      s = arr.join(":");
      return s;
    }
  }

  const s = "07:05:45PM";
  const s2 = "12:01:00PM";
  timeConversion2(s2);
  timeConversion2(s);
})();

//*============================
//& chatgpt correct
(function () {
  function timeConversion2(s) {
    // Split the time string into components
    const arr = s.split(":");
    // Extract the period (AM or PM)
    const period = arr[2].slice(-2);
    // Remove the period from the seconds
    arr[2] = arr[2].slice(0, -2);

    // Conversion for AM
    if (period === "AM") {
      if (arr[0] === "12") {
        // 12 AM should be converted to 00
        arr[0] = "00";
      }
      // For other AM hours, keep the hour unchanged
    }
    // Conversion for PM
    else if (period === "PM") {
      if (arr[0] !== "12") {
        // For PM times other than 12 PM, add 12 to convert
        arr[0] = String(Number(arr[0]) + 12);
      }
    }

    // Reassemble the converted time string
    const result = arr.join(":");
    console.log(result);
    return result;
  }

  // Test cases
  const s = "07:05:45PM"; // should become "19:05:45"
  const s2 = "12:01:00PM"; // should remain "12:01:00"
  const s3 = "12:00:00AM"; // should become "00:00:00"
  const s4 = "01:00:00AM"; // should remain "01:00:00"

  timeConversion2(s);
  timeConversion2(s2);
  timeConversion2(s3);
  timeConversion2(s4);
})();
