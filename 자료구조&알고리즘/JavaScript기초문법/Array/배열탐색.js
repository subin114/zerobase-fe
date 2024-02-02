/*
index 탐색 (앞에서부터) : Array.indexOf(item, from)
index 탐색 (뒤에서부터) : Array.lastIndexOf(item, from)
값 포함 여부 확인 : Array.includes(item, from)
*/

let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange"));           // 1
console.log(fruits.indexOf("Orange"));           // -1
console.log(fruits.indexOf("orange", 2));        // 3

console.log(fruits.lastIndexOf("orange"));       // 3
console.log(fruits.lastIndexOf("orange", -3));   // 1
console.log(fruits.lastIndexOf("orange", 0));    // -1

console.log(fruits.includes("banana"));          // true
console.log(fruits.includes("Banana"));          // false
console.log(fruits.includes(0));                 // false