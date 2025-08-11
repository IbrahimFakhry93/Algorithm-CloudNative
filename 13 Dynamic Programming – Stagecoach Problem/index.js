//* Richard Bellman introduced dynamic programming

//*- DP is a method to reduce repeated calculations in optimization problem
//* If greedy algorithm failed in some optimzaition problems, we have to calcualte all probablities (brute force)
//* brute force needs high computing power, so we head to DP to solve this

//* Problems that need dynamic programming is very rare

//! stagecoach problem (الحنطور)

//* we have a weighted (distance) graph
//* we want to get the cheapest path from point to point

//* so we need to calculate the distance along all routes
//* we have 18 routes, every route needs three calculations

//* Dynamic programming problems can be solved forward or backward

//* Dynmaic prog concept:
//* any repeated calculation should be saved for futher calculation instead of repating calculation again

//*convert graph to adjaceny matrix

//* from rows, to: columns

//^ open: slide: 26.png and 27.png
//* they are important slides

//* total cost table === memoizatation table
//* memeo derivd of previously notes registered to used them later
