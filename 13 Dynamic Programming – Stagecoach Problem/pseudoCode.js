//? prepare total cost variable:
//* it contains: total cost and points that lead to this cost
//* it called states and it's array
//* state: means the solution of each stage in dynamic programming solution
//* assign to the last element of states an empty object to use it later
//* states[n-1] = {"from": '', "to":"", "totalCost":0}

//? start nested for loop:

//^ outward loop (i)
//* i = n - 2, backward i >= 0 , i--
//* because last point is n - 1, and its cost 0 because there is no cost at arrival destination
//* we are already arrived
//* fill the states array
//* states[i] = {"from": labels[i], "to": labels[j], "totalCost":Number.MAX_SAFE_INTEGER}

//^ inner loop (j)
//* j = i + 1, forward  j < n, j ++
// By starting at i + 1, you ensure that you only check forward moves – you cannot travel backward in your journey.
// This is essential because the dynamic programming approach here relies on already having calculated the cost
// to get from every point j (which is further along in the journey) to the destination.
// Thus, when you’re at point i, the values total_cost(j) for all j > i are already computed.

//* if (data[i][j] == 0) continue

//* calculate newCost = data[i][j] + states[j].totalCost
//! look up the slides to understand

//* comparison step:
//* if newCost < states[i].totalCost
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

//* cl: path, path is the trace or points of the minimum cost route
