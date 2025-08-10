def find_minimum_spanning_tree():
    labels = ['1', '2', '3', '4', '5', '6']
    graph = [
        [0, 6.7, 5.2, 2.8, 5.6, 3.6],
        [6.7, 0, 5.7, 7.3, 5.1, 3.2],
        [5.2, 5.7, 0, 3.4, 8.5, 4.0],
        [2.8, 7.3, 3.4, 0, 8, 4.4],
        [5.6, 5.1, 8.5, 8, 0, 4.6],
        [3.6, 3.2, 4, 4.4, 4.6, 0]
    ]
    v = 6
    selected_edges_count = 0
    selected = [False] * v
    selected[0] = True
    while selected_edges_count < v - 1:
        minimum_weight = float('inf')
        temp_from = -1
        temp_to = -1
        for i in range(v):
            if selected[i]:
                for j in range(v):
                    if not selected[j] and graph[i][j] > 0 and graph[i][j] < minimum_weight:
                        minimum_weight = graph[i][j]
                        temp_from = i
                        temp_to = j
        selected[temp_to] = True
        selected_edges_count += 1
        print(labels[temp_from] + " - " + labels[temp_to] + " : " + str(graph[temp_from][temp_to]))

find_minimum_spanning_tree()
