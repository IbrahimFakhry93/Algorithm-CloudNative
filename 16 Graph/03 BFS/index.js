//! 28 – Graph – Breadth First Search – Algorithm – Code

//* bfs: graph traversal algorithm

//* we can use bfs to find unweighted minimum spanning tree instead of using prim method

//* bfs or any traversal algorithm answers the question is there a route or path from certain node to another

//* BFS is essentially traversal algorithm but it can also be used to search for an edge or vertex

//* breadth: level

//* graph is like tree and breadth is the level
//* bfs make traversal in the current level then go to another level

//* first level: starting node and its direct connecting nodes

//? first level:
//* A => B
//* A => C

//* Mark A as visited, we won't move to it again

//* traverse both from A to B
//* traverse both from A to C

//* B and C are head of tree

//& next levels
//? B
//* Start from B
//* move in both:
//* B to E
//* B to D

//? Return to C:
//* C -> F only
//* because D and A are visited

//? D:
//* can't go anywhere because F is already visited

//?E
//* can't go anywhere

//? F:
//* only move to H

//? H:
//* move to G and I
