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

/*
  Remove duplicates from sorted array.

*/

let arr = [1,1,2,2,2,3,3];

let hashArray = new Array().fill(0)

