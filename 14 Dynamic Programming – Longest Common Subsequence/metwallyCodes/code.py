text_01 = "HELLOWORLD"
text_02 = "OHELOD"

n = len(text_01)
m = len(text_02)

text_01 = " " + text_01
text_02 = " " + text_02

dp = []

for i in range(m + 1):
  dp.append([0] * (n + 1))

for i in range(1, m + 1):
  for j in range(1, n + 1):
    if text_02[i] == text_01[j]:
      dp[i][j] = 1 + dp[i - 1][j - 1]
    else:
      dp[i][j] = max(dp[i][j - 1], dp[i - 1][j])

str = ""
i = m
j = n

while i > 0 and j > 0:
  if dp[i][j] > dp[i][j - 1]:
    if dp[i][j] == dp[i - 1][j]:
      i -= 1
    else:
      str = text_02[i] + str
      i -= 1
      j -= 1
  else:
    j -= 1

print(dp[m][n])
print(str)
