//! 30 – Graph – Dijkstra’s Shortest Path – Algorithm – Code

//! 30 – Graph – Dijkstra’s Shortest Path – Algorithm – Code

//* Dijkstra’s Shortest Path is close to stagecoach problem in dynamic programming

//* Edge weight here represents the distance

//* weight === cost === length

//~ Algorithm steps

//? 1) place total lengths of all vertices as infinity
//* it is like define Max_Integer_Number to compare with
//* to get minimum at each step

//! important
//? 2) Assign the weight of the starting vertex to be zero
//* total le

//? comparison step as was in stagecoach:
//* seek the minimum distance or length (min weight)

//* Dijkstra applies greedy technique
//* at current step we compare to get the minimum weight or distance

//* Dijkstra's algorithm follows a greedy approach.
//* At each step, it selects the vertex with the smallest known distance (or weight),
//* then updates the shortest paths to its neighboring vertices accordingly.
