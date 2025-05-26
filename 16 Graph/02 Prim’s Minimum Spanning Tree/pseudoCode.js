// add first arbitrary vertex to the solution
// while selected edges count < v - 1
//     create min store with the biggest possible value
//     create a temporary store for the position of the minimum in the graph
//     for i = 0 to v
//         if vertex i is in the solution
//             for j = 0 to v
//                 if vertex j is not in the solution and graph[i, j] > 0 and graph[i, j] < min
//                     assign graph[i, j] to min
//                     assign (i, j) to the temporary store
//     add the vertex from the temporary position to the solution
//     increase selected edges count by one

//! Prim’s Minimum Spanning Tree
const vertices = ["1", "2", "3", "4", "5", "6"];

//* graphs matrix contain the edges weights that we will use in comparison
//* graph [i][j] represents edge
const graph = [
  [0, 6.7, 5.2, 2.8, 5.6, 3.6],
  [6.7, 0, 5.7, 7.3, 5.1, 3.2],
  [5.2, 5.7, 0, 3.4, 8.5, 4.0],
  [2.8, 7.3, 3.4, 0, 8, 4.4],
  [5.6, 5.1, 8.5, 8, 0, 4.6],
  [3.6, 3.2, 4, 4.4, 4.6, 0],
];

const v = graph.length; //* graph length  (number of vertices === labels length)
// Array to mark vertices that are included in the MST
const inMST = new Array(v).fill(false);
inMST[0] = true; // Start with the first vertex

// Array to store the MST edges
const mstEdges = [];

//* start while loop:
//^ mst edges = v -1
//* so as long as stEdges.length < v - 1, the minimum spanning tree still not completely created
while (mstEdges.length < v - 1) {
  //* define required temp variables
  let min_weight = Number.MAX_SAFE_INTEGER;

  let temp_from = -1;
  let temp_to = -1;

  //* nested for loop
  //^ outward loop: rows

  for (let i = 0; i < v; i++) {
    //  if vertex i is in the MST
    if (inMST[i]) {
      //^ inner loop:
      for (let j = 0; j < v; j++) {
        //* graph[i, j] > 0 : means i refers to j, because in case i refers to j, its case is 1
        if (!inMST[j] && graph[i][j] > 0 && graph[i][j] < min_weight) {
          min_weight = graph[i][j];

          temp_from = i;
          temp_to = j;
        }
      }
    }
  }

  // Add the selected edge to the MST result
  if (temp_from !== -1 && temp_to !== -1) {
    mstEdges.push([vertices[temp_from], vertices[temp_to]]);
    inMST[temp_to] = true; // Mark the new vertex as included
    //? printing the mst edges and its weight
    console.log(
      "[ " +
        vertices[temp_from] +
        " - " +
        vertices[temp_to] +
        " ]" +
        ": " +
        graph[temp_from][temp_to]
    ); //*
  } else {
    // If no valid edge is found, break (this may indicate a disconnected graph)
    break;
  }
}
// console.log("MST Edges:", mstEdges);

//* application:
//* build minimum routes (edges) of telephone network between cities (vertices)
