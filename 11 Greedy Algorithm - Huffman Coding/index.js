//! 20 – Greedy Algorithm – Huffman Coding – Algorithm

//* applied in data compression

//* english char is 8 bit
//* arabic char is 16 bit

//* character representation in computer
//* every character represented eventually in PC as binary

//* char => decimal code  => Binary

//* required:
//* compress number of bis used to encode the characters

//*=================================================================================================
//! 21 – Greedy Algorithm – Huffman Coding – Code

//^ lookup slides - very important

//* complete binary tree has each node has two branches with two child nodes
//* every node has right and left

//* every node is object have some variables stored in memory
//* we can add property to this node as it is object such as: character: 'a'

//* heap is a type of binary tree with conditions:
//
//* 1) it is complete binary tree

//* 2) ask chatgpt the second condition of heap

//* queue: first in first out
//* enqueue : adding new data to the queue
//* dequeue: remove data out of the queue

//* priority queue: special type of heap

//* priority queue is heap, default is min heap

//* min value is the default highest priority in priority queue

//& code steps:

//* we will use hash-table first to get characters frequencies
//* instead of using sort algorithm (ex. merge sort) to sort the frequencies ascending
//* we will use priority queue. because it's min heap by default (priority for less freq) as we need this in huffman application
