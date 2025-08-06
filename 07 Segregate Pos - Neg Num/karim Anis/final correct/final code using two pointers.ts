function segregateCorrectly1(arr: number[]): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Move left pointer to find a non-negative number
    while (left < right && arr[left] < 0) {
      left++;
    }
    // Move right pointer to find a negative number
    while (left < right && arr[right] >= 0) {
      right--;
    }

    // If pointers haven't crossed, swap them
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}
// Test with the example
const numbers1 = [12, -7, -5, 70, -3, 15];
console.log("Testing with example array:");
segregateCorrectly1([...numbers1]); // Use spread operator to preserve original array
/*

indices:  0   1   2   3   4   5
array:   [12, -7, -5, 70, -3, 15]
          L                   R



indices:  0    1    2   3   4   5
array:   [-3,  -7,  -5, 70, 12, 15]
             L             R


indices:  0    1    2    3   4   5
array:   [-3,  -7,  -5, 70, 12, 15]
                    R    L


*/

// -------------------------------------
// Step 1: Initial State
// -------------------------------------
const arr1 = [12, -7, -5, 70, -3, 15];
let left = 0;
let right = arr1.length - 1;

// Snapshot:
// indices:  0    1    2    3    4   5
// arr1ay:   [12,  -7,  -5,  70,  -3, 15]
//           L                         R

// -------------------------------------
// Step 2: Iteration 1
// -------------------------------------

// 2.1 Move left pointer to first non-negative
// arr1[0] = 12 is non-negative, so left stays at 0
while (left < right && arr1[left] < 0) {
  left++;
}

// 2.2 Move right pointer to first negative
// arr1[5] = 15 ≥ 0 → right → 4
// arr1[4] = -3 < 0 → stop
while (left < right && arr1[right] >= 0) {
  right--;
}

// indices:  0    1    2    3      4   5
// arr1ay:   [12,  -7,  -5,  70,  -3 , 15]
//             L                   R

// 2.3 Swap and move inward
if (left < right) {
  [arr1[left], arr1[right]] = [arr1[right], arr1[left]];
  left++;
  right--;
}

// After swap:
// arr1 = [-3, -7, -5, 70, 12, 15]
// left = 1, right = 3
// Snapshot:
// indices:  0    1    2    3    4   5
// arr1ay:   [-3,  -7,  -5,  70, 12, 15]
//                 L         R

// -------------------------------------
// Step 3: Iteration 2
// -------------------------------------

// 3.1 Move left pointer over negatives:
// arr1[1] = -7 < 0 → left → 2

// indices:  0    1    2    3    4   5
// arr1ay:   [-3,  -7,  -5,  70, 12, 15]
//                      L     R

// arr1[2] = -5 < 0 → left → 3
// arr1[3] = 70 ≥ 0 → stop
while (left < right && arr1[left] < 0) {
  left++;
}

// indices:  0    1    2    3    4   5
// arr1ay:   [-3,  -7,  -5,  70, 12, 15]
//                            R
//                            L

// 3.2 Move right pointer over non-negatives:
// arr1[3] = 70 ≥ 0 → right → 2
while (left < right && arr1[right] >= 0) {
  right--;
}

// indices:  0    1    2    3    4   5
// arr1ay:   [-3,  -7,  -5,  70, 12, 15]
//                      R     L
//

// 3.3 Check for swap
// Now left = 3, right = 2 → left < right is false → exit loop

// Final pointers cross:
// indices:  0    1    2    3    4    5
// arr1ay:   [-3,  -7,  -5,  70, 12,  15]
//                       R  L   ← loop terminates

// -------------------------------------
// Final Result
// -------------------------------------
// arr1 = [-3, -7, -5, 70, 12, 15]
