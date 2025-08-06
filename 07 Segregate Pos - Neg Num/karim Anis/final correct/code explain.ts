function segregateCorrectly2(arr: number[]): number[] {
  console.log("Initial array:", [...arr]); // Track initial state

  let left = 0;
  let right = arr.length - 1;

  console.log("\nStarting pointers:");
  console.log(`Left pointer starts at index ${left}:`, arr[left]);
  console.log(`Right pointer starts at index ${right}:`, arr[right]);

  while (left < right) {
    console.log("\nCurrent state:");
    console.log(`Left pointer at index ${left}:`, arr[left]);
    console.log(`Right pointer at index ${right}:`, arr[right]);

    // Move left pointer to find a non-negative number
    while (left < right && arr[left] < 0) {
      console.log(
        `Moving left pointer forward (found negative ${arr[left]} at index ${left})`
      );
      left++;
    }

    // Move right pointer to find a negative number
    while (left < right && arr[right] >= 0) {
      console.log(
        `Moving right pointer backward (found non-negative ${arr[right]} at index ${right})`
      );
      right--;
    }

    // If pointers haven't crossed, swap them
    if (left < right) {
      console.log(
        `\nSwapping positions ${left} (${arr[left]}) and ${right} (${arr[right]})`
      );
      [arr[left], arr[right]] = [arr[right], arr[left]];
      console.log("After swap:", [...arr]);
      left++;
      right--;
    }
  }

  console.log("\nFinal array:", [...arr]);
  return arr;
}

// Test with the example
const numbers = [12, -7, -5, 70, -3, 15];
console.log("Testing with example array:");
segregateCorrectly2([...numbers]); // Use spread operator to preserve original array

// Additional test cases
console.log("\nTesting with different scenarios:");
console.log("\nTest case 2: More negatives");
const test2 = [-1, -2, -3, 1, 2, 3];
segregateCorrectly2([...test2]);

console.log("\nTest case 3: Already segregated");
const test3 = [-1, -2, 1, 2];
segregateCorrectly2([...test3]);

// Output
// Testing with example array:
// Initial array: [ 12, -7, -5, 70, -3, 15 ]

// Starting pointers:
// Left pointer starts at index 0: 12
// Right pointer starts at index 5: 15

// Current state:
// Left pointer at index 0: 12
// Right pointer at index 5: 15
// Moving right pointer backward (found non-negative 15 at index 5)

// Swapping positions 0 (12) and 4 (-3)
// After swap: [ -3, -7, -5, 70, 12, 15 ]

// Current state:
// Left pointer at index 1: -7
// Right pointer at index 3: 70
// Moving left pointer forward (found negative -7 at index 1)
// Moving left pointer forward (found negative -5 at index 2)

// Final array: [ -3, -7, -5, 70, 12, 15 ]

// Testing with different scenarios:

// Test case 2: More negatives
// Initial array: [ -1, -2, -3, 1, 2, 3 ]

// Starting pointers:
// Left pointer starts at index 0: -1
// Right pointer starts at index 5: 3

// Current state:
// Left pointer at index 0: -1
// Right pointer at index 5: 3
// Moving left pointer forward (found negative -1 at index 0)
// Moving left pointer forward (found negative -2 at index 1)
// Moving left pointer forward (found negative -3 at index 2)
// Moving right pointer backward (found non-negative 3 at index 5)
// Moving right pointer backward (found non-negative 2 at index 4)

// Final array: [ -1, -2, -3, 1, 2, 3 ]

// Test case 3: Already segregated
// Initial array: [ -1, -2, 1, 2 ]

// Starting pointers:
// Left pointer starts at index 0: -1
// Right pointer starts at index 3: 2

// Current state:
// Left pointer at index 0: -1
// Right pointer at index 3: 2
// Moving left pointer forward (found negative -1 at index 0)
// Moving left pointer forward (found negative -2 at index 1)
// Moving right pointer backward (found non-negative 2 at index 3)

// Final array: [ -1, -2, 1, 2 ]

//? Key observations from the tracing:

//* The algorithm maintains O(n) time complexity because each element is visited at most twice (by either pointer)
//* Space complexity is O(1) as it only uses two pointers and performs in-place swaps
//* The algorithm works efficiently because:
//* It moves both pointers simultaneously when swapping
//* It skips over elements that are already in their correct position
//* It stops early when pointers cross each other
//* As shown in the interactive example above, you can experiment with different inputs to see how the algorithm handles various scenarios.
//* Try modifying the test cases to understand how the pointers move and elements are swapped
