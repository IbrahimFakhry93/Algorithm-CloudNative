//& steps:

//! Create auxiliary class for heap node (HeapNode)
//~ Heap node contains: (freq), left_ref, right_ref, data(character)
//^ left_ref, right_ref are subnodes

//* create constructor function inside HeapNode class, params (data, freq)
//~ initialize left_ref, right_ref with null

//! Create class for Huffman algorithm (Huffman)
//~ create constructor, params: text to be encoded (msg)

//* calculate frequencies for msg characters inside the constructor
//~ create HashTable (freqHash) with (key: char, value: freq)
//~ loop over msg to get the freqs and assign them to the HashTable

//! Convert HashTable to priority queue, to sort the freqs by ascending
//~ create priority queue (minHeap)
//~ priority queue of number of HeapNodes
//~ priority queue needs two params: data, priority
//~ data === HeapNode , priority === frequency

//* to convert HT to PQ:
//~ loop over HT keys
//~ create for every key new heap node (newNode)
//~ heap node params: data: HT key (char) , freq: HT value

//^ Now we have priority queue of number of nodes sorted ascending by their priorities

//! Now we need to connect these nodes
//~ gather first two minium freqs nodes and sum them

//* Then create out of them new node (internal node) with new resulted frequency
//~ then assign left_ref and right_ref to this new node
//~ then enqueue this new node in the priority queue
//^ by this enqueue step, the new node will be sorted automatically

// TODO  : This how it goes:
//? create new node internal node's variables (top, left, right, newFreq)
//~ loop over PQ until only all nodes merged into one node
//~ Dequeue min node and assign it to left_ref
//~ Dequeue min node and assign it to right_ref
//~ calculate newFreq of new Node: left.freq + right.freq
//^ create the new heapNode (top) params: internal char, newFreq
//~ declare internal char
//~ internal char:  space as any char, corresponds to zero in ascii code
//^ then assign left_ref and right_ref to then new node:
//* top.left_ref = left_ref; top.right_ref = right_ref
//~ then enqueue this new node in the priority queue (minHeap) with its priority: newFreq
//~ minHeap.Enqueue(top, newFreq)

//* Assign on every branch zeros for right branch, ones for left branch
