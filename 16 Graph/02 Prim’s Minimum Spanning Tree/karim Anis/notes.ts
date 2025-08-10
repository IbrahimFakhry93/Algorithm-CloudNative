//? Prim's Minimum Spanning Tree (MST) algorithm
//* is a greedy graph algorithm used to find a subset of edges that connects all vertices in an undirected,
//* weighted graph with the minimum possible total edge weight and without any cycles.
//* Prim's algorithm starts from a chosen node and repeatedly adds the smallest edge
//* that connects a node in the tree to a node outside the tree.

//? Example Explanation:
//* Imagine a graph with nodes A, B, C, and D:

//* A is connected to B (weight 1), C (weight 3)
//* B is connected to C (weight 1), D (weight 4)
//* C is connected to D (weight 2)

//? If we start with node A:
//* The smallest edge is A-B (weight 1)
//* Next, from nodes A and B, the smallest edge is B-C (weight 1)
//* Then, from A, B, and C, the smallest edge is C-D (weight 2)
//* Total MST weight = 1 (A-B) + 1 (B-C) + 2 (C-D) = 4

//! TypeScript Example

type Edge = [number, number, number]; // [source, destination, weight]

class Graph {
  vertices: number;
  adjList: Map<number, [number, number][]>;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adjList = new Map();

    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(u: number, v: number, w: number) {
    this.adjList.get(u)?.push([v, w]);
    this.adjList.get(v)?.push([u, w]); // Undirected graph
  }

  primMST() {
    const key: number[] = Array(this.vertices).fill(Infinity);
    const parent: number[] = Array(this.vertices).fill(-1);
    const inMST: boolean[] = Array(this.vertices).fill(false);

    key[0] = 0;

    for (let count = 0; count < this.vertices - 1; count++) {
      let u = this.minKey(key, inMST);
      inMST[u] = true;

      for (let [v, weight] of this.adjList.get(u) || []) {
        if (!inMST[v] && weight < key[v]) {
          key[v] = weight;
          parent[v] = u;
        }
      }
    }

    for (let i = 1; i < this.vertices; i++) {
      console.log(`Edge: ${parent[i]} - ${i}, Weight: ${key[i]}`);
    }
  }

  private minKey(key: number[], inMST: boolean[]): number {
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < this.vertices; v++) {
      if (!inMST[v] && key[v] < min) {
        min = key[v];
        minIndex = v;
      }
    }
    return minIndex;
  }
}

// Example usage:
const g = new Graph(4);
g.addEdge(0, 1, 1);
g.addEdge(0, 2, 3);
g.addEdge(1, 2, 1);
g.addEdge(1, 3, 4);
g.addEdge(2, 3, 2);

g.primMST();

//? In this code:

//* Nodes are numbered from 0 to 3
//* addEdge connects two nodes with a weight
//* primMST applies Prim’s logic to compute and print the MST edges
//* This example is practical for small to medium-sized graphs
//* and is easily adaptable if you want to handle input dynamically or connect it with real-world data structures.
