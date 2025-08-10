export class Item {
  name = "";
  weight = 0;
  profit = 0;
  ratio = 0;

  constructor(name, profit, weight) {
    this.name = name;
    this.weight = weight;
    this.profit = profit;
    this.ratio = profit / weight;
  }
}

export class Knapsack {
  maxCapacity = 0;
  totalProfit = 0;
  currentCapacity = 0;
  items = [];

  constructor(maxCapacity) {
    this.maxCapacity = maxCapacity;
  }
  updateKnapsack(item) {
    this.items.push(item);
    this.totalProfit += item.profit;
    this.currentCapacity += item.weight;
  }
  addItems(item) {
    let diff = this.maxCapacity - this.currentCapacity;

    if (item.weight <= diff) {
      this.updateKnapsack(item);
    } else {
      item.profit = item.ratio * diff;
      item.weight = diff;
      this.updateKnapsack(item);
    }
  }

  print() {
    console.log(this.totalProfit);
    console.log(this.currentCapacity);
    console.log(this.items);
  }
}
