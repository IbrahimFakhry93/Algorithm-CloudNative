//? code adjustments
//* add weights to add edges methods
//* add two properties to vertex
//*  sourceOfTotalLength (vertex object), totalLength
//! sourceOfTotalLength I think better to be named sourceOfMinimumLength

//* All flags must be reset in restoreVertices()
//* totalLength should be set to 0 (resetting the accumulated cost)
//* sourceOfTotalLength should be set to null, since it's expected to store an object reference

//! method Dijkstra
//? Steps:
//* 1. Loop through all vertices and set their totalLength to Infinity (since they haven't been reached yet).
//* 2. Set the starting vertex's totalLength to 0 (this is where the path begins).
//* 3. In JavaScript, "Infinity" is a built-in constant and does NOT need to be replaced with Number.MAX_SAFE_INTEGER.
//*    - However, using `Number.MAX_SAFE_INTEGER` may be useful in specific cases where numeric

//* loop on vertices again
//* set the current vertex and the destinations

//* if(destinations == null) continue  why?  if no branches or edges of this vertex so skip it

//* set currentEdge = destinations[i].target

//* new length = currentVertex.totalLength + currentEdge.weight

//* if (newLength < currentEdge.totalLength)
//*       currentEdge.totalLength = newLength
//*        sourceOfTotalLength = currentVertex

//? print the shortestPath
//* it will be easier than printing in stageCoach problem
//* we will move backward from the last vertex in the path

//* define path = last vertex (name) in the path (J)
//* define current vertex (v)  === last vertex (object) in the path (J)
//! this current vertex will be changed later
//* while(v.sourceOfTotalLength  != null)
//^  v.sourceOfTotalLength == null  is the starting point so once we reach the starting point
//^  the while loop will be terminated
//*   path = v.sourceOfTotalLength.name + '-' + path (concatenate it in the path)
//*   v  = v.sourceOfTotalLength      (assign current vertex to be the sourceOfTotalLength )

//* print path and totalLength
