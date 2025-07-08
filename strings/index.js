/*

In JavaScript, a string is a sequence of characters used to represent text. Strings are enclosed in either single quotes ' ', double quotes " ", or backticks `, and they are immutable, meaning once created, their characters cannot be changed.

—methods of string

| `length` | - Returns string length 

| `slice(start, end)` | - Extracts substring 

| `substring(start, end)` | - Similar to `slice`, but no negative indexes 
| `substr(start, length)` | - Extracts part of string with length 
| `toUpperCase()` | - Converts to uppercase 
| `toLowerCase()` | - Converts to lowercase 
| `concat()` | - Concatenates strings 
| `trim()` | - Removes spaces from both sides 
| `indexOf(substring)` | - Returns first index of substring 
| `lastIndexOf(substring)` | - Returns last index of substring 
| `includes(substring)` | - Checks if substring exists 
| `startsWith(substring)` | - Checks if string starts with substring 
| `endsWith(substring)` | - Checks if string ends with substring |
| `replace(old, new)` | - Replaces first occurrence of substring 
| `replaceAll(old, new)` | - Replaces all occurrences 
| `split(separator)` | - Splits string into an array 
| `charAt(index)` | - Returns character at index 
| `charCodeAt(index)` | - Returns Unicode value of character 

— Q. Accept a string from user and print each character on a new line
— Q. Accept a string and print it in reverse order

*/

/*

// string are immutable in nature
let s = "hello"
s[2] = 'k'
console.log(s)

// s = "hey"
// console.log(s) // hey -> (whole space value change)

*/

/*
let s = "Goodwillhunting";

// // .substring()
// console.log(s.substring(0, 4))
// console.log(s.substring(8))  // negative indexing not allowed in .substring

// // .slice()
// console.log(s.slice(4, 8))
// console.log(s.slice(-7, -3))
// console.log(s.slice(-7))

let s2 = "    Dead Poet Society    ";
console.log(s2.trim()); // removes extra space from start and end, NOT middle
console.log(s2.trimStart()); // removes extra space from start only
console.log(s2.trimEnd()); // removes extra space from end only
*/

// // Accept a string from user and print each character on a new line
// let prompt = require("prompt-sync")()
// let username = prompt("Enter Username: ")

// for(let i=0; i<username.length; i++) {
//   console.log(username[i])
// }


// Accept a string and print it in reverse order
let prompt = require("prompt-sync")();
let string = prompt("Enter a string: ");
let rev = ""
for(let i=string.length-1; i>=0; i--) {
  rev += string.charAt(i)
}
console.log(rev);
