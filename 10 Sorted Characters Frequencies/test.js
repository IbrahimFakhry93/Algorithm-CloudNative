class CharFreq {
  HashTableMethod(str) {
    //* Map in JS is Built-In Alternatives of hash-table
    //* Map key: char
    //* Map value: Freq

    console.log("HashTableMethod");

    const freq = new Map();

    // Iterate over the string and update the count using Map methods
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (!freq.has(char)) {
        freq.set(char, 1);
      } else {
        freq.set(char, freq.get(char) + 1);
      }
    }

    // console.log("Map content:", freq);

    // Using spread operator to create an array of [key, value] pairs
    const freqArr = [...freq];
    // console.log("Spread Operator:", freqArr);

    return freqArr;
  }

  HashTableSort(arr, s, e) {
    if (s == e) return;

    let m = Math.floor((s + e) / 2);

    this.HashTableSort(arr, s, m);
    this.HashTableSort(arr, m + 1, e);
    this.HashMerge(arr, s, m, e);
  }

  HashMerge(arr, s, m, e) {
    //* create new arrays for each side and fill them by for loop

    const left_arr = [];
    const left_length = m - s + 1;
    for (let i = 0; i < left_length; i++) {
      left_arr[i] = arr[i + s];
    }
    const right_arr = [];
    const right_length = e - m;
    for (let j = 0; j < right_length; j++) {
      right_arr[j] = arr[m + 1 + j];
    }

    console.log(`s: ${s}, m: ${m}, e:${e}`);
    console.log("                                                    ");

    console.log("original_arr before merge: ");
    console.log(arr);
    console.log("                                                    ");
    console.log(`left_arr:`);
    console.log(left_arr);
    console.log("                                                    ");
    console.log(`right_arr:`);
    console.log(right_arr);

    //* while loop to compare all items in the array and sort in the original array
    let i = 0;
    let j = 0;
    let k = s;

    //* i: for left array
    //* j: for right array
    //* k: for original array (arr)
    while (left_arr.length > i && right_arr.length > j) {
      //* compare
      if (right_arr[j][1] <= left_arr[i][1]) {
        //* sort (place the smaller in the original array at index k)
        arr[k] = right_arr[j];
        j++;
      }
      //* compare
      else {
        //* sort (place the smaller in the original array at index k)
        arr[k] = left_arr[i];
        i++;
      }

      k++; //* after compare finish, move to the next index in the original array
      //* to place the next smaller number
    }

    //& Copy any remaining elements from left_arr (if any).
    while (left_arr.length > i) {
      //^ note: no need to compare again
      //* because at this point they are certainly sorted
      arr[k] = left_arr[i]; //* k, i values are k++ and i++ from the last while loop above
      i++;
      k++;
    }
    //& Copy any remaining elements from right_arr (if any).
    while (right_arr.length > j) {
      arr[k] = right_arr[j];
      j++;
      k++;
    }
    console.log("                                                    ");
    console.log("original_arr after merge: ");
    console.log(arr);
    console.log("===============================================");
  }
}

let charFreq = new CharFreq();
const str = "hello world";

const freqArr = charFreq.HashTableMethod(str);

// console.log(freqArr);

charFreq.HashTableSort(freqArr, 0, freqArr.length - 1);

//*====================================================================

//& Analysis of HashTableMethod:

// Iterate over the string and update the count using Map methods
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (!freq.has(char)) {
//     freq.set(char, 1);
//   } else {
//     freq.set(char, freq.get(char) + 1);
//   }
// }

//* this loop is O(n) + merge sort is n * log(n)

//* so overall is n * log(n)
