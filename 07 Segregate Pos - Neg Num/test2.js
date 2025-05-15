function merge() {}

merge();

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
//*     check: if left_arr < 0
//*                arr[k] = left_arr[i]

//*            else:
//*                arr[]

function segregate(arr) {
  const left_neg = [];
  const right_pos = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      left_neg.push(arr[i]);
      //   arr.splice(i, 1); //! mentor
    } else right_pos.push(arr[i]);
  }

  const seg = [...left_neg, ...right_pos];

  console.log(seg);

  return seg;
}

const arr = [6, -5, 12, 10, -9, -1];
segregate(arr);

//! Mentor (I don't understand this approach)

(function () {
  function segregate(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      // Move left pointer forward if it's already a negative number
      if (arr[left] < 0) {
        left++;
      }
      // Move right pointer backward if it's already a positive number
      else if (arr[right] > 0) {
        right--;
      }
      // Swap positive with negative
      else {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }

    return arr; // Now, original array is modified in-place
  }

  const arr = [6, -5, 12, 10, -9, -1];
  console.log(segregate(arr)); // Output: [-1, -5, -9, 10, 12, 6] (Negatives first, then positives)
})();
