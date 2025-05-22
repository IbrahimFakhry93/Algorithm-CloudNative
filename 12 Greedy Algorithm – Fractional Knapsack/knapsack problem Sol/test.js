//! Don't forget this step to be able to export and import classes
//& Adding `"type": "module"` to `package.json`
//*  "type": "module", // Marks all `.js` files in the project as ESM by default
import { Knapsack, Item } from "./knapsack.js";

import { mergeCall } from "./sort.js";

//! initiate two arrays:
const profits = [4, 9, 12, 11, 6, 5];
const weights = [1, 2, 10, 4, 3, 5];

const items = [];

for (let i = 0; i < profits.length; i++) {
  const item = new Item("#" + i, profits[i], weights[i]);
  items.push(item);
}

console.log("Unsorted items:", items);

// Use the imported mergeCall function to sort items
mergeCall(items, 0, items.length - 1);

console.log("Sorted items:", items);
console.log("==============================");

const max_capacity = 12;
const bag = new Knapsack(max_capacity);

let j = 0;
while (bag.current_capacity < bag.max_capacity) {
  bag.add_item(items[j]);
  j++;
}

console.log(bag.items);
console.log(bag.current_capacity);
console.log(bag.total_profit);
