//* A greedy rule (“choose the biggest win next”)

// Candidate data as shown in the image
const candidates = [
  { id: "1st", basicFit: 5, techInterview: null, task: null, overall: null },
  { id: "2nd", basicFit: 6, techInterview: 6, task: 4, overall: null },
  { id: "3rd", basicFit: 7, techInterview: 4, task: null, overall: null },
  { id: "4th", basicFit: 8, techInterview: 9, task: 7, overall: 24 },
  { id: "5th", basicFit: 9, techInterview: 8, task: 5, overall: null },
  { id: "6th", basicFit: 10, techInterview: 7, task: 6, overall: 23 },
];

// A greedy function to calculate and select candidates based on the highest overall score
function greedyCandidateSelector(candidates) {
  // First, calculate the overall score for all candidates.
  // We'll calculate the overall score even for candidates where it's missing in the image,
  // assuming the score is the sum of all available scores.
  const scoredCandidates = candidates.map((candidate) => {
    // Get all scores that are not null
    const scores = [
      candidate.basicFit,
      candidate.techInterview,
      candidate.task,
    ].filter((score) => score !== null);
    // Sum the scores. If no scores are available, overall score is 0.
    const overallScore = scores.reduce((sum, score) => sum + score, 0);
    return { ...candidate, overall: overallScore };
  });

  // Sort candidates in descending order based on their overall score.
  // This is the "greedy" step: at each point, we pick the best option available.
  scoredCandidates.sort((a, b) => b.overall - a.overall);

  // The first candidate in the sorted list is the one with the highest overall score.
  const bestCandidate = scoredCandidates[0];

  return {
    bestCandidate,
    allCandidatesSorted: scoredCandidates,
  };
}

// Run the algorithm
const result = greedyCandidateSelector(candidates);

console.log(
  "All candidates sorted by overall score (highest first):",
  result.allCandidatesSorted
);
console.log("---");
console.log("Greedy choice: The best candidate is:", result.bestCandidate);

// Example output:
// All candidates sorted by overall score (highest first): [
//   { id: '4th', basicFit: 8, techInterview: 9, task: 7, overall: 24 },
//   { id: '6th', basicFit: 10, techInterview: 7, task: 6, overall: 23 },
//   { id: '5th', basicFit: 9, techInterview: 8, task: 5, overall: 22 },
//   { id: '2nd', basicFit: 6, techInterview: 6, task: 4, overall: 16 },
//   { id: '3rd', basicFit: 7, techInterview: 4, task: null, overall: 11 },
//   { id: '1st', basicFit: 5, techInterview: null, task: null, overall: 5 }
// ]
// ---
// Greedy choice: The best candidate is: { id: '4th', basicFit: 8, techInterview: 9, task: 7, overall: 24 }
