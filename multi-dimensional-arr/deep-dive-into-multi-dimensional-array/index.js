/* Transpose Matrix : 
          The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
*/

/*
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// output : [[1,4,7],[2,5,8],[3,6,9]]

mat = [
  [1, 2, 3],
  [4, 5, 6],
];
// output: [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]

function TransposeMatrix(arr) {
  let row = arr[0].length;
  let cols = arr.length;
  let ansArr = new Array(row).fill().map(() => new Array(cols));

  for (let i = 0; i < ansArr.length; i++) {
    for (let j = 0; j < ansArr[i].length; j++) {
      ansArr[i][j] = arr[j][i];
    }
  }
  return ansArr;
}

*/

// ------------------------------------------------------------------------------------------

/*
  Rotate Image:
            You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/


/*

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Rotate = Transpose + reverse
function RotateImage(arr) {
  // transpose 
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
      if (i !== j) {
        // swap
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
    }
  }

  // reverse
  for(let i=0; i<arr.length; i++) {
    let start = 0, end = arr[i].length-1;
    while(start < end) {
      // swap
      let temp = arr[i][start]
      arr[i][start] = arr[i][end]
      arr[i][end] = temp

      start++;
      end--;
    }
  }
  return arr;
}

*/
