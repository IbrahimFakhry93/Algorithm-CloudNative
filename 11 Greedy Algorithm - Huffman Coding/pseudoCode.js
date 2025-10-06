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

//* Hash-table exists in collections in c#
//* priority queue in collections.Generic in c#

//! Convert HashTable to priority queue, to sort the freqs by ascending
//* Priority queue needs two things (data (node itself), priority (frequency))
//* so the frequency already exists internally in the node as a property
//* and exists externally for sorting

//~ create priority queue (minHeap)
//~ priority queue of number of HeapNodes
//~ priority queue needs two params: data, priority
//~ data === HeapNode , priority === frequency

//* to convert HT to PQ:
//~ loop over HT keys
//~ create for every key new heap node (newNode)
//~ heap node params: data: HT key (char) , freq: HT value

//^ Now we have priority queue of number of nodes sorted ascending by their priorities (frequencies)
// ^ look up 19.png in slides folder, look up priority queue at no.1 (top left), we are now here

//! Now we need to connect these nodes
//~ gather first two minium freqs nodes and sum them

//* Then create out of them new node (internal node) with new resulted frequency
//~ then assign left_ref and right_ref to this new node
//~ then enqueue this new node in the priority queue
//^ by this enqueue step, the new node will be sorted automatically

// TODO  : This how it goes:
//? create new node internal node's variables (top, left, right, newFreq)
//~ loop over PQ until only all nodes merged into one node (ultimate node), until reach tree in no.5 in 19.png photo
//~ Dequeue min node
//~ Dequeue the other min node
//~ give them variables left and right, so left and right are the min dequeued nodes
//~ calculate newFreq of new Node: left.freq + right.freq
//^ create the new heapNode (top) params: internal char, newFreq
//~ declare internal char, it's the character for the node after sum, special character just empty no letters
//^ look up to understand photo 19.png or 20.png in slides folder
//* we use internal char to distinguish nodes results from summation of two leaf nodes, from the leaf nodes itself
//* leaf nodes which contains the msg characters that have min freqs

//~ internal char: 0 so it's empty, empty corresponds to zero in ascii code
//^ then assign left_ref and right_ref to then new node:
//* top.left_ref = left_ref; top.right_ref = right_ref
//~ then enqueue this new node in the priority queue (minHeap) with its priority: newFreq
//~ minHeap.Enqueue(top, newFreq)

//* by this we build the tree (min heap priority queue) as in photo 19.png in slides folder (tree no. 5)

//! now we need to assign on every branch zeros for left branch, ones for right branch
//^ look up generateCodes function explanation in index.js

// TODO : Create generateCodes method with (params: ultimate node (top node), empty string )
//* ultimate node which is the root node that has sum value 8 in, look up photo 19.png , no 8
// TODO : and call it recursively with subnodes left and right
//* access the ultimate node by peek method (as in C#) without removing it from the queue
//* for js: const minHeapRoot = this.minHeap.front(); , front instead of peek

//* create new HashTable for these codes named (codesHash)
//* add the nodes that contain characters (data) not internal_char (empty string)

//! test the code:
//* take instance of class Huffman and pass msg ='internet'
//* loop over the codesHash (the new created hashTable)
if (node == null) {
  //* here after reaching leaf nodes, so no more branches on left or right
  return;
}
//* here we just reach the leaf nodes
if (node.data != internal_char) {
  codesHash[node.data] = str; //* codesHash is the new hash table
}

generateCodes(node.left, str + "0");
generateCodes(node.right, str + "1");
