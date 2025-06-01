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
insertionSort2(7, arr2);
