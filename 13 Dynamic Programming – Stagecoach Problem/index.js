//! 23 – Dynamic Programming – Stagecoach Problem – Algorithm – Code

//* it is a method to reduce repeated calculations in optimization problems

//* stages that we will follow to solve thew problem are corelated, because the result of each stage we will use it in the next stage
//* we don't calculate the presult again

//* dynamic progrtamming problems can solved backward or forward
//* mostly backward

//* in dynamic programming problems, youw ill find repeated caluclation steps which is called overlapping

//* to understand the dynamic programming, you have to look up many problems in dynamic programming

//* it's not straight forward like divide and conquer, that you divide to lastsamll number then start to claculate

//^ note:
//* as in greedy, the optimization problem sometimes has more than optimal solution, we should one of them

//? stagecoach problem:
//^ look up the slides
//* we have two points, we want the optimal solution to J from A
//* solve backward, choose the points that provide you the minmal cost to reach J from A
//* but will go backward
//* we choose H then, then choose E (minmal cost: 4)

//* convert the routes graph to data, i can interact with it on the code
//* convert the code to ajacebry matrix (multi-dimensional array)
//* matrix => rows and columns or array of arrays

//* adjacency describes the relations of the point in the graph

//* we will have table of all points in the graph, rows (i) are from , columns (j) are to

//* there is extra table is called memoization
//* the columns in total cost of memoization table are j, same of columns of matrix table above
