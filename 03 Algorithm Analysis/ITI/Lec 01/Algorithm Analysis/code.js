//^ open: 1.jpg in ITI folder

//*==========================================

//^ open: 2.jpg in ITI folder

//^ note:
//! log(n) cases in For Loop
//? Multiplication increment
//*  for (int i = 1; i <= n; i *= 2)
//*  for (int i = 1; i <= n; i *= 3)
//*  for (int i = 1; i <= n; i *= n) : any number
//? Division increment
//*  for (int i = 1; i <= n; i /= 2)
//*  for (int i = 1; i <= n; i /= 3)
//*  for (int i = 1; i <= n; i /= n) : any number

//! log(n)
//*     for (int i = 1; i <= n; i *= 2) {
//
//     }

// ---

// ## Illustration of O(log n) Growth

//* 1. As i doubles, it follows powers of two:
//*        i: 1 → 2 → 4 → 8 → … → 2ᵏ ≤ n

//* 2. When 2ᵏ ≈ n, k ≈ log₂(n). Hence the loop executes k+1 times ⇒ O(log n).

// ### Iteration Table

// | k (step) | i = 2ᵏ        |
// |----------|--------------|
// | 0        | 1            |
// | 1        | 2            |
// | 2        | 4            |
// | 3        | 8            |
// | …        | …            |
// | k        | 2ᵏ ≤ n       |

// ---

// ## Where You’ll See O(log n) in Practice

//* - Binary Search: Halves the search range each step.
//* - Heap Operations: Percolate up/down along the tree height.
//* - Balanced Trees (e.g., AVL, Red-Black): Insert/search/delete in logarithmic height.

// ### Binary Search Example

//     int binarySearch(int A[], int n, int target) {
//         int lo = 0, hi = n - 1;
//         while (lo <= hi) {
//             int mid = lo + (hi - lo) / 2;
//             if (A[mid] == target) return mid;
//             if (A[mid] < target)  lo = mid + 1;
//             else                   hi = mid - 1;
//         }
//         return -1;
//        each iteration cuts the range in half ⇒ O(log n)
//     }

//*================================================================

//^ open: 3.jpg in ITI folder
// O(n) cases in For Loop
// for(i=1;i<=n;i+=2) : O(n) because the increment rate is constant
//* No of loops iteration will be n / 2 so the increment rate is 2 and in algorithm analysis we neglect the constant (2), so it will be O(n)
//* but in Log(n) the increment rate is (not) constant

//^ note:
//* python is slower than C by (10n - 30n)
