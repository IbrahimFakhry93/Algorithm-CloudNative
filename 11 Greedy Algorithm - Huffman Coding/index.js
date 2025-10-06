//! 20 – Greedy Algorithm – Huffman Coding – Algorithm

//* applied in data compression

//* english char is 8 bit
//* arabic char is 16 bit

//* character representation in computer
//* every character represented eventually in PC as binary

//* char => decimal code (ascii or utf)  => Binary

//? what is required:
//* is to compress number of bits used to encode the characters

//^ open slides:
//? example of word "internet"
//* make table of chars and their frequencies in word "internet"

//? other method for huffman coding:
//* use binary tree method, most common in tech community
//* and faster than auxiliary table method introduced by huffman in his paper

//^ open slides
//* to decompress the data after compression, we use (Huffman map)

//? huffman map: for word internet
//* it is: original binary code of each char + space + compressed binary code of each char

//? huffman map + EOH (end of header, 8 bit) + compressed code

//* Huffman coding efficiency shines out in the long messages to compress
//* on the reverse with short message, it may cause inflation in size of encode of bits

//& Title: Huffman Coding Efficiency

//? What is Huffman Coding?
//* Huffman coding is a variable-length prefix coding algorithm
//* It is used for lossless data compression
//* Frequent characters get shorter binary codes
//* Rare characters get longer codes
//* No code is a prefix of another → safe decoding

//? When is Huffman Effective?
//* Works best when:
//*   - Message is long
//*   - Characters repeat often
//*   - Frequency table and encoding tree are worth building
//* Example: Compressing a long paragraph with many spaces and common letters

//? Short Message Limitation
//* For short messages, Huffman may not save space
//* Reason: Overhead of storing metadata (Huffman tree/map)
//* Metadata includes:
//*   - Frequency table
//*   - Huffman tree or map (char → binary code)
//*   - Encoded bitstream
//* These extras can make the compressed version larger than the original

//? Summary
//* Huffman coding shines in large, repetitive datasets
//* For short or random messages, compression may be inefficient
//* Always consider message length and character frequency before applying Huffman

//*=================================================================================================
//! 21 – Greedy Algorithm – Huffman Coding – Code

//^ open: Complete and non complete binary tree.pdf

//& Title: Heap – Binary Tree Conditions

//? Heap Definition
//* A heap is a special type of binary tree used in priority queues and sorting algorithms

//? Heap Conditions
//* 1) It must be a complete binary tree
//*    - All levels are fully filled except possibly the last
//*    - The last level is filled from left to right

//* 2) It must satisfy the heap property:
//*    - For a **max-heap**: every parent node ≥ its children
//*    - For a **min-heap**: every parent node ≤ its children

//? Example (Min-Heap)
//*        2
//*       / \
//*      3   4
//*     /
//*    5
//* All parents ≤ children → valid min-heap

//? Summary
//* Complete binary tree + heap property = valid heap
//* Used in heap sort, priority queues, and efficient selection algorithms

//^ lookup slides - very important

//? Binary Tree

//* complete binary tree has each node has two branches with two child nodes
//* every node has right node and left node

//* every node is object have some variables stored in memory
//* we can add property to this node as it is object such as: character: 'a'

//? Heap

//^ heap is a type of binary tree with conditions:
//* 1) it is complete binary tree
//* 2) ask chatgpt the second condition of heap

//? Queue:
//* queue: first in first out
//* enqueue : adding new data to the queue
//* dequeue: remove data out of the queue

//? Priority Queue
//* priority queue: special type of heap
//* priority queue is min heap by default
//* min value is the default highest priority in priority queue

//& code steps:

//* we will use hash-table first to get characters' frequencies

//* instead of using sort algorithm (ex. merge sort) to sort the frequencies ascending,
//* we will use priority queue. because it's min heap by default (priority will be for less freq) as we need this in huffman application

//& Title: generateCodes Function in Huffman Coding
//? Note: This recursive function traverses a Huffman tree and assigns a binary code to each leaf node.
//^ leaf node here, is the node which has the character
//^ look up to understand photo 20.png in slides folder

//? Note: The binary code is built from the path taken from the root to the leaf.
//^ Parameters:
//*    HeapNode node => The current node in the Huffman tree being processed.
//*    string str    => The accumulated binary string (composed of "0"s and "1"s) representing the path from the root.
//*
//^ How It Works:
//*  1. If the current node is null, the function returns (base case for recursion).
//*  2. If the current node is a leaf node (i.e., its data is not equal to internal_char), then we assign the
//*     current binary string to this node's character in our codes mapping.
//*  3. The function then recursively traverses the left child (appending "0" to the path) and the right child (appending "1" to the path).

generateCodes(node, str);
{
  //? Note: Base case - if there is no node, stop the recursion.
  if (node == null) {
    return;
  }

  //? Note: Check if the current node is a leaf.
  //* Explanation: internal_char is used as a placeholder for internal nodes.
  //* A node with data not equal to internal_char is a leaf node and represents an actual character.
  if (node.data != internal_char) {
    //* Store the generated binary code in the codes mapping for this character.
    codes[node.data] = str;
  }

  //? Note: Traverse the left subtree.
  //* Explanation: Moving left adds "0" to the binary code.
  generateCodes(node.left, str + "0");

  //? Note: Traverse the right subtree.
  //* Explanation: Moving right adds "1" to the binary code.
  generateCodes(node.right, str + "1");
}
