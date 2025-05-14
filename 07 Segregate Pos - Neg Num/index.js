//! 14 – Segregate Positive and Negative Numbers – Algorithm

//* segregate means separation

//* we will merge sort technique but we wil overcome the sort logic part

//& pseudo code of merge sort:

//* define function params arr, sar, end

function segregate(arr, s, e) {
  if (e == s) return;

  let m = Math.floor((s + e) / 2);

  segregate(arr, s, m);
  segregate(arr, m + 1, e);
  merge(arr, s, m, e);
}

function merge(arr, s, m, e) {
  let left_arr = [];
  let right_arr = [];

  const left_length = m - s + 1;
  const right_length = e - s;

  for (let i = 0; i < left_length; i++) {
    left_arr[i] = arr[s + i]; //! mentor
  }
  for (let j = 0; j < right_length; j++) {
    right_arr[j] = arr[m + 1 + j]; //! mentor
  }
  let i = 0,
    j = 0;
  let k = s; //! mentor

  while (i < left_length) {
    if (left_arr[i] < 0) {
      arr[k] = left_arr[i];
    }

    i++;
    k++;
  }
  while (j < right_length) {
    if (right_arr[j] < 0) {
      arr[k] = right_arr[j];
    }

    j++;
    k++;
  }

  while (left_length > i) {
    //^ note: no need to compare again
    //* because at this point they are certainly sorted
    arr[k] = left_arr[i]; //* k, i values are k++ and i++ from the last while loop above
    i++;
    k++;
  }

  while (right_length > j) {
    arr[k] = right_arr[j];
    j++;
    k++;
  }
}

const arr = [9, -3, 5, -2, -8, -6, 1, 3];
const e = arr.length - 1;
mergeAlgo(arr, 0, e);
console.log(`After segregate: ${arr}`);
