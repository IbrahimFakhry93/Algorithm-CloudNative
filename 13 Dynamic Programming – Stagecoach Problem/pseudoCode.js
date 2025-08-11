const labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]; //* labels array to print the shortest route
const data = [
  [0, 2, 4, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 4, 6, 0, 0, 0, 0],
  [0, 0, 0, 3, 2, 4, 0, 0, 0, 0],
  [0, 0, 0, 4, 1, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 4, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//? prepare total cost variable:
//* it contains: total cost and points (vertices) that lead to that cost
//* it is called states and it's an array of objects of (total cost, from, to)
//* state is a dynamic programming terminology
//* state: means the solution of each stage in dynamic programming solution
//* assign to the last element of states an empty object to use it later
//* states[n-1] = {"from": '', "to":"", "totalCost":0}

//* totalCost means the total minimum cost

//? start nested for loop:

//^ outward loop (i)
//~ i = n - 2, backward i >= 0 , i--
//* i = n - 2 because the last point is n - 1, and its cost 0 because there is no cost at arrival destination
//* we are already arrived

//^ inner loop (j)
//~ j = i + 1, forward  j < n, j ++
//* By starting at i + 1, you ensure that you only check forward moves – you cannot travel backward in your journey.
//* This is essential because the dynamic programming approach here relies on already having calculated the cost
//* to get from every point j (which is further along in the journey) to the destination.
//* Thus, when you’re at point i, the values total_cost(j) for all j > i are already computed.

//* fill the states array
//* states[i] = {"from": labels[i], "to": labels[j], "totalCost":Number.MAX_SAFE_INTEGER}

//~ if (data[i][j] == 0) continue  , means this i and j are not connected

//* calculate newCost = data[i][j] + states[j].totalCost
//! look up the slides to understand

//? comparison step:
//~ if newCost < states[i].totalCost
//*   states[i].to = labels[j]
//*   states[i].totalCost = newCost

//* cl: states

//* trace the minimum cost path
//*  path = ['A']
//* loop over states by while loop
//* let i = 0 , let j = 0
//* i for states, j for path
//*  if (states[i].from == path[j])
//*    path[j+1] = states[i].to
//*        j++
//*      i++

//* path[j+1]: means move along array by one element (one step)

//* cl: path, path is the trace or points of the minimum cost route
