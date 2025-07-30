//! Linear Search:

//* Best Case:   O(1)
//* Worst Case:  O(n)

//! Binary search:
//* to use binary search, array must be sorted

//* smallest time complexity for sorting an array is: n * log (n)

//^ note:
//* time complexity for element insertion in an array is O(n) (if there will be shifting)
//* like inserting in the middle of the array, or insert that needs shifting elmenets

//* but if we insert in an empty place in the array, time coplexity: O(1)

//* array copy is O(n), we loop over array elements element by element to copy them so O(n)

//* insert in linkedList in themiddle is O((n)), it can be o(1) if I have reference of the point i will insert after
//* insert at first is O(1)

//* Insert and delete in linkedlist is O(n) except at start or end is O(1)
//* remember in implementation of insertAfter method, we pass two params: Node ( the node we inset after), value
//* but we pass the node as a return of find method which is search method by the iterator of linkedList
//* and this search operation is O(n)
//^ insertAfter
//~  list->insertAfter(list->find(2), 98);

//*=============

//! Selection Sort:
//* time complexityL O(n^2)
