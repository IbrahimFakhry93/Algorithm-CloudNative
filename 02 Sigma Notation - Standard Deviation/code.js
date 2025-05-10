//! 02 – Sigma Notation – Standard Deviation – Algorithm
//* ask chatgpt about sigma notation

//* and standard deviation

//* loops consumes computer resources

//^ model v-1

//* we have first two loops, one loop to enter x[i] values and other loop that sum x[i] values
//* we can't merge the third loop because we need to calculate the average first
//^ mode v-2
//* we merge the two loops into one loop for code performance optimization

//& my code:

function calcStd(n, ...x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }

  console.log(sum);

  const avg = sum / n;
  console.log(avg);
  let a = 0;
  for (let i = 0; i < x.length; i++) {
    a += (x[i] - avg) ** 2;
  }
  const b = a / n;

  console.log(a, b);

  const sd = Math.sqrt(b);

  console.log(sd);
  return sd;
}

calcStd(6, 1, 2, 3, 4, 5, 6);
