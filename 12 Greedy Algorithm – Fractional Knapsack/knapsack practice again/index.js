import { Knapsack, Item } from "./knapsack.js";
import mergeSort from "./sort.js";

// As per the table (items #0 to #5, in order)
const profits = [4, 9, 12, 11, 6, 5]; // dollars
const weights = [1, 2, 10, 4, 3, 5]; // kilograms

// Quick sanity check
console.log(profits.length === weights.length); // true

let itemsList = [];
const bag = new Knapsack(12);
for (let i = 0; i < profits.length; i++) {
  let item = new Item(`${i}`, profits[i], weights[i]);
  itemsList.push(item);
}

// sort
let s = 0;
let e = itemsList.length - 1;

// console.log("before sort");
// console.log(itemsList);

mergeSort(itemsList, s, e);

// console.log("==== after sort ====");
// console.log(itemsList);
for (let i = 0; i < itemsList.length; i++) {
  bag.addItems(itemsList[i]);
}

bag.print();
