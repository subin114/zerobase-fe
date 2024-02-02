/* 배열 요소 삭제 : Array.slice([start], [end]) */
// splice와는 다르게 원본 객체에 영향을 안미침

let fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1));      // ['orange', 'melon']
console.log(fruits);              // ['apple', 'orange', 'melon']

console.log(fruits.slice(1, 2));   // ['orange']
console.log(fruits.slice(-2));     // ['orange', 'melon']



/* 다중 배열 병합 : Array.concat(arg1, arg2, ...) */

let fruit = ["apple", "orange", "melon"];

console.log(fruit.concat("strawberry"));   // ['apple', 'orange', 'melon', 'strawberry']
console.log(fruit.concat("cherry", "banana"));   // ['apple', 'orange', 'melon', 'cherry', 'banana']
console.log(fruit.concat(["cherry", "banana"], "mango"));    // ['apple', 'orange', 'melon', 'cherry', 'banana', 'mango']

console.log(fruit);   // ['apple', 'orange', 'melon']