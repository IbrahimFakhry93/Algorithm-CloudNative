//! 13 – Binary Search – Algorithm – Code

//^ look up the slides
//^ and Adel Nasim explanation folder

//? Idea of binary search:

//* to move sorted array indexes of start and end until the key equals the value at the midpoint

//* the key: is the value we search for

//& analysis:

//* this algorithm can't be O(n) because we didn't loop over every element in the array
//* in contrast, we divide the array and we change the conditions values of the loop
//* by moving the start and end indexes by the half of the array
//* so the loop condition values are incremented one by one

//& ask chatgpt to help you
//* with examples to test what's the order or complexity of a code
//* O(n) or O(log(n))
//* if for ex. for loop with  i+=2

//& code:

//& iterative form
function binarySearch(key, ...arr) {
  let s = 0;
  let e = arr.length - 1;
  while (e >= s) {
    let m = Math.floor((s + e) / 2);
    if (key == arr[m]) return m;

    if (key > arr[m]) s = m + 1;
    else e = m - 1;
  }
  return -1;
}

// console.log(binarySearch(3, 1, 2, 4, 5, 6, 7, 8, 9));

//& recursive form

const arr = [1, 2, 4, 5, 6, 7, 8, 9];
const e = arr.length - 1;

function binarySearchRec(key, s, e, arr) {
  let m = Math.floor((s + e) / 2);
  if (key == arr[m]) return m;

  if (key > arr[m]) binarySearchRec(key, m + 1, e, ...arr);
  if (key < arr[m]) binarySearchRec(key, s, m - 1, ...arr);
  else return -1;
}

console.log(binarySearchRec(5, 0, e, arr));
