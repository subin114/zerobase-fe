/* 
배열 타입 확인 방법 : Array.isArray(value)
배열이라면 true, 아니면 false를 출력
*/

let num = 123.456;
let str = "Here I am!";
let fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num));      // false
console.log(Array.isArray(str));      // false
console.log(Array.isArray(fruits));   // true