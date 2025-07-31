
#! Time comp here is O(n^2)

def bubble_sort(list1):
    # Outer loop to traverse the entire list
    for i in range(0, len(list1) - 1):
        for j in range(len(list1) - 1 - i):
            if list1[j] > list1[j + 1]:
                # Swap using tuple unpacking
                list1[j], list1[j + 1] = list1[j + 1], list1[j]
                print("**********", list1)
        print(list1)
    return list1

# bubble_sort([11, 5, 2, 8, 9, 1])
bubble_sort([1, 2, 5, 8, 9, 11])


#*=====================================================================

#* Check array sorted by placing flag to indicate if swapping occurs or not


#! Time comp here is O(n)
def bubble_sortS(list1):
    for i in range(0, len(list1) - 1):
        flag = 0
        for j in range(0, len(list1) - 1 - i):
            if list1[j] > list1[j + 1]:
                tmp = list1[j]
                list1[j] = list1[j + 1]
                list1[j + 1] = tmp
                flag = 1
        print("**********", list1)
        if flag == 0:
            break
    print(list1)
    return list1

bubble_sortS([1, 5, 2, 8, 9, 1])
# bubble_sortS([1, 2, 5, 8, 9, 11])
