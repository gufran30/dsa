function CountDigit(n) {
  // let digits = 0;
  // if(n === 0) return 1;
  // while(n !== 0) {
  //   digits++;
  //   n = Math.floor(n/10)
  // }
  // return digits;
  return Math.floor(Math.log10(n) + 1);
}

function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  return rev;
}

function checkPalindrome(n) {
  let copy = n;
  let rev = 0;
  // do reverse
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  // if(rev === copy) return true;
  // else return false
  return rev === copy ? true : false;
}

function findGCD(n1, n2) {
  // let gcd = 1;
  // for(let i=2; i<=Math.min(n1, n2); i++) {
  //   if(n1 % i === 0 && n2 % i === 0) {
  //     gcd = i
  //   }
  // }
  // return gcd;

  for (let i = Math.min(n1, n2); i > 0; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }

  //  you can also use Euclidean method here
  //   - Repeatedly subtract the smaller number from the larger number until one of them becomes 0.
  //   - Once one of them becomes 0, the other number is the GCD of the original numbers.
}

function Euclidean_GCD_method(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  if (a === 0) return b;
  return a;
}

function ArmstrongNum(n) {
  // let digit = CountDigit(n)
  let digit = Math.floor(Math.log10(n) + 1);
  let copy = n;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum = sum + rem ** digit;
    n = Math.floor(n / 10);
  }
  return copy === sum ? true : false;
}

function printAllDivisors(n) {
  // let divisorsArr = [];
  // for (let i = 1; i <= n; i++) {
  //   if (n % i === 0) divisorsArr.push(i);
  // }
  // return divisorsArr;

  // optimize
  let divisorsArr = [];
  let sqrtN = Math.sqrt(n);
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisorsArr.push(i);
      if (i !== n / i) {
        divisorsArr.push(n / i);
      }
    }
  }
  return divisorsArr;
}

function checkPrime(n) {
  if (n < 0) return "number should be positive.";
  if (n === 1) return "1 is composite number not prime.";

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// let ans = checkPrime(67);
// console.log(ans);

// ---------------------------------------------------------------------------------------

/* Count Primes (Sieve of Eratosthenes) 

function checkPrimeInRange(n) {
  let isPrime = new Array(n + 1).fill(true);
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (isPrime[i] == true) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i < isPrime.length; i++) {
    if (isPrime[i]) process.stdout.write(i + " ");
  }
}

checkPrimeInRange(10);

*/

/* Find  Sqrt(x) without using built in methods 

function findSqrt(n) {
  let i = 1;
  for (; i * i <= n; i++) {
    if (i * i == n) return i;
  }
  return i - 1;
}
console.log(findSqrt(135))

*/

/* Power(x, n) 

que: Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
Either x is not zero or n > 0.
-104 <= xn <= 104


_________________________________________________________________


*/

function findPower(x, n) {
  if (n == 0) return 1.0;
  return n < 0 ? 1 / temp(x, n) : temp(x, n);
}

let temp = function (x, n) {
  if (n == 0) return 1;
  let ans = temp(x, Math.floor(n / 2));
  if (n % 2 == 0) return ans * ans;
  return (ans * ans * x).toFixed(5);
};

console.log(findPower(2.10000, 3))