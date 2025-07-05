/*

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(arr)
// arr.forEach((elem, idx) => {
//   console.log(elem)
// })

for(let i=0; i<arr.length; i++) {
  for(let j=0; j<arr[i].length; j++) {
    process.stdout.write(arr[i][j] + " ")
  }
  console.log()
}

*/

// -----------------------------------------------------------------------------------------------

/*

// console.log("Let's create dynamic array...")
// const prompt = require("prompt-sync")();
// let outerArraySize = Number(prompt("Enter outer array size: "))
// let arr = new Array(outerArraySize)
// for(let i=0; i<outerArraySize; i++) {
//   // let innerArraySize = Number(prompt("Enter innner array size: "))
//   arr[i] = new Array(Number(prompt("Enter innner array size: ")));
// }
// for(let i=0; i<arr.length; i++) {
//   console.log(arr[i])
// }

console.log("Let's create dynamic array...");
const prompt = require("prompt-sync")();
let innerArraySize = Number(prompt("Enter inner array size: "));
let arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(innerArraySize);
}
// [[ , , ,], [ , , ,], [ , , ,]]
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = Number(prompt(`Enter element at ${i}, ${j}: `));
  }
}
// console.log(arr) or
arr.forEach((elem) => {
  console.log(elem);
});


*/

// -----------------------------------------------------------------------------------------------

/*


// diagonal Sum
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalSum(arr) {
  if (!arr || !arr.length || !arr.every((row) => row.length === arr.length)) {
    throw new Error("Input must be a valid square matrix");
  }

  let leftSum = 0,
    rightSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     if (i === j) leftSum += arr[i][j];
  //     if (i + j === arr.length - 1) rightSum += arr[i][j];
  //   }
  // }

  //  OR

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i]; // primary diagonal: i===j
    rightSum += arr[i][arr.length - 1 - i]; // secondary diagonal: i+j === arr.length-1
  }

  console.log("left sum: " + leftSum);
  console.log("right sum: " + rightSum);
}

diagonalSum(arr);


*/

// -----------------------------------------------------------------------------------------------

/*


// arr.every(): method in JavaScript is an array method that tests whether all elements in an array pass a provided test function. 


// Check if all numbers are positive in an array
let arr = [2, 5, 7, -3, 5];
console.log(arr.every((elem) => elem > 0));

// Check if all strings are non-empty:
let strings = ["hello", "world", "", "js"];
console.log(strings.every((elem) => elem.length > 0))


*/

// -----------------------------------------------------------------------------------------------

/*


// Jagged Array : different number of element in each row.

// ___________________________________________
// let arr = [
//   [1,2,3],
//   [7,3,6,3],
//   [2,4,2,5,7,8],
//   [1,5]
// ]

// arr.forEach((elem) => {
//   console.log(elem)
// })
// ___________________________________________

// creating dynamic jagged array
console.log("Let's create dynamic jagged array..")
let prompt = require("prompt-sync")();
let arr = new Array(Number(prompt("Enter size of an array you want to create: ")))
for(let i=0; i<arr.length; i++) {
  let innerArraySize = Number(prompt(`Enter inner array size at ${i}: `))
  arr[i] = new Array(innerArraySize);
}

// entering elements in array dynamically
for(let i=0; i<arr.length; i++) {
  for(let j=0; j<arr[i].length; j++) {
    arr[i][j] = Number(prompt(`enter element at ${i}, ${j} position: `))
  }
}

console.log(arr)


*/

/*


// how to flatten array ?
// flatten array : means converting multi-dim arr into single-dim array
// using .flat() in-built method
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

console.log(arr1.reduce((a,b) => a.concat(b)))

// extra examples :
const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]


*/
