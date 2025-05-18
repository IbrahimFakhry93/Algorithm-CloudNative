//! 19 – Sorted Characters Frequencies – Algorithm – Code

//^ check: test.js

//* to calculate sorted Characters Frequencies

//* the repetition of the letters in the text

//& solution:

//* array of length 127
//* each index represents the code of the character in ASCII CODE

//* for ex: a in ascii is 97, so its index in the array is 97

//* if the char exists in the text, find its index which is the ASCII same decimal code of that char

//* ASCII code: decimal codes of 128 character (letters, numbers, special characters, punctuations)

class CharFreq {
  ASCIIMethod(msg) {
    console.log("ASCIIMethod");

    const freq = new Array(127).fill(0);
    // console.log(freq);

    for (let i = 0; i < msg.length; i++) {
      let asciiCode = msg.charCodeAt(i);
      //   console.log(asciiCode);
      freq[asciiCode]++;
    }

    for (let i = 0; i < freq.length; i++) {
      if (freq[i] > 0) {
        let char = String.fromCharCode(i);
        console.log(`${char}:  ${freq[i]}`);
      }
    }
  }

  //*=======================

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

    // Alternatively, using for...of to convert the Map entries to an array
    const freqArr2 = [];
    for (const [key, value] of freq) {
      freqArr2.push([key, value]);
    }
    // console.log("For-Of Loop:", freqArr2);

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
    console.log(`left_arr:`);
    console.log(left_arr);
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

    console.log("original_arr: ");
    console.log(arr);
    console.log("===============================================");
  }
}

let charFreq = new CharFreq();

const msg = "hello world";
// charFreq.ASCIIMethod(msg);

//*===============================================================================================================

//& Another task:

//* inputs: text [utf - 8]
//* output: frequency of unique char, and sorted by frequency

//* using hash-table

//* hashTable: is like array but it's formed of key and value
//* not index and value as in array
//* key can be integer or string

//* key will be character, and its value is frequency
//* hash-table can be initialized without length
//! hash-table drawbacks: hash-table can't be sorted

//^ required:

//* - create HT, key: char, value:freq
//* loop over string, check each char if exist in HT
//* if yes: freq++
//* if no: create key and add one
//* print HT
const str = "hello world";

const freqArr = charFreq.HashTableMethod(msg);

charFreq.HashTableSort(freqArr, 0, freqArr.length - 1);

//& Analysis of HashTableMethod:

// Iterate over the string and update the count using Map methods
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (!freq.has(char)) {
    freq.set(char, 1);
  } else {
    freq.set(char, freq.get(char) + 1);
  }
}

//* this loop is O(n) + merge sort is n * log(n)

//* so overall is n * log(n)

//*==============================================================

//! Note on filling map and converting it to array later

//& Title: HashTableMethod - Frequency Counter using Map

//* This snippet demonstrates why using bracket notation with a Map
//* doesn't add entries to its internal data store, leading to empty arrays
//* when converting the Map to an array of [key, value] pairs.
//* The corrected version uses Map methods (has, set, get).

function HashTableMethod(str) {
  console.log("HashTableMethod");

  //& Create a Map to act as a frequency counter.
  //& Key: character, Value: frequency count.
  const freq = new Map();

  //! Incorrect Approach (for demonstration):
  //* Using bracket notation (freq[str[i]]) adds properties to the Map object
  //* but not to its internal data store, so iterating over the Map will not yield these entries.

  for (let i = 0; i < str.length; i++) {
    if (!freq[str[i]]) freq[str[i]] = 1;
    else freq[str[i]]++;
  }

  //! Correct Approach: Use Map's .has(), .get(), and .set() methods.
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!freq.has(char)) {
      freq.set(char, 1);
    } else {
      freq.set(char, freq.get(char) + 1);
    }
  }

  console.log("Map content:", freq);
}

// Example usage:
HashTableMethod("hello world");

//* The issue is that you’re not using the Map’s interface to set values.
//* In JavaScript, a Map maintains its own internal storage,
//* and you must use methods like set, get, and has to interact with it.
//* When you use bracket notation (freq[str[i]]), you’re actually adding properties to the Map object itself
//* instead of its internal data structure.
//* As a consequence, iteration methods (like the spread operator or a for...of loop) don’t see those properties, so they appear empty.
