//! 27 – Graph – Prim’s Minimum Spanning Tree – Algorithm – Code

//? Minimum Spanning Tree:
//* simplify the graph so it contains min number of edges so all vertices are still connected, not necessary directly

//* min span tree has no cycle

//* no of edges = no of vertices - 1 (mathematically proved)

//^ note:
//* Prim’s Minimum Spanning Tree presented by Prim by a paper called " Shortest Connection Networks"

//? steps:

//! we will work on complete undirected weighted graph
//* choose arbitrary (random) starting node
//* move on the min weight edge

//* now we have two vertices
//* choose min connected edges to these two vertices and move along it
//* if there are two equal edge, move along anyone of them

//* if there is an edge between to vertices, one of this vertex is chosen or selected before
//* neglect this edge (ex. F => D on the slide: 13.png)

//? again
//? the conditions:
//* Move on the min weight edge
//* Neglect previous visited edge or vertex

//^ note:
//* this technique is greedy, because we didn't loop over all the edge then choose the minimum
//* we choose the minimum edge at each comparison between two nodes along the path

//! The algorithm’s emphasis on incremental, greedy, and cost-minimizing decisions

//? application:
//* build minimum routes (edges) of telephone network between cities (vertices)
