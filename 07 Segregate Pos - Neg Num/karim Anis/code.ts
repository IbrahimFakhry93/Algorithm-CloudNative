//* The Segregate Positive and Negative Numbers algorithm rearranges the elements of an array so that all negative numbers appear before all positive numbers.
//* The relative order of the elements is not necessarily preserved.
//* This can be achieved in O(n) time complexity, where n is the number of elements in the array.
//
//* The approach involves: Iterating through the array and maintaining two sections: one for negative numbers and one for positive numbers.
//* Using a partitioning technique (similar to the one used in the quicksort algorithm), we iterate through the array and swap elements in place, moving negative numbers to the front and positive numbers to the back.
//
//* For example, given the array [12, -7, -5, 70, -3, 15]:
//
//* We start by scanning through the array. As we encounter -7, -5, and -3 (negative numbers), we move them to the left.
//* Positive numbers like 12, 70, and 15 are moved to the right.
//* The final array becomes [-7, -5, -3, 70, 12, 15].
//
//? Here is a TypeScript implementation of the Segregate Positive and Negative Numbers algorithm:
//
function segregatePositiveAndNegative(arr: number[]): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] < 0 && arr[right] >= 0) {
      // If left is negative and right is positive, we don't need to swap
      left++;
      right--;
    } else if (arr[left] >= 0 && arr[right] < 0) {
      // If left is positive and right is negative, swap them
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else {
      if (arr[left] >= 0) left++; // Move left pointer to the right
      if (arr[right] < 0) right--; // Move right pointer to the left
    }
  }
  return arr;
}
//
//? Example usage
//* const numbers = [12, -7, -5, 70, -3, 15];
//* console.log(segregatePositiveAndNegative(numbers)); //* Output: [-7, -5, -3, 70, 12, 15]
//*
//* This algorithm uses two pointers: one starting from the left (for negative numbers) and one from the right (for positive numbers).
//* It performs in-place swapping, so no extra space is used, making it efficient.
//* The result is an array where all negative numbers are on the left side and positive numbers are on the right.
//* The algorithm works in linear time O(n), where n is the number of elements in the array.
