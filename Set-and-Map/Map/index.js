/* Map : store data in keys, value pair

    key must be unique, 
    value can be duplicate

methods: 
  - map.set()
  - map.delete()
  - map.size   -> return length
  - map.has()  
  - map.get()  -> accept key return value



  let map = new Map();
  map.set("raj", 5);
  map.set("ali", 8);
  map.set("amit", 3);
  map.set("sonu", 5);
  map.set("raj", 2);
  // map.delete("ali");
  console.log(map.has("ali"));
  console.log(map.get("amit"))
  console.log(map.size)
  console.log(map);
  console.log(map.keys())
  console.log(map.values())
  console.log(map.entries())

  for (const [key, val] of map) {
    console.log(key + " -> " + val)
  }

*/

/*

// let arr = [1, 10, 2, 4, 2, 2, 2, 6, 1, 1, 10];
// // find number of frequencies of digits

// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   if (map.has(arr[i])) {
//     map.set(arr[i], map.get(arr[i]) + 1);
//   } else {
//     map.set(arr[i], 1);
//   }
// }
// console.log(map)
// for (const [key, val] of map) {
//   console.log(key + " --> " + val)
// }

*/


// count number of frequency of letters
let s = "   H  e  l     lo   ";
s = s.trim().replace(/[^a-zA-z0-9]/g, '')
let map = new Map();

for (let i = 0; i < s.length; i++) {
  if (map.has(s.charAt(i))) {
    map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
  } else {
    map.set(s.charAt(i), 1);
  }
}
console.log(map);
for (const [key, val] of map) {
  console.log(key + " --> " + val);
}

