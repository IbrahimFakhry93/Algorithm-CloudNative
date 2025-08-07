class CharFreq:

  def __init__(self):
    pass

  def ASCIIMethod(self, message):
    print("ASCIIMethod")

    freq = [0] * 127

    # Count the frequency of each ASCII character in the string
    for i in range(len(message)):
      current_code = ord(message[i])
      freq[current_code] += 1

    # Print the characters and their corresponding frequencies
    for i in range(len(freq)):
      if freq[i] > 0:
        c = chr(i)
        print(c, freq[i])

  def AnyCodeMethod(self, message):
    print("AnyCodeMethod")

    freq = {}

    # Count the frequency of any character in the string
    for i in range(len(message)):
      if message[i] not in freq:
        freq[message[i]] = 1
      else:
        freq[message[i]] += 1

    # Print the characters and their corresponding frequencies
    for k in freq.keys():
      print(k, freq[k])

    self.SortHash(freq)

  def SortHash(self, freq):
    freqArray = [[0 for j in range(2)] for i in range(len(freq))]

    # Convert the Hashtable into a 2D integer array
    i = 0
    for k in freq.keys():
      freqArray[i][0] = ord(k)
      freqArray[i][1] = freq[k]
      i += 1

    # Sort the array in descending order based on the frequency count
    self.sort(freqArray, 0, len(freq) - 1)

    print("Print Sorted data ...")

    # Print the characters and their corresponding frequencies
    for i in range(len(freqArray)):
      print(chr(freqArray[i][0]), freqArray[i][1])

  def sort(self, array, start, end):
    if end <= start:
      return

    midpoint = (end + start) // 2
    self.sort(array, start, midpoint)
    self.sort(array, midpoint + 1, end)
    self.merge_(array, start, midpoint, end)

  def merge_(self, array, start, mid, end):
    # Calculate lengths of two sub-arrays
    left_length = mid - start + 1
    right_length = end - mid
    # Create temporary sub-arrays

    left_array = [[0, 0] for i in range(left_length)]
    right_array = [[0, 0] for j in range(right_length)]

    # Copy data to temporary sub-arrays
    for i in range(left_length):
      left_array[i][0] = array[start + i][0]
      left_array[i][1] = array[start + i][1]
    for j in range(right_length):
      right_array[j][0] = array[mid + 1 + j][0]
      right_array[j][1] = array[mid + 1 + j][1]

    # Merge the temporary sub-arrays back into the original array
    i = 0
    j = 0
    k = start
    while i < left_length and j < right_length:
      if left_array[i][1] <= right_array[j][1]:
        array[k][0] = left_array[i][0]
        array[k][1] = left_array[i][1]
        i += 1
      else:
        array[k][0] = right_array[j][0]
        array[k][1] = right_array[j][1]
        j += 1
      k += 1

    # Copy the remaining elements of left_array[] if any
    while i < left_length:
      array[k][0] = left_array[i][0]
      array[k][1] = left_array[i][1]
      i += 1
      k += 1

    # Copy the remaining elements of right_array[] if any
    while j < right_length:
      array[k][0] = right_array[j][0]
      array[k][1] = right_array[j][1]
      j += 1
      k += 1


from CharFreq import CharFreq


def main():
  msg = "The output from Huffman's algorithm can be viewed as a variable length code table for encoding a source symbol. The algorithm derives this table from the estimated probability or frequency of occurrence for each possible value of the source symbol. as in other entropy encoding methods, more common symbols are generally represented using fewer bits than less common symbols. Huffman's method can be efficiently implemented, finding a code in time linear to the number of input weights if these weights are sorted. However, although optimal among methods encoding symbols separately, Huffman coding is not always optimal among all compression methods it is replaced with arithmetic coding or asymmetric numeral systems if better compression ratio is required."
  # msg = "internet"
  cf = CharFreq()
  cf.AnyCodeMethod(msg)
  #cf.ASCIIMethod(msg)


if __name__ == "__main__":
  main()
