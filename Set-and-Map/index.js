/* SET : 
    - like array but not contains duplicate.
    - linear data str.
    - contains unique value

    property : .size // not a method but property.

    methods : 
      - .add()
      - .delete()
      - .has() // return true or false
      - .clear() // clear whole set



let set = new Set()
set.add(10)
set.add(20)
set.add(30)
set.add(40)
console.log(set)
set.delete(20)
console.log(set)
set.clear()
console.log(set)

*/

/*Check panagaram : contains every letter of alphabets
 
  ex: "Thequickbrownfoxjumpsoverthelazydog"
 
function checkPanagram(input) {
  let set = new Set();
  input.split("").forEach((elem) => set.add(elem));
  if (set.size === 26) return true;
  else return false;
}

let input = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkPanagram(input))


 */

/* Count Jewels inn Stones

  input: stones = "aAAbbbb", jewels = "aA"
  output: 3 

  input: stones = "abcABCabcABC", jewels = "ABC"
  output: 6

  NOTE: letters are case-sensitive



  function numsJewelsInStones(jewels, stones) {
  let count = 0;
  let set = new Set();
  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels.charAt(i));
  }
  for (let i = 0; i < stones.length; i++) {
    let ch = stones.charAt(i);
    if (set.has(ch)) count++;
  }

  return count;
}

let stones = "abcABCabcABC",
  jewels = "ABC";

console.log(numsJewelsInStones(jewels, stones));

*/

/* Happpy number 
  - A happy number is a positive integer that eventually reaches 1 when repeatedly replaced by the sum of the squares of its digits. If the process results in a cycle that does not include 1, the number is considered unhappy (or sad). 

  input: 19
  output: true

  input: 2;
  output: false

function isHappyNum(n) {
  let set = new Set();
  while (true) {
    let sum = 0;
    while (n > 0) {
      let rem = n % 10;
      sum = sum + rem * rem;
      n = Math.floor(n / 10);
    }
    if (sum === 1) return true;
    if (set.has(sum)) return false;
    else set.add(sum);

    n = sum;
  }
  return false;
}

console.log(isHappyNum(19));

*/
