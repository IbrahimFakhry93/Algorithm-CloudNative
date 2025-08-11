function fabDyn(n, arr) {
  if (arr[n] != -1) return arr[n];
  arr[n] = fabDyn(n - 1, arr) + fabDyn(n - 2, arr);
  return arr[n];
}
const nDyn = 45;
const arrDyn = new Array(nDyn).fill(-1); // Example: creates an array of length 20 filled with -1
arrDyn[0] = arrDyn[1] = 1;

console.log(arrDyn);

console.log(fabDyn(nDyn - 1, arrDyn));

//*==========

function fabOrd(n) {
  if (n === 1 || n === 2) return 1;

  return fabOrd(n - 1) + fabOrd(n - 2);
}
console.log(fabOrd(45)); //* notice the difference in time to calculate
