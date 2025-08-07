//& Activity Selection (Greedy Algorithm)

//* Activity Selection is a classic problem that can be solved efficiently using a greedy algorithm.
//* The problem is: given a set of activities with start and end times,
//* select the maximum number of activities that don't overlap.
//* The greedy choice is to always pick the activity that finishes earliest,
//* which leaves the most room for subsequent activities.

//* The steps of the algorithm are:

//* Sort all activities by their end time.
//* Select the first activity (the one that ends earliest).
//* For each remaining activity, select it if its start time is greater than or equal to the end time of the last selected activity.
//* For example, given these activities with start and end times:

//* Activities:  A1  A2  A3  A4  A5  A6
//* Start:       1   3   0   5   8   5
//* End:         2   4   6   7   9   9
//* Sort by end time:

//* A1 (1,2), A2 (3,4), A4 (5,7), A5 (8,9), A6 (5,9), A3 (0,6)
//* Select A1 (ends at 2).

//* Next, A2 starts at 3 (≥ 2), select it (ends at 4).

//* A4 starts at 5 (≥ 4), select it (ends at 7).

//* A5 starts at 8 (≥ 7), select it (ends at 9).

//* A6 and A3 are skipped because they overlap with the selected ones.

//* Maximum selected activities: A1, A2, A4, A5.

//? Here is a TypeScript implementation:

// type Activity = {
//   start: number;
//   end: number;
// };

// function activitySelection(activities: Activity[]): Activity[] {
//   Sort activities by their end time
//   activities.sort((a, b) => a.end - b.end);

//   let selected: Activity[] = [];
//   let lastEndTime = 0;

//   for (let activity of activities) {
//     if (activity.start >= lastEndTime) {
//       selected.push(activity);
//       lastEndTime = activity.end;
//     }
//   }

//   return selected;
// }

// Example usage
// const activities: Activity[] = [
//   { start: 1, end: 2 },
//   { start: 3, end: 4 },
//   { start: 0, end: 6 },
//   { start: 5, end: 7 },
//   { start: 8, end: 9 },
//   { start: 5, end: 9 },
// ];

// const result = activitySelection(activities);
// console.log(result);
// Output: [{start:1,end:2}, {start:3,end:4}, {start:5,end:7}, {start:8,end:9}]

//* This implementation sorts the activities by end time and then iterates through them,
//* selecting an activity only if it starts after or when the last selected activity ends.
//* This greedy approach guarantees the maximum number of non-overlapping activities,
//* making it both efficient and practical for scheduling problems.
