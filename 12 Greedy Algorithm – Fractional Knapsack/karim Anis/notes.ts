// The Fractional Knapsack Problem is a greedy algorithm used in optimization,
// where you aim to maximize the total value you can carry in a knapsack with a weight limit.
// Unlike the 0/1 Knapsack (where you must take the entire item or leave it),
// in the fractional version, you are allowed to take any fraction of an item.
// This flexibility makes the problem solvable using a straightforward greedy strategy.

//? The steps of the algorithm are:

//* For each item, calculate its value-to-weight ratio (value / weight).
//* Sort all items by this ratio in descending order.

//? Start filling the knapsack:

//* Always pick as much as possible from the item with the highest ratio.
//* If the full item can fit, take it entirely.
//* If not, take only the fraction that fits.
//* Continue until the knapsack is full or all items are considered.

//? For example, consider a knapsack with a weight capacity of 50 and these items:

//* Item 1: value = 60, weight = 10 → ratio = 6
//* Item 2: value = 100, weight = 20 → ratio = 5
//* Item 3: value = 120, weight = 30 → ratio = 4
//* Sort items: Item 1 (6), Item 2 (5), Item 3 (4)
//* Take all of Item 1 (10 weight), remaining capacity = 40
//* Take all of Item 2 (20 weight), remaining capacity = 20
//* Take 20/30 fraction of Item 3 (20 weight), which gives value 120 * (20/30) = 80
//* Total value = 60 + 100 + 80 = 240
//? Here is a practical TypeScript implementation:

type Item = {
  value: number;
  weight: number;
};

function fractionalKnapsack(capacity: number, items: Item[]): number {
  // Calculate value-to-weight ratio and sort by it descending
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);

  let totalValue = 0;
  let remainingCapacity = capacity;

  for (let item of items) {
    if (remainingCapacity === 0) break;

    if (item.weight <= remainingCapacity) {
      // Take the whole item
      totalValue += item.value;
      remainingCapacity -= item.weight;
    } else {
      // Take the fractional part
      let fraction = remainingCapacity / item.weight;
      totalValue += item.value * fraction;
      remainingCapacity = 0;
    }
  }

  return totalValue;
}

// Example usage
const items: Item[] = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 },
];

const capacity = 50;
const maxValue = fractionalKnapsack(capacity, items);
console.log(maxValue);
// Output: 240

// This implementation first:sorts the items by their value-to-weight ratio
// then greedily picks items (or fractions) until the knapsack's capacity is used up.
// This greedy method is mathematically proven to always yield the optimal solution in the fractional case.
// It is widely used in real-world scenarios like resource allocation, cargo loading, and financial investments where partial quantities are allowed.
