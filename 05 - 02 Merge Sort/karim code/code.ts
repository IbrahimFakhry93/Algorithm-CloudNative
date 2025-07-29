//* Merge Sort is a divide-and-conquer algorithm that splits the array into two halves,
//* recursively sorts each half, and then merges the two sorted halves back together.

//? Merge sort Application
//* It efficiently handles large datasets with a time complexity of O(n log n),
//* which is much faster than algorithms like Bubble Sort and Insertion Sort for large arrays.
//* Merge Sort is particularly useful for large datasets
//* or when stability (maintaining the relative order of equal elements) is important.

//? The algorithm works by:

//* Dividing the array into two halves.
//* Recursively sorting each half.
//* Merging the sorted halves back together to form a single sorted array.
//* For example, given the array [38, 27, 43, 3, 9, 82, 10]:

//* First, split it into two halves: [38, 27, 43] and [3, 9, 82, 10].

//* Recursively split each half until single-element arrays are obtained:

//* [38, 27, 43] becomes [38], [27], [43].
//* [3, 9, 82, 10] becomes [3], [9], [82], [10].
//* Merge the smaller arrays back together, sorting as you go:

//* [38] and [27] merge to form [27, 38].
//* [27, 38] and [43] merge to form [27, 38, 43].
//* Similarly, merge the second half [3, 9, 10, 82].
//* Finally, merge the two sorted halves to form [3, 9, 10, 27, 38, 43, 82].

//* This implementation divides the array into smaller subarrays, recursively sorts them,
//* and then merges the sorted subarrays.
//* The merge function compares elements from the left and right subarrays,
//* ensuring that the result is always sorted.
//* The merge process continues until all elements are combined into a single sorted array.
