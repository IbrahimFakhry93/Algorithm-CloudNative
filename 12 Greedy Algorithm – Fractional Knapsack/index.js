//! 22 – Greedy Algorithm – Fractional Knapsack Problem – Algorithm – Code

//& Requirements
//* We want to put items in the knapsack to gain highest profit

//? traditional method
//^ apply brute force method
//* The "brute force method" in mathematics, also known as "proof by exhaustion,"
//* involves systematically checking (all) possible cases to prove a statement.
//* It's a direct proof method where you break down the problem
//* into a finite number of scenarios and verify the statement holds true for each.

//? Greedy Method:
//* one operation and get the highest profit

//? Knapsack Concept:
//* Whenever you must divide a continuous, limited resource across competing consumers to maximize a benefit, think fractional knapsack.

//^ problem:
//* Knapsack max capacity is 12 kg

//^ criteria to apply greedy method:
//* that the item could be divided, so it's called fractional Knapsack problem

//? In the fractional-knapsack analogy:
//* The limited resource is the knapsack’s capacity.
//* The competing consumers are the items, each “consuming” capacity equal to its weight.
//* The benefit you’re maximizing is the total value (profit) packed into the knapsack.

//? Greedy Solution in Simple Steps

//* Compute value density for each item: density_i = v_i / w_i
//* Sort items by density_i in descending order.
//~ For each item in sorted list:
//*  If capacityLeft >= w_i, take the whole item
//*  Else, take only a fraction f = capacityLeft / w_i
//* This guarantees the highest‐possible total value
//* because you always “buy” the richest value‐per‐unit‐weight first.

//^ pseudo code:
//^ look up the slide
//^ open: pseudoCode.js

//^ note:
//* this problem can be solved by class structure or function structure
//* Eng. Metwally chose class structure approach

//^ note:
//* During your software career you may observe a problem that may be an analogy for knapsack problem
