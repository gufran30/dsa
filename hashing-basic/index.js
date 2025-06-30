// basic hashing

// hashing :  combination of pre-storing, fetching

// let arr = [1, 2, 1, 3, 2];
// let queries = [1, 3, 4, 2, 10];

// function hashCount(number, arr) {
//   let count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] == number) {
//       count += 1;
//     }
//   }
//   return count;
// }

// for (let i = 0; i < queries.length; i++) {
//   let ans = hashCount(queries[i], arr);
//   console.log(`${queries[i]} --> ${ans}`);
// }
// TC = O(q*n)

// ___________________________________________________________________

//
// let arr = [1, 2, 1, 3, 2];
// let queries = [1, 3, 4, 2, 10];

// // pre-store
// let hashArray = new Array(12).fill(0);

// for (let i = 0; i < arr.length; i++) {
//   hashArray[arr[i]] += 1;
// }

// // fetch
// for (let i = 0; i < queries.length; i++) {
//   console.log(i + " ---> " + hashArray[queries[i]]);
// }

// ___________________________________________________________________

// let str = "abcAdaCbeAfcC";
// let queries = ["a", "c", "z", "A", "C", "B"];

// let hashArray = new Array(256).fill(0)

//  for (let i = 0; i < str.length; i++) {
//   hashArray[str[i].charCodeAt(0)] += 1;
// }

// for(let i=0; i<queries.length; i++) {
//   console.log(`${queries[i]} ---> ${hashArray[queries[i].charCodeAt(0)]}`)
// }

//___________________________________________________________________

// Problem statement: Given an array, we have found the number of occurrences of each element in the array.

// let arr = [10, 5, 10, 15, 10, 5];

// let duplicate = new Array(arr.length).fill(false);

// for (let i = 0; i < arr.length; i++) {
//   if (duplicate[i] === true) continue;
//   let count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] == arr[i]) {
//       count += 1;
//       duplicate[j] = true;
//     }
//   }
//   console.log(`${arr[i]} --> ${count}`);
// }

//___________________________________________________________________

// Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

let arr = [10, 5, 10, 15, 10, 5];
let duplicate = new Array(arr.length).fill(false);
let lowFreq = arr.length,
  highFreq = 0;
let lowElem = 0,
  highElem = 0;

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  if (duplicate[i] == false) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count += 1;
        duplicate[j] = true;
      }
    }
    if (count > highFreq) {
      highFreq = count;
      highElem = arr[i];
    }
    if (count < lowFreq) {
      lowFreq = count;
      lowElem = arr[i];
    }
    console.log(`${arr[i]} ---> ${count}`);
  }
}
console.log(`Highest: ${highElem}, Lowest: ${lowElem}`);
