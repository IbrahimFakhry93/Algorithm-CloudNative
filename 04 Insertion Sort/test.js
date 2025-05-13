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

insertionSort(9, 5, 1, 4); //* 1 4 5 9

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

insertionSort(9, 5, 1, 4);
