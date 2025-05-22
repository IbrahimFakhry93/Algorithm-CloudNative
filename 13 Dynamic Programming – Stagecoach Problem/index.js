//! 23 – Dynamic Programming – Stagecoach Problem – Algorithm – Code

// function fact(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }

//   console.log(fact);
// }

// fact(5);

//*=======================================================
function facRec(n) {
  if (n === 1) return 1;

  return n * facRec(n - 1);
}
// console.log(facRec(5));

//*=======================================================

const n = 5;
let arr = new Array(n);

console.log(arr);
arr[0] = arr[1] = 1;
arr[2] = 2;
for (let i = 3; i <= n; i++) {
  //   if (i == 1 || i == 2) arr[i] = i;
  arr[i] = -1;
}

console.log(arr);

function facDyn(n, arr) {
  if (arr[n] != -1) return arr[n];

  arr[n] = n * facDyn(n - 1, arr);
  return arr[n];
}
console.log(facDyn(n, arr));

//*=======================================================

function fabOrd(n) {
  if (n === 1 || n === 2) return 1;

  return fabOrd(n - 1) + fabOrd(n - 2);
}
// console.log(fabOrd(6));
//*=======================================================
