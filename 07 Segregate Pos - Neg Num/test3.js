function segregate(arr) {
  const left_neg = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      left_neg.push(arr[i]);
      arr.splice(i, 1); //! mentor
      i--;
    }
  }

  arr = [...left_neg, ...arr];

  console.log(arr);

  return arr;
}

const arr = [6, -5, 12, 10, -9, -1];
segregate(arr);
