// SORTING TECHNIQUES

// let arr = [13, 46, 24, 52, 20, 9];
let arr = [3, 1, 2, 9];
// let arr = [1,2,4,6,7];
let n = arr.length;

// selection sort : get min & swap  => O(n*n)
// for (let i = 0; i <= n - 2; i++) {
//   let min = i;
//   for (let j = i; j <= n - 1; j++) {
//     if (arr[j] < arr[min]) {
//       [arr[j], arr[min]] = [arr[min], arr[j]]
//     }
//   }
// }

// bubble sort : adjacent swapping, push max number at last index. 
// TC = O(n*n) [in Worst case & Average case]
// TC = O(n) [in Best case] --> if array is sorted already
// for (let i = 0; i < n - 1; i++) {
//   let flag = false;
//   for (let j = 0; j < n - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       // swapping - by destructuring
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       flag = true;
//     }
//   }
//   if (!flag) {
//     break;
//   }
// }



// Insertion sort : 
// TC = O(n*n) -> Worst & Average case
// TC = O(n) -> in Best case

for(let i=0; i<n; i++) {
  let j = i;
  while(j>0 && arr[j-1] > arr[j]) {
    // swapping - by destructuring
    [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
    j--;
    console.log("runs");
  }
}
console.log(arr)