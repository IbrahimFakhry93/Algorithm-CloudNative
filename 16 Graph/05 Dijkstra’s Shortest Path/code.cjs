const { Queue } = require("datastructures-js");

class Vertex {
  constructor(name) {
    this.name = name; // String representing the vertex name
    this.visited = false; // Boolean to track visit status
    this.vertexLinks = []; // Array to store linked edges

    this.totalLength = 0;
    this.sourceOfTotalLength = null;
    //* these two values above will be remained assigned to first vertex
    //* because down in Dijkstra method we will start to loop over the vertices from i =1;
    //* we will skip the first vertex
  }
}

class Edge {
  constructor(source, target, weight = 0) {
    this.source = source; // Source vertex
    this.target = target; // Target vertex
    this.weight = weight; // Edge weight (default is 0)
  }
}

class Graph {
  constructor(...names) {
    this.vertices = names.map((name) => new Vertex(name));
    // console.log(this.vertices);
  }

  addEdges(vertexIndex, targets, weights) {
    const source = this.vertices[vertexIndex];
    source.vertexLinks = targets.map(
      (target, i) => new Edge(source, this.vertices[target], weights[i])
    );
    // console.log(source);
  }

  BFS() {
    let q = new Queue();
    // Now that this.graph is defined, you can use it.
    q.enqueue(this.vertices[0]);
    // console.log(q);
    this.vertices[0].visited = true;

    let currentVertex = 0;
    let destinations = [];
    //* currentVertex  === source vertex
    while (q.size() > 0) {
      currentVertex = q.dequeue();
      // console.log(currentVertex);
      destinations = currentVertex.vertexLinks;
      // console.log(destinations);
      for (let i = 0; i < destinations.length; i++) {
        if (!destinations[i].target.visited) {
          q.enqueue(destinations[i].target);
          destinations[i].target.visited = true;
          console.log(
            `${currentVertex.name} => ${destinations[i].target.name}`
          );
        }
      }
    }

    this.resetVertices();
  }

  DFS() {
    this.DFSRecursion(this.vertices[0]);
    this.resetVertices();
  }

  DFSRecursion(currentVertex) {
    currentVertex.visited = true;

    let destinations = currentVertex.vertexLinks;

    for (let i = 0; i < destinations.length; i++) {
      if (!destinations[i].target.visited) {
        console.log(`${currentVertex.name} => ${destinations[i].target.name}`);
        this.DFSRecursion(destinations[i].target);
      }
    }
  }

  Dijkstra() {
    //* start from one, so starting point total length remain zero
    for (let i = 1; i < this.vertices.length; i++) {
      this.vertices[i].totalLength = Number.MAX_SAFE_INTEGER;
    }

    //* Dijkstra loop starts
    for (let i = 0; i < this.vertices.length; i++) {
      let current_vertex = this.vertices[i];
      let destinations = current_vertex.vertexLinks;

      if (destinations == null) continue;

      for (let i = 0; i < destinations.length; i++) {
        let currentEdge = destinations[i];

        let newLength = current_vertex.totalLength + currentEdge.weight;

        if (newLength < currentEdge.target.totalLength) {
          currentEdge.target.totalLength = newLength;
          currentEdge.target.sourceOfTotalLength = current_vertex;
        }
      }
    }

    //* we will move backward from the last vertex in the path
    let path = this.vertices[this.vertices.length - 1].name;
    let v = this.vertices[this.vertices.length - 1];

    while (v.sourceOfTotalLength != null) {
      path = v.sourceOfTotalLength.name + " - " + path;
      v = v.sourceOfTotalLength;
    }
    //* v.sourceOfTotalLength == null  is the starting point

    console.log(path);
    console.log(this.vertices[this.vertices.length - 1].totalLength);

    this.resetVertices();
  }

  resetVertices() {
    this.vertices.forEach((vertex) => {
      vertex.visited = false;
      vertex.totalLength = 0; // Ensure it resets properly
      vertex.sourceOfTotalLength = null; // Reset source reference
    });
  }
}

// const g = new Graph("A", "B", "C");
// Example usage
const g = new Graph("A", "B", "C", "D", "E", "F", "G", "H", "I", "J");

g.addEdges(0, [1, 2, 3], [2, 4, 3]);
g.addEdges(1, [4, 5, 6], [7, 4, 6]);
g.addEdges(2, [4, 5, 6], [3, 2, 4]);
g.addEdges(3, [4, 5, 6], [4, 1, 5]);

g.addEdges(4, [7, 8], [1, 4]);
g.addEdges(5, [7, 8], [6, 3]);
g.addEdges(6, [7, 8], [3, 3]);

g.addEdges(7, [9], [3]);
g.addEdges(8, [9], [4]);

g.Dijkstra();
//* node code.cjs
