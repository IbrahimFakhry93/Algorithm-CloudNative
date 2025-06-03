//& pseudo code for insertion sort

//^ outer loop
//* for i = 1 forward i < arr.length
//*   key = arr[i]
//*  for j = i - 1 backward i >= 0
//*    if arr[j] > key then arr[j+1]= arr[j] shifting
//*    else beak
//*  end
//*  arr[j+1] = key
//*  end
//^ inner loop

//& Insertion Sort Hacker Rank
//! mentor
//! I didn't notice the issue if no insertion occurs
//! also:  console.log(arr.join(" "));  , hacker rank requirement
function insertionSort1(n, ...arr) {
  // Write your code here

  let key = arr[n - 1];
  let isInsert = false;
  for (let i = n - 1; i > 0; i--) {
    if (key < arr[i - 1]) {
      arr[i] = arr[i - 1];
      console.log(arr.join(" "));
    } else {
      arr[i] = key;
      isInsert = true;
      console.log(arr.join(" "));
      break;
    }
  }

  if (!isInsert) {
    arr[0] = key;

    console.log(arr.join(" "));
  } //* if no insertion
}

// insertionSort1(5, 2, 4, 6, 8, 3);
// insertionSort1(5, 4, 5, 6, 8, 3);
// insertionSort1(5, 1, 2, 4, 5, 3);

// function insertionSort11(n, ...arr) {
//   // Write your code here

//   let key = arr[n - 1];
//   let i = arr.length - 1;
//   while (i > 0) {
//     arr[i] = arr[i - 1];

//     if (key < arr[i - 1]) {
//       arr[i] = arr[i - 1];
//       console.log(arr);
//     } else {
//       arr[i] = key;
//       console.log(arr);
//     }

//     --i;
//   }

//   return arr;
// }

// insertionSort1(5, 2, 4, 6, 8, 3);
// insertionSort11(5, 1, 2, 4, 5, 3);

//*=====================

//& Title: Handling Smallest Element Insertion in InsertionSort1
//? Note: This snippet explains why the key might not be inserted during the for-loop
//? and describes the necessary extra step to handle the case when the key is smaller than every element.

//*!Explanation:
//* In your insertionSort1 algorithm, you iterate from the rightmost element toward the left.
//* You compare the key (stored value from the rightmost position) with each element at index i-1.
//* - In the normal case (when a left element is less than or equal to the key), you enter the else block,
//*   insert the key, print the array state, and then break out of the loop.
//~ - In the smallest element case, every element is greater than the key so the loop always enters the if
//*   branch to shift each element to the right. As a result, the else block is never triggered,
//*   and the key is never inserted into arr[0].
//*
//! What You Need to Do:
//^ After the loop completes:
//*   1. Check if an insertion has been performed (using a flag or by verifying the position of the key).
//*   2. If no insertion occurred during the loop, manually insert the key at arr[0].
//*   3. Print the final state of the array.
//*
//* This extra step ensures that when the key is the smallest element, it is placed at the beginning,
//* which is necessary for passing all tests on HackerRank.

//*=====================================================

function insertionSort2(n, arr) {
  // Write your code here

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > key) arr[j + 1] = arr[j];
      else break;
    }
    //! insertion
    // console.log(j);
    // console.log(arr[j + 1]);
    arr[j + 1] = key;
    console.log(arr);
  }
}
// const arr = [1, 4, 3, 5, 6, 2];
// insertionSort2(6, arr);

const arr2 = [3, 4, 7, 5, 6, 2, 1];
// insertionSort2(7, arr2);

//*=====================================================

//& BigSort:

function mergeSort(arr, s, e) {
  if (e == s) return;
  let m = Math.floor((s + e) / 2);
  mergeSort(arr, s, m);
  mergeSort(arr, m + 1, e);
  merge(arr, s, m, e);
}

function merge(arr, s, m, e) {
  const leftArr = [];
  const rightArr = [];
  const leftLength = m - s + 1;

  const rightLength = e - m;

  for (let i = 0; i < leftLength; i++) {
    leftArr[i] = arr[s + i];
  }
  for (let j = 0; j < rightLength; j++) {
    rightArr[j] = arr[m + 1 + j];
  }

  console.log(`s: ${s}, m: ${m}, e:${e}`);
  console.log("                                                    ");

  console.log("original_arr before merge: ");
  console.log(arr);
  console.log("                                                    ");
  console.log(`left_arr:`);
  console.log(leftArr);
  console.log("                                                    ");
  console.log(`right_arr:`);
  console.log(rightArr);

  let j = 0;
  let i = 0;
  let k = s;

  while (i < leftLength && j < rightLength) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }

    k++;
  }

  while (i < leftLength) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  while (j < rightLength) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }

  console.log("                                                    ");
  console.log("original_arr after merge: ");
  console.log(arr);
  console.log("===============================================");
}

const arr = [
  8,
  1,
  2,
  100,
  12303479849857341718340192371n, // Use 'n' for BigInt in JavaScript
  3084193741082937n,
  3084193741082938n,
  111,
  200,
];
// console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log("the enddddddddddddddddddddddddddddddddddddddd");
console.log(arr);

//*======================================================================================

//& BigSort:

//^ using built-in sort method
function bigSorting(unsorted) {
  // Sort the array using a custom comparator:
  // 1. If two strings have different lengths, the one with fewer digits represents a smaller number.
  // 2. If the strings have the same length, compare them lexicographically.
  unsorted.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length; // shorter string means smaller number
    } else {
      return a.localeCompare(b); // if same length, lexicographical comparison works
    }
  });

  return unsorted;
}

const unsorted = [
  8,
  1,
  2,
  100,
  12303479849857341718340192371n, // Use 'n' for BigInt in JavaScript
  3084193741082937n,
  3084193741082938n,
  111,
  200,
];

bigSorting(unsorted);

//~================================================================================

//^ using mergeSort approach:

(function () {
  function bigSorting(unsorted) {
    // Use our merge sort function to sort the array.
    return mergeSort(unsorted);
  }

  function mergeSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted.
    if (arr.length <= 1) return arr;

    // Find the middle index.
    const mid = Math.floor(arr.length / 2);

    // Recursively sort the left and right halves.
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves.
    return merge(left, right);
  }

  function merge(left, right) {
    const sorted = [];
    let i = 0,
      j = 0;

    // While both arrays have elements, compare the current elements using our custom comparator.
    while (i < left.length && j < right.length) {
      if (compareNumericStrings(left[i], right[j]) <= 0) {
        sorted.push(left[i]);
        i++;
      } else {
        sorted.push(right[j]);
        j++;
      }
    }

    // If any elements remain in the left or right, add them to the result.
    while (i < left.length) {
      sorted.push(left[i]);
      i++;
    }
    while (j < right.length) {
      sorted.push(right[j]);
      j++;
    }

    return sorted;
  }

  function compareNumericStrings(a, b) {
    // Compare by length first.
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    // If lengths are equal, compare lexicographically.
    return a.localeCompare(b);
  }

  // Example usage:
  // Suppose we have an unsorted array of numeric strings:
  const unsorted = [
    "31415926535897932384626433832795",
    "1",
    "3",
    "10",
    "3",
    "5",
  ];

  // The solution returns the sorted array:
  const sorted = bigSorting(unsorted);
  console.log(sorted);
})();
