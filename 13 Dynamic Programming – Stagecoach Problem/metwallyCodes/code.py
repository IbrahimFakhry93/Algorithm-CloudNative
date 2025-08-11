import sys

labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

# Define the graph as an adjacency matrix
data = [[0, 2, 4, 3, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 7, 4, 6, 0, 0, 0],
        [0, 0, 0, 0, 3, 2, 4, 0, 0, 0], [0, 0, 0, 0, 4, 1, 5, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 4, 0], [0, 0, 0, 0, 0, 0, 0, 6, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 3, 3, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

n = len(data)

# Initialize the "states" array to represent the minimum cost and path from each vertex to the destination vertex J
states = [None] * n
states[n - 1] = {"from": "", "to": "", "cost": 0}

# Iterate over each vertex in reverse order and update its state by considering all edges from that vertex to vertices with higher indices
for i in range(n - 2, -1, -1):
  states[i] = {"from": labels[i], "to": labels[i], "cost": sys.maxsize}
  for j in range(i + 1, n):
    if data[i][j] == 0:
      continue
    newCost = data[i][j] + states[j]["cost"]
    if newCost < states[i]["cost"]:
      states[i]["to"] = labels[j]
      states[i]["cost"] = newCost

print(states)
# Compute the minimum cost and path from A to J using the computed states
path = ["A"]
i = 0
j = 0
while i < len(states):
  if states[i]["from"] == path[j]:
    path.append(states[i]["to"])
    j += 1
  i += 1

print("Minimum Cost:", states[0]["cost"])
print("Minimum Path:", "->".join(path))
