/*
  Memory (RAM) : Stack & Heap

  Stack :
    - static memory 
    - limited size
      ex: if stack has 5% space then heap 95% 

    Stack has two things: 
      1. primitive variables : Number, String, Boolean, null, undefined, BigInt
      2. function call

    - LIFO
    - push, pop are operations, peek is position in stack.


  Recursion :
    - fn calling itself again & again untill it meets the base condition case.
    - without proper base condition, fn leads to "Maximum call stack size exceeded" error.



  Notes: 
    - By default every function has a return statement, even if you don't mention it.


*/

// Recursion

/*
function greet(a) {
  if (a === 0) return;  // base condition
  console.log("hii");
  greet(a - 1);         // calling fn again
}

greet(5);
*/

/* Print hello n times

function printHello(n) {
  if (n === 0) return;
  console.log("Hello");
  printHello(n - 1);
}
printHello(5);

*/

/* Print natural numbers form 1 to N

function naturalNumber(n) {
  if (n === 0) return;
  naturalNumber(n - 1);
  process.stdout.write(n + " ");
}

naturalNumber(10);

*/

/* Print Natural numbers from N to 1*/

function naturalNumber(n) {
  if (n === 0) return;
  process.stdout.write(n + " ");
  naturalNumber(n - 1);
}

naturalNumber(10);
