const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("datastructures-js");

// console.log(PriorityQueue);
// console.log(MinPriorityQueue);

class HeapNode {
  constructor(char, freq) {
    this.char = char;
    this.freq = freq;
    this.left = this.right = null;
  }
}

class Huffman {
  constructor(msg) {
    //* Initialize the min priority queue with a comparator based on frequency
    this.minHeap = new MinPriorityQueue((node) => node.freq);
    this.internal_char = String.fromCharCode(0);

    const freqHash = new Map();
    this.codesHash = new Map();

    //*======================
    for (let i = 0; i < msg.length; i++) {
      let char = msg[i];
      if (!freqHash.has(char)) freqHash.set(char, 1);
      else freqHash.set(char, freqHash.get(char) + 1);
    }
    // console.log(freqHash);

    //* convert HT to PQ
    //* Enqueue elements using their frequency as priority
    for (const [key, value] of freqHash) {
      const newNode = new HeapNode(key, value);
      this.minHeap.enqueue(newNode);
    }

    //* get the two node with the lowest frequencies and merge the two least frequent nodes at each step.
    let left, right, top, newFreq;

    while (this.minHeap.size() > 1) {
      left = this.minHeap.dequeue();
      right = this.minHeap.dequeue();

      newFreq = left.freq + right.freq;
      top = new HeapNode(this.internal_char, newFreq); //* top is internal node
      top.left = left;
      top.right = right;

      this.minHeap.enqueue(top);
      //*============
      //   console.log(left);
      //   console.log(right);
      //   console.log("                        ");
      //   console.log("top:");
      //   console.log(top);
      //   console.log("=====================");
    }

    const minHeapRoot = this.minHeap.front();
    // console.log(minHeapRoot);

    this.generateCodes(minHeapRoot, "");
  }

  generateCodes(node, str) {
    if (node == null) {
      return;
    }
    if (node.char != this.internal_char) {
      this.codesHash.set(node.char, str);
    }

    this.generateCodes(node.left, str + "0");
    this.generateCodes(node.right, str + "1");
  }
}

const huffman = new Huffman("internet");

for (const k of huffman.codesHash.keys()) {
  console.log(k, huffman.codesHash.get(k));
}
