def segregate(array, start, end):
    # if the subarray has only one element, return
    if end <= start:
        return

    # divide the subarray into two halves
    mid = (start + end) // 2
    segregate(array, start, mid)
    segregate(array, mid+1, end)

    # merge the two sorted halves
    merge(array, start, mid, end)


def merge(array, start, mid, end):
    # find the length of the two halves
    left_length = mid - start + 1
    right_length = end - mid

    # create temporary arrays for the left and right halves
    left_array = [0] * left_length
    right_array = [0] * right_length

    # copy the elements from the original array into the temporary arrays
    for i in range(left_length):
        left_array[i] = array[start + i]
    for j in range(right_length):
        right_array[j] = array[mid + 1 + j]

    # merge the sorted halves into the original array
    i = 0  # index of the left array
    j = 0  # index of the right array
    k = start  # index of the merged array

    # copy negative integers from the left and right halves
    while i < left_length and left_array[i] <= 0:
        array[k] = left_array[i]
        i += 1
        k += 1
    while j < right_length and right_array[j] <= 0:
        array[k] = right_array[j]
        j += 1
        k += 1

    # copy remaining elements from the left and right halves
    while i < left_length:
        array[k] = left_array[i]
        i += 1
        k += 1
    while j < right_length:
        array[k] = right_array[j]
        j += 1
        k += 1


if __name__ == "__main__":
    array = [6, -5, 12, 10, -9, -1]
    print(array)
    segregate(array, 0, len(array) - 1)
    print(array)
