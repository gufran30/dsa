/*  Bitwise Operator : 
      A bitwise operator is a symbol or keyword that performs operations on individual bits of binary numbers, rather than treating them as a whole integer.

    & - same bit true,false
    ^ - different bits true
    | - atleast one is 1 for true

*/

// // what will be the output of s, if n = 127 ?
// let n = 127,
//   i = 0,
//   s = 0;

// function Sample(n) {
//   while (n > 0) {
//     let r = n % 10;
//     let p = 8 ^ i;
//     s = s + p * r;
//     i++;
//     n = Math.floor(n / 10);
//   }
//   return s;
// }
// console.log(Sample(n));

/* right shift ( >> )

25 >> 2
  binary of 25 = 11001
    now remove 2 bit from right side
  25 >> 2 will be = 110 => 6 ans.

  console.log(25 >> 2) // 6
  console.log(35 >> 3) // 4

*/

/* left shift ( << )

25 >> 2
  binary of 25 = 11001
    now add 2 bit at right side
  25 << 2 will be = 1100100 => 6 ans.

  console.log(25 << 2) // 100
  console.log(35 << 3) // 280


*/

/* swap two numbers using bitwise operator

function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}
let a = 5, b = 10
console.log("Before swap:" + [a, b]);
console.log("After swap:" + swap(a, b));

*/

/* What will be the output ?

  -   Integer count, num
  -   set count=0, mum = 64
  -   while(num NOT EQUALS 0)
        if((num & 1) is EQUALS to 1)
          jump out of the loop
        else 
          count = count + 1

  -   num = num >> 1
  -   End while
  -   Print count


function findOutput(count, num) {
  while (num != 0) {
    if ((num & 1) === 1) break;
    else count += 1;

    num = num >> 1;
  }

  return count;
}
console.log(findOutput(0, 64));
  
*/

/* Check Even Odd

0 => 0        // even
1 => 01
2 => 10       // even
3 => 11
4 => 100      // even
5 => 101
6 => 110      // even
7 => 111
8 => 1000     // even
9 => 1001
10 => 1010    // even

LSD (Least Significant Digit) => last digit of binary number
MSD (Most Significant Digit) => first digit of binary number

by seeing above demonstration we can say,
    if a number has Least Significat Digit 0 => EVEN
    else => ODD


function isEven(num) {
  if((num & 1) === 0) return true
  else false
}
console.log(isEven(26) ? "Even" : "Odd")

*/


/* Check if the power is of 2 

2   => 2^1  => 10
4   => 2^2  => 100
8   => 2^3  => 1000
16  => 2^4  => 10000
32  => 2^5  => 100000
64  => 2^6  => 1000000
128 => 2^7  => 10000000


from above demonstration we can say,
  if the MSD is 1 and rest are 0 => power Of 2 
  else => not power of 2

*/

function isPowerOf2(num) {
  if( ( num & (num -1)) === 0) return true
  else return false
}
console.log(isPowerOf2(38) ? "Power of 2" : "Not Power of 2")




