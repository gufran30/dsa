// paalidromic string -> DONE ✅
// paalidromic string (in-place) -> DONE ✅

/* Toggle Alphabet case

input: aCGdFd
output: AcgDfD
________________________

function toggleAlphabetCase(str) {
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i).charCodeAt(0) >= 65 &&
      str.charAt(i).charCodeAt(0) <= 90
    ) {
      console.log(i);
      str2 += str.charAt(i).toLowerCase();
    } else {
      str2 += str.charAt(i).toUpperCase();
    }
  }
  return str2;
}

let ans = toggleAlphabetCase("aCGdFd123");
console.log(ans);

*/

/* Count strings with given Prefix

function countStringWithGivenPrefix(arr, pref) {
  let count = 0;
  arr.forEach((elem) => {
    if(elem.substring(0, pref.length) === pref) count++
  });

  return count;
}

let arr = ["pay", "attention", "practice", "attend"];
let ans = countStringWithGivenPrefix(arr, "at");
console.log(ans);
*/

/* Capitalize first and last character of each word

input: how are you 
output: HoW ArE YoU

function capitalizeStartAndEnds(str) {
  // str = str.replace(/[^a-zA-Z0-9]/g, " ").trim()
  return str.split(" ").map(word => {
    if(word.length === 0) return
    else if (word.length === 1) return word.toUpperCase();
    else {
      const firstChar = word.charAt(0).toUpperCase()
      const lastChar = word.charAt(word.length-1).toUpperCase()
      const middlePart = word.slice(1, -1)
      return firstChar + middlePart + lastChar
    }
  }).join(" ")
}

let ans = capitalizeStartAndEnds("   how    are    you    ");
console.log(ans)


*/

/* Character Frequency in a String

- Given a string, write a program to count and print the frequency of each alphabetic character present in the string.
- Ignore spaces in the input.
- The output should be sorted alphabetically by character and
- should not contain any repetitions.

input: hello
output: 
      e: 1
      h: 1
      l: 2
      o: 1



function CharFrequencyInString(str) {
  str = str.trim().replaceAll(" ", "")
  let hashArr = new Array(256).fill(0)
  for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i);
    hashArr[index] += 1
  }

  return hashArr.filter((elem, index) => {
    if(elem > 0) {
      let char = String.fromCharCode(index)
      console.log(`${char}: ${elem}`)
    }
  })
}

let ans = CharFrequencyInString("hello");

*/

/* Check if two string are Anagrams 

  input : car, arc
  output: true

  function isAnagram(s1, s2) {
  // Your code here
  if (s1.length !== s2.length) return "String must be of same length";

  let hashArr = new Array(122).fill(0);
  for (let i = 0; i < s1.length; i++) {
    let index = s1.charCodeAt(i);
    hashArr[index] += 1;
  }

  for (let i = 0; i < s2.length; i++) {
    let index = s2.charCodeAt(i);
    hashArr[index] -= 1;
  }

  for (let i = 0; i < hashArr.length; i++) {
    if (hashArr[i] > 0) {
      return "Given two strings are not Anagrams ❌";
    }
  }

  return "Given two Strings are Anagrams ✅";
}

let ans = isAnagram("scar", "rasc");
console.log(ans);

 */
