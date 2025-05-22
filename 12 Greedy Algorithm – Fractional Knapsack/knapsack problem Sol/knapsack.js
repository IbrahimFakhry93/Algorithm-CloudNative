export class Item {
  constructor(name, profit, weight) {
    this.name = name;
    this.profit = profit;
    this.weight = weight;
    this.ratio = profit / weight;
  }
}

export class Knapsack {
  constructor(max_capacity) {
    this.max_capacity = max_capacity;
    this.current_capacity = 0;
    this.total_profit = 0;
    this.items = [];
  }

  add_item(newItem) {
    if (newItem.weight > this.max_capacity - this.current_capacity) {
      const diff = this.max_capacity - this.current_capacity;
      newItem.weight = diff;
      newItem.profit = newItem.ratio * newItem.weight;
    }

    this.items.push(newItem);
    this.current_capacity += newItem.weight;
    this.total_profit += newItem.profit;
  }
}
