//! 26 – Graph – Introduction

//* Heap is a complete binary tree
//* binary tree is a type of graphs, restricted graph
//* every node must have two branches (two nodes)

//^ note:
//* in slides in 1.png
//* It's binary tree, max heap
//* but it's not a complete tree

//* vertices === points === nodes
//* vertices is the most common definition

//* Edge === Link === Line

//? undirected graph:
//* every node are two way direction

//? connected graph:
//^ slide: 8
//* from every node you can loop over other nodes

//? complete graph:
//^ slide: 10
//* every vertex, is connected to other vertices directly
//* in complete graph: every vertex has No of edges equal No of other vertices

//? Pseudo Graph:
//* It has two main properties
//* between two vertices multiple edge, and self loop on a vertex

//? Graph Representation:

//^ 1) Adjacency Matrix
//* Adjacency Matrix === table === Multi dimensional array === array of arrays

//* it describes relation between two vertices, from === row and to === column

//* if weighted or labelled graph, edges have values, and we assign them on the table
//! if not,  (not weighted graph)
//* we assign 1 or true (matrix date type: boolean ) for two connected vertices
//* or zero or false for not connected vertices

//* the data in matrix for undirected graph is double the data in matrix for directed graph

//! matrix for undirected graph (two way direction graph)
//* inner loop starts at zero ( j = 0 )

//! but for directed graph as was in stagecoach (one way direction graph)
//~ inner loop (j) start at i + 1
//* j = i + 1, forward  j < n, j ++
// By starting at i + 1, you ensure that you only check forward moves – you cannot travel backward in your journey.

//^ 2) Adjacency List

//* Matrix: is array of linkedList

//? It uses Linked List
//* Every node in linked list is an object has a value and reference or pointer refers to next node (object)
//* not like binary tree, the node has right and left.
//* node in linked list is next only
//* last item in linked list is null

//^ important: check 18.png

//* Start from vertex A  then are the next nodes that A is directly connected to (B,C,D)
//* and so on with other vertices
