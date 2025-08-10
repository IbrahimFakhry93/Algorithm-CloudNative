//! Breadth-First Search (BFS) is a traversal algorithm for graphs
//* that visits nodes in layers, exploring all neighbors of the current node before moving to the next layer.
//* It guarantees the shortest path (in terms of the number of edges) from the start node in an unweighted graph.
//* BFS uses a queue to manage the nodes to visit next and a visited array or set to prevent revisiting nodes.

//? Example Explanation:
//* Consider this undirected graph with nodes 0, 1, 2, and 3:

//* 0 is connected to 1 and 2
//* 1 is connected to 3
//* 2 is connected to 3
//* If we perform BFS starting from node 0:

//* Start with 0, mark it visited
//* Visit neighbors 1 and 2, mark them visited and add them to the queue
//* Next, visit 1, which connects to 3 (add 3 to the queue)
//* Then visit 2 (but 3 is already visited)
//* Finally, visit 3
//* Traversal order will be: 0 → 1 → 2 → 3

//? TypeScript Example

class BFSGraph {
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

  bfs(start: number) {
    const visited: boolean[] = Array(this.vertices).fill(false);
    const queue: number[] = [];

    visited[start] = true;
    queue.push(start);

    while (queue.length > 0) {
      const node = queue.shift()!;
      console.log(`Visited: ${node}`);

      for (const [neighbor, _] of this.adjList.get(node) || []) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}

//? Example usage:
const bfsGraph = new BFSGraph(4);
bfsGraph.addEdge(0, 1, 1);
bfsGraph.addEdge(0, 2, 1);
bfsGraph.addEdge(1, 3, 1);
bfsGraph.addEdge(2, 3, 1);

bfsGraph.bfs(0);

//? This example:

// Creates a graph with 4 nodes (0, 1, 2, 3)
// Uses addEdge to connect nodes
// Uses bfs to traverse starting from node 0 and prints each visited node
// This structure works well for unweighted graphs.
// If you want,
// I can also show you how to modify this to compute the shortest distance from the start node
//  to every other node while traversing
