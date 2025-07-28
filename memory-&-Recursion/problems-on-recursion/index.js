/* Sum from 1 to N 

function Sum(n) {
  if (n === 1) return 1;
  return n + Sum(n - 1);
}
console.log(Sum(5));

*/

/* Factorial of a number

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5))

*/

/* Fibonacci Series

// without recursion
let n = 10,
  first = 0,
  second = 1;
process.stdout.write(first + " " + second + " ");

for (let i = 1; i <= n - 2; i++) {
  let third = first + second;
  process.stdout.write(third + " ");
  first = second;
  second = third;
}

// ------------------------------------------------------------------------------

// with recursion

let n = 10,
  first = 1,
  second = 1;
process.stdout.write(first + " " + second + " ");
Fibonacci(n, first, second);
function Fibonacci(n, first, second) {
  if (n === 2) return;
  process.stdout.write(first + second + " ");
  Fibonacci(n - 1, second, first + second);
}

// ------------------------------------------------------------------------------

// find nth term in fibonacci series
function Fib(n) {
  if (n === 0 || n === 1) return n;
  return Fib(n - 1) + Fib(n - 2);
}

let n = 10;
console.log(Fib(n));

*/

/*Sum of digit


function sumOfDigit(n) {
  if (n <= 0) return 0;
  return (n % 10) + sumOfDigit(Math.floor(n / 10));
}
console.log(sumOfDigit(12345));

*/

/* Reverse of a digit 


let digit = 125;
function reverseDigit(n, rev = 0) {
  if (n === 0) return rev;
  let lastdigit = n % 10;
  let newRev = rev * 10 + lastdigit;
  return reverseDigit(Math.floor(n / 10), newRev);
}
console.log(reverseDigit(digit));

*/

/* print the first n terms of the Fibonacci series using recursion
 */

function printFibonacci(n) {
  if (n <= 0) {
    console.log("Invalid input");
    return;
  }
  function fib(x) {
    if (x <= 1) return x;
    return fib(x - 1) + fib(x - 2);
  }
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(fib(i));
  }
  console.log(result.join(" "));
}

printFibonacci(10);
