//! 09 – Insertion Sort – Algorithm – Code – Analysis

//* interviews in good companies you can asked about one of the known algorithms

//& Algorithm

//* start a loop with counter i
//* starting by the second element in the data (i = 1 )
//~ his step above, divides the array into sorted list on the left and unsorted list on the right
//~ why on the left is sorted?
//~ because the list is only one element
//* because in code, it's zero index
//* and store the value of the second element in a key

//* compare this key value with elements values precede it
//* by applying a nested backward loop with counter j (j = i - 1 )
//~ if n[j] > key then n[j+1] = n[j]  (shift by one)

//* after finishing the loop of J when j value below 0
//~ then n[j+1] = key, note j here is -1 so -1 + 1 = 0
//~ so it's n[0] = key,

//& Pseudo Code:

//* define function with param (...arr)
//* define key = 0
//* for i = 1 forward i < arr.length
//*    key = arr[i]
//*   for j = i - 1 backward i >= 0
//*      if arr[j] > key then arr[j + 1] = arr[j]
//*      else break the loop
//*   end for nested loop
//*  arr[j + 1] = key
//* end

//* call the function

//& chatgpt revised pseudo code:

(function () {
  //& Title: Insertion Sort Algorithm – Pseudocode & Feedback
  //
  //?Note: This pseudocode integrates prior feedback to improve clarity and precision.
  //         It uses a descriptive function name, clear loop conditions, proper initialization,
  //         and inline commentary for study and later reference.
  //
  //* Function: insertionSort(arr)
  //* Purpose: Sorts an array, arr, using the Insertion Sort algorithm.
  function insertionSort(arr) {
    // Begin the algorithm
    //* Outer Loop: Iterate from the 2nd element (index 1) through the array.
    // for i = 1 to arr.length - 1 do
    //     key = arr[i]          // Set key as the current element to be inserted into the sorted portion.
    // j = i - 1             // Initialize j to the previous index, marking the last element in the sorted section.
    //* Inner Loop: Shift the sorted elements to the right.
    //* While there are elements in the sorted subarray and the current element is greater than key,
    //* move each element one position to the right.
    // while j >= 0 and arr[j] > key do
    //     arr[j + 1] = arr[j]  // Shift element rightward.
    //     j = j - 1            // Decrement j to continue checking previous elements.
    // end while
    //* Insert key into the correct spot.
    //     arr[j + 1] = key
    // end for
    // End the algorithm
    // return arr
  }

  //?Note: Example usage:
  //* To sort an array, call the function with the array as an argument.
  sortedArray = insertionSort([
    /* your sample values here */
  ]);
})();

//*=========================================================================

//& the code:

//* Ascending
function insertionSort(...arr) {
  let key = 0;

  for (let i = 1; i < arr.length; i++) {
    key = arr[i];

    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > key) arr[j + 1] = arr[j];
      else break;
    }

    arr[j + 1] = key;
  }

  console.log(arr);
  return arr;
}

insertionSort(9, 5, 1, 4);

//& the code:
//* Descending
function insertionSort(...arr) {
  let key = 0;

  for (let i = 1; i < arr.length; i++) {
    key = arr[i];

    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] < key) arr[j + 1] = arr[j];
      else break;
    }

    arr[j + 1] = key;
  }

  console.log(arr);
  return arr;
}
insertionSort(9, 5, 1, 4); //* [9, 5, 4, 1]
