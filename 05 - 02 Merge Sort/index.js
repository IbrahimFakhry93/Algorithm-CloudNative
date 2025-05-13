//! 10 – Recursion – Divide & Conquer – Merge Sort – Algorithm

//? merge sort technique:

//* Split the original array into two arrays. (one left, one right)
//* then split each array into two arrays until the division result out a one element array
//* these split steps are called split levels
//* this split is done by recursion with different parameters by midpoint,
//* one array its end will be midpoint, and the other array its start (midpoint + 1)
//*  and the base case of the recursion, that the array become one element
//* and this programmatically expressed by: if (end_index === start_index) return;
//* which will break the recursion

//* loop on both of the arrays together
//* there is no nested loop as was in insertion sort, nested loop takes a lot of time
//* then compare first element in the right with the first element in the left.
//* the smaller element will be pushed to the original array

//* and then loop on the array that contained the smaller pushed element, and fix the loop in the another array
//* and repeat the compare again

//* by this technique, we will not loop over the whole numbers
//* so it's more efficient

//* if there are any elements still left in any of the splitted arrays
//* these elements are moved to the original element

//& Pseudo Code:
//? Divide and Recursion:
//* Define fn_mergerSort(arr,start,end);
//* fn inputs: arr[], start and end index inside fn_mergeSort()
//* if (start === end) break the recursion
//* calculate the midpoint = (end+start) / 2
//* call the fn_mergeSort() recursively twice with different parameters to split arr[]
//* call merge fn to split the two arrays

//^================

//? Merge part:

//* Define fn_merge(arr,start,midpoint,end);
//* fn inputs: the arr[], start, midpoint and end index
//* create new arras for each side
//* while loop to compare all items in the array and sort in the original array
//* move remain items in each array to the original array as they are
//* because at this point they are certainly sorted

//& code:

//* Define fn_mergeSort()
function mergeSort(arr, start, end) {
  //* fn inputs: arr[], start and end index inside fn_mergeSort()

  //* if (start === end) break the recursion
  if (start == end) return;
  //* calculate the midpoint = (start + end) / 2
  let midpoint = Math.floor((end + start) / 2);
  //* call the fn_mergeSort() recursively twice with different parameters
  mergeSort(arr, start, midpoint); //* merge sort for left
  mergeSort(arr, midpoint + 1, end); //* merge sort for right

  //* merge the two splitted arrays after recursion done
  merge(arr, start, midpoint, end);
}

//* Define fn_merge(arr,start,midpoint,end);
function merge(arr, start, midpoint, end) {
  //* fn inputs: the arr[], start, midpoint and end index

  //* create new arrays for each side and fill them by for loop

  const left_arr = [];
  const left_length = midpoint - start + 1;
  for (let i = 0; i < left_length; i++) {
    left_arr[i] = arr[i + start];
  }
  const right_arr = [];
  const right_length = end - midpoint;
  for (let j = 0; j < right_length; j++) {
    right_arr[j] = arr[midpoint + 1 + j];
  }

  //* while loop to compare all items in the array and sort in the original array
  let i,
    j = 0;
  let k = start;

  //* i: for left array
  //* j: for right array
  //* k: for original array (arr)
  while (left_arr.length > i && right_arr.length > j) {
    //* compare
    if (right_arr[j] <= left_arr[i]) {
      //* sort (place the smaller in the original array at index k)
      arr[k] = right_arr[j];
      j++;
    }
    //* compare
    else {
      //* sort (place the smaller in the original array at index k)
      arr[k] = left_arr[i];
      i++;
    }

    k++; //* after compare finish, move to the next index in the original array
    //* to place the next smaller number
  }

  //* move remain items in each array to the original array as they are (without comparing)
  //* by doing two separate while loops

  //^ note:
  //* one of these next loops only will be executed
  //* because one of the arrays will be finished sorted and other array still have items to loop on
  while (left_arr.length > i) {
    //^ note: no need to compare again
    //* because at this point they are certainly sorted
    arr[k] = left_arr[i]; //* k, i values are k++ and i++ from the last while loop above
    i++;
    k++;
  }

  while (right_arr.length > j) {
    arr[k] = right_arr[j];
    j++;
    k++;
  }
}

const arr = [9, 5, 1, 4];
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(`After sort: ${arr}`);

//! mentor

/*


  const left_arr = [];
  const left_length = midpoint - start + 1;
  for (let i = 0; i < left_length; i++) {
    left_arr[i] = arr[i + start]; //! define these indexes I found difficulty but after slow tracing
  }
  const right_arr = [];
  const right_length = end - midpoint;
  for (let j = 0; j < right_length; j++) {
    right_arr[j] = arr[midpoint + 1 + j]; //! define these indexes I found difficulty but after slow tracing
  }

*/

//& important notes about merge sort:

//* split the array into two parts (left and right)
//* code due to recursion, will continue division on left part till end (when start = end)
//* then will call merge function to merge sort these splits on left parts

//! then:
//* the code start to split the right part, till the end
//* then merge sort these splits on right parts

//* then merge sort the left and right
//^ look up the slides for more understanding

//^ note in recursion:

function mergeSort(arr, start, end) {
  if (start == end) return;

  let midpoint = Math.floor((end + start) / 2);
  mergeSort(arr, start, midpoint); //* merge sort for left
  mergeSort(arr, midpoint + 1, end); //* merge sort for right
  merge(arr, start, midpoint, end);
}

//^ the code sequence:
//* recursive call for left part:
//~   mergeSort(arr, start, midpoint), till the end
//* recursive call for right part:
//~   mergeSort(arr, midpoint + 1, end), till the end

//* regular call: merge fn for left part
//~     merge(arr, start, midpoint, end);
//* regular call: merge fn for right part
//~      merge(arr, start, midpoint, end);

//* note: the start and end params in  merge(arr, start, midpoint, end)
//* are different for each part (left and right)
//* but midpoint is same
