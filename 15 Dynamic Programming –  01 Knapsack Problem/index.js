//! 25 – Dynamic Programming – 0/1 Knapsack Problem – Algorithm – Code

//* 0 / 1: means add the item to knapsack or not (take it or leave it)
//* we don't fracture the item if
//* if (new_Item.weight > max_capacity - current_capacity) : in this case we leave the item

//^ the difference approach here in 0 / 1 knapsack using dyn prog

//* that we will try or loop over all possible solutions (stages)
//* meaning all possible weights (stage weights) till max weight
//* so we may achieve max profit before achieving the max weight

//* W_max: max weight: 8 kg

//* we will add a table of all possible weights till max weight (open slide)
