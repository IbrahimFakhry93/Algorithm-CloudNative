//? Fibonacci Ordinary using recursion

//* Fib   = 1 1 2 3 5 8 13 21 34 55
//* index =                      10  (1 based not zero based)

//* Fib(10) = 55

function fabOrd(n) {
  if (n === 1 || n === 2) return 1;

  return fabOrd(n - 1) + fabOrd(n - 2);
}
// console.log(fabOrd(6));

//* arr = [1, 1]

//^ open: 1,jpg

//* note: fab(4) has been calculated for two times
//* fab(3) has been calculated for three times

//! Dynamic programming concept:
//* El 7aga ely 7asbtaha 2bl keda, 5azenha in any place (array,database) or shof el data structure el monaseb leek and save in it
//* for example array

//? Fibonacci Ordinary using Dynamic programming: (Recursion + caching )

//* in an array, place first two elements as one as Fib (1) and Fib (2) == 1
//* and place the rest -1 so if fab(8) is -1 means it hasn't been calculated yet

function FabDyn(n, arr) {
  if (arr[n] != -1) return arr[n];
  arr[n] = FabD(n - 1, arr) + FabDyn(n - 2, arr);
  return arr[n];
}

const arrDyn = new Array(20).fill(-1); // Example: creates an array of length 20 filled with -1
arrDyn[0] = arrDyn[1] = -1;

const nDyn = 50;
facDyn(nDyn, arrDyn);

//*=======================================================

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
