//! 29 – Graph – Depth First Search – Algorithm – Code

//* DFS: A graph traversal algorithm.
//* Unlike BFS, DFS does not work level by level.
//* Instead, it explores as deep as possible along one branch.
//* Once it reaches the end of a path or a dead end, it backtracks
//* to the last node that had unexplored neighbors and continues the search from there.

//* DFS is typically implemented recursively.
//* It visits a node, then recursively explores each of its unvisited neighbors (backtracking),
//* going as deep as possible before backtracking.

//* Both DFS and BFS share the same time complexity: O(V + E)
//* where V is the number of vertices and E is the number of edges.
//* it can be expressed as O(n)

//^ open: code.cjs
//* we will use same classes of BFS to represent DFS

//* Both DFS and BFS are O(n)
