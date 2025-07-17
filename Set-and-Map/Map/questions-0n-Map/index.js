/* Two Sum

Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]



let nums = [3, 2, 4],
target = 6;

function twoSum(nums, target) {
  let map = new Map();
  let ans = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      ans[0] = i;
      ans[1] = map.get(target - nums[i]);
      return ans;
    } else {
      map.set(nums[i], i);
    }
  }
  return ans;
}

console.log(twoSum(nums, target));


*/

/* First Letter appear twice

Example 1:
  Input: s = "abccbaacz"
  Output: "c"
    Explanation:
    The letter 'a' appears on the indexes 0, 5 and 6.
    The letter 'b' appears on the indexes 1 and 4.
    The letter 'c' appears on the indexes 2, 3 and 7.
    The letter 'z' appears on the index 8.
    The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

Example 2:
  Input: s = "abcdd"
  Output: "d"
    Explanation:
    The only letter that appears twice is 'd' so we return 'd'.


function repeatedCharacter(s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      return s.charAt(i);
    } else {
      map.set(s.charAt(i), i);
    }
  }
  return -1;
}

let s = "abccbaacz";
console.log(repeatedCharacter(s))


*/

/* Sort the People

- You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
- For each index i, names[i] and heights[i] denote the name and height of the ith person.
- Return names sorted in descending order by the people's heights.


Example 1:
  Input: names = ["Mary","John","Emma"], heights = [180,165,170]
  Output: ["Mary","Emma","John"]

  Explanation: Mary is the tallest, followed by Emma and John.

Example 2:
  Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
  Output: ["Bob","Alice","Bob"]

  Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

 */

function sortPeople(names, heights) {
  // Your code here
  let map = new Map();
  for (let i = 0; i < heights.length; i++) {
    map.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);
  let ans = new Array(names.length);
  for (let i = 0; i < heights.length; i++) {
    ans[i] = map.get(heights[i]);
  }
  return ans;
}

let names = ["Alice", "Bob", "Charlie"],
  heights = [155, 185, 150];
console.log(sortPeople(names, heights));
