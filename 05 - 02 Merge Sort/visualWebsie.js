// Given an array of N items, Merge Sort will:

// Merge each pair of individual element (which is by default, sorted) into sorted arrays of 2 elements,
// Merge each pair of sorted arrays of 2 elements into sorted arrays of 4 elements,
// Repeat the process...,
// Final step: Merge 2 sorted arrays of N/2 elements (for simplicity of this discussion, we assume that N is even) to obtain a fully sorted array of N elements.
// This is just the general idea and we need a few more details before we can discuss the true form of Merge Sort.

//^=========================

// We will dissect this Merge Sort algorithm by first discussing its most important sub-routine: The O(N) merge.

// Given two sorted array, A and B, of size N1 and N2, we can efficiently merge them into one larger combined sorted array of size N = N1+N2, in O(N) time.

// This is achieved by simply comparing the front of the two arrays and take the smaller of the two at all times. However, this simple but fast O(N) merge sub-routine will need additional array to do this merging correctly.

//^==============================

//! pros and cons

// The most important good part of Merge Sort is its O(N log N) performance guarantee, regardless of the original ordering of the input. That's it, there is no adversary test case that can make Merge Sort runs longer than O(N log N) for any array of N elements.

// Merge Sort is therefore very suitable to sort extremely large number of inputs as O(N log N) grows much slower than the O(N2) sorting algorithms that we have discussed earlier.

// There are however, several not-so-good parts of Merge Sort. First, it is actually not easy to implement from scratch (but we don't have to). Second, it requires additional O(N) storage during merging operation, thus not really memory efficient and not in-place. Btw, if you are interested to see what have been done to address these (classic) Merge Sort not-so-good parts, you can read this.

// Merge Sort is also a stable sort algorithm.

arr = [27, 38, 12, 39, 27, 16];
