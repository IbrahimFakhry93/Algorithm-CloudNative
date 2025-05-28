const { Queue } = require("datastructures-js");

class Vertex {
  constructor(name) {
    this.name = name; // String representing the vertex name
    this.visited = false; // Boolean to track visit status
    this.vertexLinks = []; // Array to store linked edges
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

  addEdges(vertexIndex, ...targets) {
    const source = this.vertices[vertexIndex];
    source.vertexLinks = targets.map(
      (target) => new Edge(source, this.vertices[target])
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

  resetVertices() {
    this.vertices.map((vertex) => (vertex.visited = false));
  }
}

const g = new Graph("A", "B", "C", "D", "E", "F", "G", "H", "I");
// const g = new Graph("A", "B", "C");
g.addEdges(0, 1, 2);
g.addEdges(1, 0, 3, 4);
g.addEdges(2, 0, 3, 5);
g.addEdges(3, 1, 2, 4);
g.addEdges(4, 1, 5);
g.addEdges(5, 2, 3, 4, 7);
g.addEdges(6, 7, 8);
g.addEdges(7, 5, 6, 8);
g.addEdges(8, 6, 7);
g.BFS();

//* node codeOOP.cjs
