type Activity = {
  start: number;
  end: number;
};

function activitySelection(activities: Activity[]): Activity[] {
  // Sort activities by their end time
  activities.sort((a, b) => a.end - b.end);

  let selected: Activity[] = [];
  let lastEndTime = 0;

  for (let activity of activities) {
    if (activity.start >= lastEndTime) {
      selected.push(activity);
      lastEndTime = activity.end;
    }
  }

  return selected;
}

// Example usage
const activities: Activity[] = [
  { start: 1, end: 2 },
  { start: 3, end: 4 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 8, end: 9 },
  { start: 5, end: 9 },
];

const result = activitySelection(activities);
console.log(result);
// Output: [{start:1,end:2}, {start:3,end:4}, {start:5,end:7}, {start:8,end:9}]
