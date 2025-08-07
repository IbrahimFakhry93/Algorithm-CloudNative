//& Greedy Algorithm Lec 03

//* the greedy algorithm not always is the optimal solution
//* A greedy rule (“choose the biggest win next”):

//* Some people call greedy algorithm as Greedy Heuristics
//* means they don't consider greedy solution as algorithm, because algorithm should give best solution for all cases

//* Most algorithms used in compiler, operating system, machine learning are greedy algorithms
//* Greedy approach, get the optimal solution at current step, it doesn't look forward in future, or backward in past

//* Greedy algorithm time comp analysis is very easy (there is no recursion)
//* Greedy algorithm is fast

//^ to refute efficiency of an algorithm
//* use counter example to refute an algorithm efficiency

//! Knapsack problem:
//^ open: photo 7.jpg
//* Greedy approaches:
//* Max Val, Min weight, Max value/weight

//* Fractional Knapsack will use Value$/KG, start by max one
//* Greedy 0/1: will use min weight

//? Not Greedy approach
//* Optimal (not greedy): use Brute Force approach (try all probabilities بيجرب كل الاحتمالات)

//* Trade off Brute force: if inputs are so many, the solution won't be worst , exponential surge in output (n ^ n)
//* only can be used if inputs are few like knapsack for limited items: gold, silver, bronze: Time Comp in this case: 2 ^ 3
//* n^n if elements are unlimited

//^ noteL
//! interview:
//* Brute force provides optimum solution for few inputs

//* TSP: Traveling Salesman Problem

//! interview:
//^ note on 7.jpg
//* fractional greedy is the best solution (240$) higher even than brute force
//* but not in all cases we can apply fractional approach

//^ note:
//* cache memory is faster than RAM memory
