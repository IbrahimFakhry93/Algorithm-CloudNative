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

  stairCase(4);

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

  stairCase(4);
})();
