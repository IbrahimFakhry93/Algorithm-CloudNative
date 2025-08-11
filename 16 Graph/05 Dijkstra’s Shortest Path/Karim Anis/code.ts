//* Dijkstra’s Algorithm is a greedy algorithm used to find the shortest paths
//* from a starting node to all other nodes in a weighted graph.
//* It works by iteratively selecting the unvisited node with the smallest known distance,
//* updating the distances to its neighbors, and marking it as visited.
//* It is particularly effective for graphs with non-negative weights.

//? Example Explanation:
//* Consider a graph with nodes A, B, C, and D, and weighted edges:

//* A connected to B (weight 1), C (weight 4)
//* B connected to C (weight 2), D (weight 5)
//* C connected to D (weight 1)
//? We want to find the shortest path from node A. The steps are as follows:

//* Start at node A, with initial distances A: 0, B: ∞, C: ∞, D: ∞.
//* Visit node A, update the distances of neighbors B and C (distances A-B: 1, A-C: 4).
//* Visit the unvisited node with the smallest distance, which is B. Update C and D based on B's connections.
//* Continue until all nodes are visited.
//* Shortest distances will be: A -> B = 1, A -> C = 3, A -> D = 6.

class Graph {
  vertices: number;
  adjList: Map<number, { node: number; weight: number }[]>;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adjList = new Map();

    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(u: number, v: number, weight: number) {
    this.adjList.get(u)?.push({ node: v, weight });
    this.adjList.get(v)?.push({ node: u, weight }); // Undirected graph
  }

  dijkstra(start: number) {
    const dist: number[] = Array(this.vertices).fill(Infinity);
    const visited: boolean[] = Array(this.vertices).fill(false);
    const prev: number[] = Array(this.vertices).fill(-1);

    dist[start] = 0;

    for (let i = 0; i < this.vertices; i++) {
      const u = this.minDistance(dist, visited);
      visited[u] = true;

      for (let { node, weight } of this.adjList.get(u) || []) {
        if (!visited[node] && dist[u] + weight < dist[node]) {
          dist[node] = dist[u] + weight;
          prev[node] = u;
        }
      }
    }

    this.printSolution(dist, prev);
  }

  private minDistance(dist: number[], visited: boolean[]): number {
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < this.vertices; v++) {
      if (!visited[v] && dist[v] < min) {
        min = dist[v];
        minIndex = v;
      }
    }
    return minIndex;
  }

  private printSolution(dist: number[], prev: number[]) {
    console.log("Vertex Distance from Source:");
    for (let i = 0; i < this.vertices; i++) {
      console.log(`${i}: ${dist[i]}`);
    }

    console.log("\nShortest Paths:");
    for (let i = 0; i < this.vertices; i++) {
      let path: number[] = [];
      let current = i;
      while (current !== -1) {
        path.unshift(current);
        current = prev[current];
      }
      console.log(`${i}: ${path.join(" -> ")}`);
    }
  }
}

// Example usage:
const g = new Graph(4);
g.addEdge(0, 1, 1);
g.addEdge(0, 2, 4);
g.addEdge(1, 2, 2);
g.addEdge(1, 3, 5);
g.addEdge(2, 3, 1);

g.dijkstra(0);

//? In this code:

//* addEdge connects nodes with a specified weight.
//* dijkstra finds the shortest distances from the start node (0 in this case) to all other nodes.
//* The minDistance function selects the unvisited node with the smallest known distance.
//* The printSolution function outputs the shortest path distances and the actual path for each node.
//* This implementation is efficient for smaller graphs. For large graphs,
//* a priority queue (min-heap) is often used to optimize the selection of the next node,
//* improving the time complexity from O(V^2) to O((V + E) log V).
