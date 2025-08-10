//! Depth-First Search (DFS) is a graph traversal algorithm
//* that explores as far as possible along each branch before backtracking.
//* It uses a stack-based approach, either explicitly with a stack data structure or implicitly through recursion.
//* DFS is ideal for tasks such as detecting cycles, topological sorting,
//* and exploring connected components in a graph.

//? Example Explanation:
// Consider an undirected graph with nodes 0, 1, 2, and 3:

// 0 is connected to 1 and 2
// 1 is connected to 3
// 2 is connected to 3
// If we start DFS from node 0:

// Visit 0
// Go to 1 (neighbor of 0)
// From 1, go to 3
// Backtrack and check other neighbors; from 0, go to 2
// 2's neighbor 3 is already visited
// Traversal order (depending on adjacency list order): 0 → 1 → 3 → 2

//? TypeScript Example
class DFSGraph {
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

  dfs(start: number) {
    const visited: boolean[] = Array(this.vertices).fill(false);
    this.dfsUtil(start, visited);
  }

  private dfsUtil(node: number, visited: boolean[]) {
    visited[node] = true;
    console.log(`Visited: ${node}`);

    for (const [neighbor, _] of this.adjList.get(node) || []) {
      if (!visited[neighbor]) {
        this.dfsUtil(neighbor, visited);
      }
    }
  }
}

//? Example usage:
const dfsGraph = new DFSGraph(4);
dfsGraph.addEdge(0, 1, 1);
dfsGraph.addEdge(0, 2, 1);
dfsGraph.addEdge(1, 3, 1);
dfsGraph.addEdge(2, 3, 1);

dfsGraph.dfs(0);

//? In this code:

//* Nodes 0, 1, 2, 3 are connected
//* addEdge creates undirected edges
//* dfs starts the traversal from a given node
//* dfsUtil is a recursive function that visits nodes in depth-first order
//* This recursive DFS is practical and clean for small and medium graphs.
//* If desired, I can also show you an iterative (stack-based) version,
//* which is better suited for large graphs to avoid recursion stack overflow
