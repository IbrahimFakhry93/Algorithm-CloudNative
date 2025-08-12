items = [{
  "name": "#1",
  "weight": 1,
  "profit": 4
}, {
  "name": "#2",
  "weight": 3,
  "profit": 9
}, {
  "name": "#3",
  "weight": 5,
  "profit": 12
}, {
  "name": "#4",
  "weight": 4,
  "profit": 11
}]

max_weight = 8

# Add a dummy item at the beginning with weight and profit equal to zero
items.insert(0, {"name": "#0", "weight": 0, "profit": 0})

# Initialize a 2D array to store the maximum profit that can be obtained using the first i items and a knapsack of weight j
dp = [[0 for j in range(max_weight + 1)] for i in range(len(items))]

# Fill in the dp array using dynamic programming
for i in range(1, len(items)):
  for j in range(1, max_weight + 1):
    if items[i]["weight"] <= j:
      dp[i][j] = max(dp[i - 1][j],
                     items[i]["profit"] + dp[i - 1][j - items[i]["weight"]])
    else:
      dp[i][j] = dp[i - 1][j]

# Print the maximum profit that can be obtained using the first n items and a knapsack of weight W
print("Max Profit:", dp[len(items) - 1][max_weight])

# Backtrack through the dp array to find the items included in the optimal solution
solution = []
i = len(items) - 1
j = max_weight
remain = max_weight

while remain >= 0 and j > 0:
  if dp[i][j] > dp[i - 1][j]:
    solution.append(items[i]["name"])
    remain -= items[i]["weight"]
    j = remain
    i -= 1
  else:
    i -= 1

# Print the names of the items included in the optimal solution
print(solution)
