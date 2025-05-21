//! initiate two arrays:

const profits = [4, 9, 12, 11, 6, 5];
const weights = [1, 2, 10, 4, 3, 5];

const items = [];

for (let i = 0; i < profits.length; i++) {
  const item = new Item(profits[i], weights[i], "#" + i);
  items.push(item);
}

// merge(items)

console.log(items);
console.log("==============================");

const max_capacity = 12;
const bag = new Knapsack(max_capacity);

j = 0;
while (bag.current_capacity < bag.max_capacity) {
  bag.add_item(item[j]);
  j++;
}

console.log(bag.items);
