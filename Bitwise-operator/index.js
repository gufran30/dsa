/*  Bitwise Operator : 
      A bitwise operator is a symbol or keyword that performs operations on individual bits of binary numbers, rather than treating them as a whole integer.

    & - same bit true,false
    ^ - different bits true
    | - atleast one is 1 for true

*/

// what will be the output of s, if n = 127 ?
let n = 127,
  i = 0,
  s = 0;

function Sample(n) {
  while (n > 0) {
    let r = n % 10;
    let p = 8 ^ i;
    s = s + p * r;
    i++;
    n = Math.floor(n / 10);
  }
  return s;
}
console.log(Sample(n));
