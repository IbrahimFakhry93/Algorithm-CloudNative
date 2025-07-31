//! Selection Sort:
//* time complexityL O(n^2)

//! Bubble Sort:

//^ note:
//* in bubble sort time comp is O(n^2) in all cases, even if the array is sorted
//* but we can make it O(n) if the array is sorted by placing a flag to indicate if swapping occurs or not

//! what is tightest bound or upper bound for time comp??!

//! insertion sort

//* worst case: O(n^2)

//! TimSort:
//^ open: TimSort.pdf
//* TimSort is used in Java and python, TimSort uses two types of sort: merge sort and insertion sort
//* Why Timosrt uses insertion sort not only merge sort
//* because insertion sort time comp in best case when array is sorted or nearly sorted is O(n)
//* Timsort tests the array's sorting case, if it's sorted so it utilizes the timecomp O(n) instead of nlog(n) in merge sort
//* notes: O(n) < O(nlog(n))

//! Quick Sort:

//! incorrect info down by Dr. Shahira
//* Quick sort is merge sort but in place
//^ look up quick sort vs merge sort.pdf
//*========================

//! Time efficiency of merge sort over selection sort:
//* if we have array of 10^6 elements : n = 10^6
//* Selection sort eff: O(n2) === (10 ^ 6)2
//* Merge sort eff: O(n * log(n)) = 20
//* Selection eff / Merge eff = (10 ^ 6)^2 / 10^6 log(10 ^ 6) = 10^6 / 20 = 50000

//* So enhancement of performance of merge sort is 50000 better than selection sort
//* so no compiler or processor can results better than this enhancement
