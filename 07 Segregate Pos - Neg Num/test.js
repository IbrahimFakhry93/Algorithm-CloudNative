//* 1 - define function params: arr, s , m , e
//* 2 - define left_arr, right_arr
//* 3 - calc left_length = m - s + 1;
//*     calc right_length = e - m;

//* 4 - loop over arr and fill left_arr, right_arr
//*     for i=0, forward, i < left_length
//*       left_arr[i] = arr[i + s]
//*     for j=0, forward, j < right_length
//*        right_arr[j] = arr [m + 1 + j]

//* 5 - loop forward on both left_arr (i = 0) and right_arr (j = 0) and arr (k = s)
//*     check: while  i < left_length && left_arr[i] < 0
//*                arr[k++] = left_arr[i++]

//*     check: while  j < right_length && right_arr[j] < 0
//*                arr[k++] = right_arr[j++]

//* 6 - loop on both left and right arrays, to add remaining positive elements to arr

function segregateMerge(arr, s, e) {
  if (e == s) return;

  let m = Math.floor((s + e) / 2);

  segregateMerge(arr, s, m);
  segregateMerge(arr, m + 1, e);
  merge(arr, s, m, e);
}

function merge(arr, s, m, e) {
  let left_arr = [];
  let right_arr = [];

  const left_length = m - s + 1;
  const right_length = e - m;

  for (let i = 0; i < arr.length; i++) {
    left_arr[i] = arr[i + s];
  }
  for (let j = 0; j < arr.length; j++) {
    right_arr[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = s;

  while (i < left_length && left_arr[i] < 0) {
    arr[k++] = left_arr[i++];
  }
  while (j < right_length && right_arr[j] < 0) {
    arr[k++] = right_arr[j++];
  }

  while (i < left_length) {
    arr[k++] = left_arr[i++];
  }
  while (i < right_length) {
    arr[k++] = right_arr[j++];
  }
}

const arr = [6, -5, 12, 10, -9, -1];
segregateMerge(arr, 0, arr.length - 1);

console.log(`after segregate: ${arr}`);
