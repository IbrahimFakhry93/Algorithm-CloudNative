//! for final best solution using merge Technique:
//^ open: segFinal.cpp
//? or:
//^ open: test.js

//! for other solutions by me, Gemini, chatgpt :

//^ open: seg.cpp (look up while loop part)
//^ open: index.js

//! for other simpler solutions using Javascript built-in methods

//^ open: test2.js
//^ open:test3.js

//^ note:

while (i < leftArrSize && leftArr[i] < 0) {
  arr[k] = leftArr[i];
  i++;
  k++;
}

//* same as this:

while (i < left_length && left_arr[i] < 0) {
  arr[k++] = left_arr[i++];
}
