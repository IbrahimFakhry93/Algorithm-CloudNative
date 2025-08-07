// Candidate IDs
const candidates = [1, 2, 3, 4, 5, 6];

// Stage scores for each candidate (missing = 0)
const scores = {
  1: { basicFit: 5, tech: 0, task: 0 },
  2: { basicFit: 6, tech: 6, task: 0 },
  3: { basicFit: 7, tech: 4, task: 4 },
  4: { basicFit: 8, tech: 9, task: 7 },
  5: { basicFit: 9, tech: 8, task: 5 },
  6: { basicFit: 10, tech: 7, task: 6 },
};

// How many to keep after each stage
const quotas = [
  { stage: "basicFit", keep: 4 },
  { stage: "tech", keep: 3 },
  { stage: "task", keep: 2 },
];

function greedyHire(list, scores, quotas) {
  let remaining = list.slice();

  for (const { stage, keep } of quotas) {
    // 2.1 Sort descending by this stage’s score
    remaining.sort((a, b) => scores[b][stage] - scores[a][stage]);

    // 2.2 Keep only the top K
    remaining = remaining.slice(0, keep);
  }

  return remaining;
}

const finalHires = greedyHire(candidates, scores, quotas);
console.log(finalHires); // → [4, 6]

/**
 * Runs a greedy, stage-by-stage cutoff.
 * @param {number[]}         list   – initial candidates
 * @param {Object.<number, {basicFit:number,tech:number,task:number}>} scores
 * @param {{stage:string,keep:number}[]} quotas
 * @returns {number[]} final selected candidates
 */

//*==============================

//? other simple code:

// 1. Candidate IDs
const allCandidates = [1, 2, 3, 4, 5, 6];

// 2. Stage scores (missing scores treated as 0)
const basicFit = { 1: 5, 2: 6, 3: 7, 4: 8, 5: 9, 6: 10 };
const tech = { 1: 0, 2: 6, 3: 4, 4: 9, 5: 8, 6: 7 };
const task = { 1: 0, 2: 0, 3: 4, 4: 7, 5: 5, 6: 6 };

// 3. Helper: take top K candidates by a given score map
function pickTop(candidates, scoreMap, keepCount) {
  // Copy the array so we don't mutate the original
  const sorted = candidates.slice().sort((a, b) => {
    return scoreMap[b] - scoreMap[a]; // descending by score
  });
  return sorted.slice(0, keepCount);
}

// 4. Greedy, stage-by-stage selection
let pool;

// Stage 1: Basic Fit → keep top 4
pool = pickTop(allCandidates, basicFit, 4);
console.log("After Basic Fit:", pool);
// e.g. [6, 5, 4, 3]

// Stage 2: Tech Interview → keep top 3
pool = pickTop(pool, tech, 3);
console.log("After Tech:", pool);
// e.g. [4, 5, 6]

// Stage 3: Task → keep top 2
pool = pickTop(pool, task, 2);
console.log("After Task:", pool);
// e.g. [4, 6]

// Final hires:
console.log("Final Hires:", pool);
