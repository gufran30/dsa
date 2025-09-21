/* Merge Sorted Array

let arr1 = [2, 4, 5];
let arr2 = [1, 4, 7];

function mergeSortedArray(arr1, arr2) {
  let mergedArr = new Array(arr1.length + arr2.length)c;
  console.log(mergedArr);
  let i = 0,
    j = 0,
    k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr[k++] = arr1[i++];
      // k++;
      // i++;
    } else {
      mergedArr[k++] = arr2[j++];
      // k++;
      // j++;
    }
  }

  while (i < arr1.length) {
    mergedArr[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    mergedArr[k++] = arr2[j++];
  }

  return mergedArr;
}

console.log(mergeSortedArray(arr1, arr2));


*/

/* Remove duplicates from a Sorted array

    Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

    Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.

_______________________________________________________________________________________

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicate(arr) {
  let j = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      arr[j] = arr[i + 1];
      j++;
    }
  }
  return j;
}
console.log(removeDuplicate(arr));


*/

/* Duplicate Zeros
    Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

    Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

    

    Example 1:

    Input: arr = [1,0,2,3,0,4,5,0]
    Output: [1,0,0,2,3,0,0,4]
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

    Example 2:

    Input: arr = [1,2,3]
    Output: [1,2,3]
    Explanation: After calling your function, the input array is modified to: [1,2,3]

-----------------------------------------------------------------------------------------------

function duplicateZeros(arr) {
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) zeros++;
  }
  let i = arr.length - 1,
    j = arr.length - 1 + zeros;

  while (i != j) {
    if (j < arr.length) {
      arr[j] = arr[i];
    }
    j--;

    if (arr[i] == 0) {
      if (j < arr.length) {
        arr[j] = arr[i];
      }
      j--;
    }
    i--;
  }
}

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr)
console.log(arr)


*/
