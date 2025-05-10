// "use strict"(
// const mainMenu = ['Pizza', 'Pasta', 'Risotto', ['lazania','steak']];
// const italianRes = mainMenu;

// mainMenu[0] = 'penna pasta';
// console.log(mainMenu);        //* ['penna pasta', 'Pasta', 'Risotto', ['lazania','steak']]
// console.log(italianRes);      //* ['penna pasta', 'Pasta', 'Risotto', ['lazania','steak']]
// console.log('========================================');
// mainMenu[3][1] = 'pasta al forno';

// console.log(mainMenu);        //* ['penna pasta', 'Pasta', 'Risotto', ['lazania','pasta al forno']];
// console.log(italianRes);      //* []

// // const array1 = [1, 2, 4, 5];
// // const array2 = [];
// // array1.map(itr => array2.push(itr));
// // console.log(array2);

// // array1[0] = 2;
// // console.log(array2);

// let fruit = "banana";

// switch (fruit) {
//     case "apple":
//         console.log("Apple");

//   case "banana":
//     console.log("Banana");
//     break;
//     case "orange":
//         console.log("Orange");

//     default:
//         console.log("Unknown fruit");
// }
// //* Output: Banana

// const nums = [10, 20, 30];
// const calcAvg = (x, y, z) => console.log((x + y + z) / 3);
// calcAvg(...nums);

// const arrNums = [20, 50, 60, 100, 30, 80];
// Math.max(...arrNums);

// console.log(Math.max(...arrNums));

// console.log('========================================');

// // const italianRes = [...mainMenu];
// // mainMenu[0] = 'penna pasta';
// // console.log(mainMenu);        //* ['penna pasta', 'Pasta', 'Risotto', ['lazania','steak']]
// // console.log(italianRes);      //* ['Pizza', 'Pasta', 'Risotto', ['lazania','steak']];  //* first level element didn't change
// // mainMenu[3][1] = 'pasta al forno';

// // console.log(mainMenu);        //* ['Pizza', 'Pasta', 'Risotto', ['lazania','steak']];
// // console.log(italianRes);      //*

// console.log('========================================');
// let arr = [1, 2, 3];
// let num = 2;

// console.log(typeof arr);
// console.log(arr); //*  [1, 2, 3]
// console.log(arr - num); //*  NaN
// console.log(arr + num); //*  1,2,32

// console.log('========================================');
// const array = [5, 6, 3];
// const [r, q, s = 1] = array;
// console.log(r, q, s);  //* 5,6,1

// console.log('========================================');
// let users = [{ name: 'jonas', email: 'jonas@jo.com' }]
// users = [];
// console.log(users); //* []
// console.log(users[0]?.name);
// console.log(users[0]?.name ?? 'Array is empty');
// console.log(users[0]?.name || 'Array is empty');

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//  fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, //* Open 24 hours
//     close: 24,
//   },
// };
// //? To loop on object and get both key and value

// //* 1) convert the object(openingHours) to array of its keys and values
// //? by using Object.entries(objName)
// const objEntry = Object.entries(openingHours);
// console.log(objEntry);

// const mapMethods = Object.getOwnPropertyNames(Map.prototype);
// console.log(mapMethods);

// const question = new Map([
//   ['question', 'What is the best programming language in world?'],
//   [1, 'Java'],
//   [2, 'C'],
//   [3, 'C++'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);

// console.log(question);

// const quesArr = [...question]; //* this is === [...question.entries()]
// console.log(quesArr);  //* [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// console.log([...question.keys()]);  //* array of Map keys: ['question', 1, 2, 3, 'correct', true, false]
// console.log([...question.values()]); //* array of Map values: ['What is the best programming language in world?', 'Java', 'C', 'C++', 3, 'correct', 'try again']

// console.log('========================================');
// const rest = new Map();
// rest.set('name', 'Ain el Khalij');
// rest.set(1, 'Abu Dhabi, UAE');
// rest.set(2, 'Dubai, UAE');

// //* To check whether property or key exist in the Map or not:
// //? mapName.has('keyName');

// //* to check size:
// console.log(rest.size);

// console.log('========================================');

// const h = -1.5;
// console.log(Math.ceil(h));  //* -1  rounds up to infinity
// console.log(Math.floor(h));  //* -2  rounds down to - infinity
// console.log(Math.trunc(h));  //* -1 (removes the decimal part without rounding)

// console.log('========================================');

// (function () {
//   const result = 10;

//   function addOneBetter(num) {
//     result = num + 1;  //!Error assignment to constant variable
//     return result;
//   }
//   const x = 3;
//   addOneBetter(x);
//   console.log(result);
// });

// console.log('========================================');

// (function () {

//   let result = 10;

//   function addOneBetter(num) {
//     result = num + 1;
//     return result;
//   }
//   const x = 3;
//   console.log(result);  //* 10
//   addOneBetter(x);
//   console.log(result); //* 4

// })();

// console.log('========================================');

// //* Mutating an existing array using the fill method
// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.fill(23, 1, 4);
// console.log(arr); //~ [1, 23, 23, 23, 5, 6, 7]

//*==================================================================================================================

(function () {
  //& Title: Join Method:

  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  //* returns a string  (JavaScript joins all the elements of an array into a string)
  //* It takes an optional argument that specifies the separator to be used between the elements.
  //* If no separator is provided, the default separator is a comma.
  console.log(letters.join(" - ")); //*  a - b - c - d - e - f - g - h - i - j => new string

  const arr = ["a", "b", "c"];
  let joinedString = arr.join();
  console.log(joinedString); //~ "a,b,c"
})();

//*==================================================================================================================

const children = `Space travel is the ultimate adventure! Imagine soaring past the stars
and exploring new worlds. It's the stuff of dreams and science fiction,
but believe it or not, space travel is a real thing. Humans and robots
are constantly venturing out into the cosmos to uncover its secrets and
push the boundaries of what's possible.`;

// Split the string into an array of words
let words = children.split(" ");

// Remove the last 12 words
words = words.slice(0, -12);

// Join the words back into a string
const result = words.join(" ");

console.log(result);
