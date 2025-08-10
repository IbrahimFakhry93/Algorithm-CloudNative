export default function mergeSort(arr, s, e) {
  if (s >= e) return;

  let m = Math.floor((s + e) / 2);

  mergeSort(arr, s, m);
  mergeSort(arr, m + 1, e);
  merge(arr, s, m, e);
}

function merge(arr, s, m, e) {
  const left_arr = [];
  const right_arr = [];
  const leftArr_length = m - s + 1;
  const rightArr_length = e - m;

  if (leftArr_length <= 0 || rightArr_length <= 0) return; // Guard against empty arrays

  for (let i = 0; i < leftArr_length; i++) {
    left_arr[i] = arr[s + i];
  }
  for (let i = 0; i < rightArr_length; i++) {
    right_arr[i] = arr[m + 1 + i];
  }

  console.log(arr);
  console.log(right_arr);
  console.log(left_arr);

  console.log("====================");

  let i = 0;
  let j = 0;
  let k = s;

  while (i < leftArr_length && j < rightArr_length) {
    if (left_arr[i].ratio >= right_arr[j].ratio) {
      arr[k] = left_arr[i];
      i++;
    } else {
      arr[k] = right_arr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr_length) {
    arr[k] = left_arr[i];
    i++;
    k++;
  }

  while (j < rightArr_length) {
    arr[k] = right_arr[j];
    j++;
    k++;
  }
}
