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
  console.log("                                                    ");
  console.log(`s: ${start}, m: ${midpoint}, e:${end}`);
  console.log("                                                    ");

  console.log("original_arr before merge: ");
  console.log(arr);
  console.log("                                                    ");
  console.log(`left_arr:`);
  console.log(left_arr);
  console.log("                                                    ");
  console.log(`right_arr:`);
  console.log(right_arr);

  //* while loop to compare all items in the array and sort in the original array
  let i = 0,
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

  console.log("                                                    ");
  console.log("original_arr after merge: ");
  console.log(arr);
  console.log("                                                    ");
  console.log("===============================================");
}

const arr = [9, 5, 1, 4];
mergeSort(arr, 0, arr.length - 1);
// console.log(`After sort: ${arr}`);
