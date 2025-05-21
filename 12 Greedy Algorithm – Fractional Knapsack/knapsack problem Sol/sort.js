function mergeCall(arr, s, e) {
  if (e == s) return;

  const m = Math.floor((e + s) / 2);

  mergeCall(arr, s, m);
  mergeCall(arr, m + 1, e);
  merge(arr, s, m, e);
}

function merge(arr, s, m, e) {
  let left_arr = [];
  let right_arr = [];

  const left_length = m - s + 1;
  const right_length = e - m;

  for (let i = 0; i < left_length; i++) {
    left_arr[i] = arr[s + i];
  }
  for (let j = 0; j < right_length; j++) {
    right_arr[j] = arr[m + 1 + j];
  }

  //*===================

  let i = 0;
  let j = 0;
  let k = s;

  while (i < left_length && j < right_length) {
    if (left_arr[i] <= right_arr[j]) {
      arr[k] = left_arr[i];
      i++;
    } else {
      arr[k] = right_arr[j];
      j++;
    }

    k++;
  }
  while (i < left_length) {
    arr[k] = left_arr[i];
    k++;
    i++;
  }
  while (j < right_length) {
    arr[k] = right_arr[j];
    k++;
    j++;
  }

  //   console.log(arr);
}

const items = [9, 3, 2, 1];
mergeCall(items, 0, items.length - 1);
//  if (left_arr[i].ratio >= right_arr[j].ratio)

console.log(items);
