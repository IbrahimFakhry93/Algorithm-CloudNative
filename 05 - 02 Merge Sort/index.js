//! 10 – Recursion – Divide & Conquer – Merge Sort – Algorithm

//? merge sort technique:

//* Split the original array into two arrays. (one left, one right)
//* then split each array into two arrays until the division result out a one element array
//* these split steps are called split levels
//* this split is done by recursion with different parameters by midpoint,
//* one array its end will be midpoint, and the other array its start (midpoint + 1)
//*  and the base case of the recursion, that the array become one element
//* and this programmatically expressed by: if (end_index === start_index) return;
//* which will break the recursion

//* loop on both of the arrays together
//* there is no nested loop as was in insertion sort, nested loop takes a lot of time
//* then compare first element in the right with the first element in the left.
//* the smaller element will be pushed to the original array

//* and then loop on the array that contained the smaller pushed element, and fix the loop in the another array
//* and repeat the compare again

//* by this technique, we will not loop over the whole numbers
//* so it's more efficient

//* if there are any elements still left in any of the splitted arrays
//* these elements are moved to the original element

//& Pseudo Code:
//? Divide and Recursion:
//* Define two functions: fn_mergeSort()
//* Read arr[], start and end index inside fn_mergeSort()
//* if (start === end) break the recursion
//* calculate the midpoint = (start + end) / 2
//* call the fn_mergeSort() recursively
//* merge the two splitted arrays

//^================

//? Merge part:

//* Define fn_merge()
//* Read the array (x), start, midpoint and end index
//* create new arras for each side
//* compare all items in the array and sort in the original array
//* move remain items in each array to the original array

//& code:

//* two functions: fn_mergeSort(), fn_merge()

//* fn_mergerSort(arr,start,end);
//* fn_mergerSort(arr,start,midpoint);
