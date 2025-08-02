// Huffman Coding is a greedy algorithm used for lossless data compression.
// It assigns variable-length binary codes to input characters,
// where more frequent characters get shorter codes, and less frequent ones get longer codes.
// This reduces the overall size when encoding large amounts of text.
// Huffman coding guarantees the smallest average code length among all prefix-free
// (no code is a prefix of another) binary encodings.

// The steps of the algorithm are:

// Count the frequency of each character in the input.

// Create a priority queue (min-heap) where each node contains a character and its frequency.

// While there is more than one node in the queue:

// Remove the two nodes with the smallest frequency.
// Create a new node with these two as children and with frequency equal to their sum.
// Insert the new node back into the queue.
// The remaining node is the root of the Huffman tree.

// Generate codes by traversing the tree:

// Assign 0 when moving left and 1 when moving right.
// Leaf nodes hold the final code for each character.
// For example, given characters with frequencies:

// a: 5, b: 9, c: 12, d: 13, e: 16, f: 45
// Build the Huffman tree combining smallest pairs repeatedly:

// Combine a and b → frequency 14
// Combine c and d → frequency 25
// Continue combining until the tree is formed
// The generated codes may look like:

// f: 0
// c: 100
// d: 101
// a: 1100
// b: 1101
// e: 111
// Here is a practical TypeScript implementation:

// type Node = {
//   char?: string;
//   freq: number;
//   left?: Node;
//   right?: Node;
// };

// function buildHuffmanTree(freqMap: Record<string, number>): Node {
//   let nodes: Node[] = Object.entries(freqMap).map(([char, freq]) => ({
//     char,
//     freq,
//   }));

//   while (nodes.length > 1) {
//     // Sort nodes by frequency ascending
//     nodes.sort((a, b) => a.freq - b.freq);

//     // Take two nodes with smallest frequencies
//     const left = nodes.shift()!;
//     const right = nodes.shift()!;

//     // Create new parent node
//     const newNode: Node = {
//       freq: left.freq + right.freq,
//       left,
//       right,
//     };

//     nodes.push(newNode);
//   }

//   return nodes[0];
// }

// function generateCodes(
//   node: Node,
//   prefix = "",
//   codeMap: Record<string, string> = {}
// ): Record<string, string> {
//   if (node.char !== undefined) {
//     codeMap[node.char] = prefix;
//   } else {
//     if (node.left) generateCodes(node.left, prefix + "0", codeMap);
//     if (node.right) generateCodes(node.right, prefix + "1", codeMap);
//   }
//   return codeMap;
// }

// // Example usage
// const text = "aaabbc";
// const freqMap: Record<string, number> = {};

// for (const char of text) {
//   freqMap[char] = (freqMap[char] || 0) + 1;
// }

// const tree = buildHuffmanTree(freqMap);
// const codes = generateCodes(tree);
// console.log(codes);
// // Output example: { a: '0', b: '10', c: '11' }

//* This implementation builds the Huffman tree based on character frequencies and then generates binary codes by traversing the tree.
//* It uses a simple array for the priority queue (which is fine for small datasets but can be optimized using a real heap).
//* This algorithm is highly effective in compressing files where character frequency is skewed,
//* like text files or structured data, and forms the basis for compression formats like ZIP and JPEG.
