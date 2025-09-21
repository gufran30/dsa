/* Find Second Largest Element in an array
  Example 1:
  Input: [1,2,4,7,7,5]
  Output: Second Largest = 5

function findSecondLargest(arr) {
  let max = -Infinity;
  let secMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] < max) {
      secMax = arr[i];
    }
  }
  console.log(`Second Largest = ${secMax}`);
}
let arr = [1, 12, 4, 7, 5];
findSecondLargest(arr);

---------------------------------------------------------------------------
*/
/*
  Check if array is sorted or not.

  function isSorted(arr) {
  let flag = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      flag = false;
    }
  }
  let ans = `Array is ${flag ? "Sorted" : "Not Sorted"}`;
  console.log(ans)
  }
  let arr = [1, 2, 4, 7, 10];
  isSorted(arr)


  ---------------------------------------------------------------------------
*/

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function diagonalSum(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (i === j || i + j === mat.length + 1) {
        sum = sum + mat[j];
      }
    }
  }
  return sum;
}
console.log(diagonalSum(mat))
