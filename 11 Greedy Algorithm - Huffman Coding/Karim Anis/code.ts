type HuffmanNode = {
  char?: string;
  freq: number;
  left?: HuffmanNode;
  right?: HuffmanNode;
};

function buildHuffmanTree(freqMap: Record<string, number>): HuffmanNode {
  let nodes: HuffmanNode[] = Object.entries(freqMap).map(([char, freq]) => ({
    char,
    freq,
  }));

  while (nodes.length > 1) {
    // Sort nodes by frequency ascending
    nodes.sort((a, b) => a.freq - b.freq);

    // Take two nodes with smallest frequencies
    const left = nodes.shift()!;
    const right = nodes.shift()!;

    // Create new parent node
    const newNode: HuffmanNode = {
      freq: left.freq + right.freq,
      left,
      right,
    };

    nodes.push(newNode);
  }

  return nodes[0];
}

function generateCodes(
  node: HuffmanNode,
  prefix = "",
  codeMap: Record<string, string> = {}
): Record<string, string> {
  if (node.char !== undefined) {
    codeMap[node.char] = prefix;
  } else {
    if (node.left) generateCodes(node.left, prefix + "0", codeMap);
    if (node.right) generateCodes(node.right, prefix + "1", codeMap);
  }
  return codeMap;
}

// Example usage
const text = "aaabbc";
const freqMap: Record<string, number> = {};

for (const char of text) {
  freqMap[char] = (freqMap[char] || 0) + 1;
}

const tree = buildHuffmanTree(freqMap);
const codes = generateCodes(tree);
console.log(codes);
// Output example: { a: '0', b: '10', c: '11' }
