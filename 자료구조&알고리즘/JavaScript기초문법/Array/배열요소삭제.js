/* 배열 일부 요소 삭제 : delete array[index] (삭제해도 배열 사이즈가 그대로인 문제점이 있음) */

let fruits = ["apple", "orange", "melon"];

console.log(fruits);          // ['apple', 'orange', 'melon']
console.log(fruits.length);   // 3

delete fruits[1];
console.log(fruits);          // ['apple', <1 empty item>, 'melon']
console.log(fruits.length);   // 3