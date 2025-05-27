//! 28 – Graph – Breadth First Search – Algorithm – Code

//* we will use adjaceny list

//? Define visited array:
//* contains all visited vertices

//? Using queue: First In, First Out
//* to store the head vertices, the vertices that have the turn to traverse next
//* the vertex that has the turn to traverse, it will be dequeued out of the queue to visited array

//? for example:

//* A is current vertex to start exploring from it to B and C
//* B and C are destinations

//* A => B
//* A => C

//* Mark A as visited, we won't move to it again
//* A will be enqueued to the queue and marked as visited

//* then loop starts, current vertex (A) will dequeued, then C, B will be enqueued

//* traverse both from A to B
//* traverse both from A to C

//* B and C are head of tree, they are the next waited  traversed vertices
//* Then B , C will be enqueued to the queue

//* B traverse:
//* B -> dequeue to visited array, to be marked as visited
//* D, E -> enqueued

//* then return to C:
//* C will be dequeued

//*=======================================

//* note:
//* in C# when defining hashtable without size, it is defined by default size
//* but when add data to the existed size of hashtable, C# executed resturcture
//* restructure is different from data structure to another
//* for hashtable, it does rehash, makes new hashtable
//* and it moves the old data to it
//* so it's a burden on processor and memopry

//* so it's important to understand how every data structure in each language works

//? DEFINE hashtable for the graph
//* number of vertices 9
//* our graph is undirected, two way

//* for the ease of coding
//* we will work with hash table instead of linkedlist
//* key : vertex, value: other direct connected vertex

//? Deine queue:
//* enqueue A

//? Define hashtable for the visited vertices
//* add A to the hashtable with value true

//! we didn't use boolean array for visisted vertices
//* because we use characters for vertex name not numbers as before in prim MST
//* so we can't use array indeces to place the numbered vertices (vertex number = boolean array index)
//* sometimes if the nodes or vertices are auto generated ID not in sequence

//? Define a temporary variable (current_vertex) for the dequeued vertex
//? Define array for destination vertices:
const destinations = [];

//? start while loop,
//* while queueu is not empty

//* empty queueu means  all vertices in the graph are visited

//? assign the dequeued vertex to a temporary variable (current_vertex)
//~   while (q.count > 0 )
//*        current_vertex = q.Dequeue()

//? assign the destination vertiies to destination array
//*        destinations= graph[current_vertex]

//* in c#: destinations = (char []) graph[current_vertex]
//* you have to make casting type, because hashtable in c#, the key and value are objects

//? for loop on destinations array
//* loop forward , i < destinations.length
//* check:  every vertex in the destination array
//* if it's visited or not
//~  if(!visited[destinations[i]])
//* add the non visited vertex to the queue and visited hashtable
//* q.Enqueue(destinations[i])
//* visited.Add(destinations[i],true)
//*

//? to track solutions vertices:
//* I have two ways, one to store the solution in an array
//* or printed it directly

//* so we will print
//* current vertex and the destinations[i]

//*========================================================================

//& Another representation of the graph
//* represent the graph in more efficient way
//! Class representation of the graph vertex
//^ class contains:
//* vertex name
//* boolean property isVisited
//* Vertex Edges
//^ we applied oop concept of encapsulation
//* all properties and status of object is encapsulated

//! why use class approach:
//* in previous method, we have repeated data, when representing vertices refer to each other
//* but with classes, the vertices point to each other by reference or pointer
//* so it's efficient for memory

//* also when we add new object, it will be sharable along the graph

//! Class representation of the graph edge
//* weight        (default = 0) because we work on traversal non weighted graph
//* Vertex Source   (vertex object as source)
//* Vertex Target    (vertex object as target)

//^ constructor func (weight = 0, Vertex Source, Vertex Target )
//* vertex source and target are objects, they will passed by their pointer or reference
//* so they won't be copied as new objects

//^ note
//* you can in future add properties to the class, if needed

//! Class Graph itself:
