// For example, given the array [5, 2, 4, 6, 1, 3]:

// Start with 5 (already sorted).
// Insert 2: compare with 5, shift 5 right, insert 2 at the beginning → [2, 5, 4, 6, 1, 3].
// Insert 4: compare with 5, shift 5, and insert 4 → [2, 4, 5, 6, 1, 3].
// Insert 6: already in correct position.
// Insert 1: shift 6, 5, 4, 2, and insert 1 at the beginning → [1, 2, 4, 5, 6, 3].
// Insert 3: shift 6, 5, 4, and insert 3 → [1, 2, 3, 4, 5, 6].

//* It is efficient for small datasets or nearly sorted arrays but performs poorly on large lists (O(n²) time complexity).

// Here is a practical TypeScript implementation of insertion sort:

function insertionSort2(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key, to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage
const numbers = [5, 2, 4, 6, 1, 3];
console.log(insertionSort2(numbers)); // Output: [1, 2, 3, 4, 5, 6]
// This implementation sorts the array in place and returns the sorted array.
// It uses a while loop to shift elements and insert the current key into its correct position.
// This approach is practical for situations where simplicity is more important than raw speed,
// such as sorting small user input or nearly sorted lists in web applications.
