//& steps:

//^ open: knapsack.js
//! create class for item
//~ contains: name, profit, weight, ratio
//* create constructor params: profit, weight, name
//* calculate the ratio: profit / weight
//* by that we made a capsulation for the item

//! Create class for knapsack
//~ contains: max capacity (of knapsack), current capacity, total profit , items array, add_item method
//* create constructor params: max capacity

//* create add_item method param: newItem

//* check if there is weight left in the knapsack for the new item
//~ if (new_Item.weight > max_capacity - current_capacity)
//~ if yes:  fracture the item to be fit in the knapsack
//~ calculate the weight diff: max_capacity - current_capacity
//~ newItem.weight = diff
//~ calculate its newItem.profit = diff* new_iItem.ratio

//* push the new item into items array
//* then adjust the current capacity of the knapsack (add the new item weight)
//* adjust also total profit

//^ open test.js
//! Create loops for adding the items
//^ we have two arrays:
//* array of profits
//* array of weights

//^ initiate empty array (items)
//* loop over length of profits or weights
//* and create new item and push it inside items array

//! merge sort this items array

//! Place the items in a greedy approach to get the highest profit
//* create bag instance of knapsack

//* create while loop (current_capacity < max_capacity)
//* call add_item param new_item to add the new item
//* update the current capacity and total profit

//! print the knapsack
