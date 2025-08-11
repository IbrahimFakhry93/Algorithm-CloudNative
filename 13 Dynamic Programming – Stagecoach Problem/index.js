//* Richard Bellman introduced dynamic programming

//* DP is a method to reduce repeated calculations in optimization problem
//* If greedy algorithm failed in some optimization problems, we have to calculate all probabilities (brute force)
//* brute force needs high computing power, so we need the DP to solve this

//* Problems that need dynamic programming is very rare

//* Dynamic programming is a strategy for optimizing problems by breaking them into overlapping subproblems,
//* solving each once, and reusing those solution

//* Dynamic programming in the community, is known by tabular method
//* because its solution depends on tabular method

//! stagecoach problem (الحنطور)

//* we have a weighted (distance) graph
//* we want to get the cheapest path from point to point

//* so we need to calculate the distance along all routes
//* we have 18 routes, every route needs three calculations

//* Dynamic programming problems can be solved forward or backward

//? Dynamic prog concept:
//* any repeated calculation should be saved for further calculation instead of repeating calculation again

//* convert stagecoach route graph to adjacency matrix

//* from rows, to: columns

//^ open: slide: 26.png and 27.png
//* they are important slides

//* total cost table === memoization table
//* memo is derived of pre-registered notes to be used later
