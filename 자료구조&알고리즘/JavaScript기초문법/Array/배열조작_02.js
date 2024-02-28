/*
배열 요소 삭제/변경 : Array.splice(start, deleteCount, item1, item2, ...)
*/

let fruits = ["apple", "orange", "melon"];
let ret;


ret = fruits.splice(1);
console.log(ret);                   // ['orange', 'melon']   splice에 의해 잘린 요소가 ret에 할당됨
console.log(fruits);                // ['apple']

fruits = ["apple", "orange", "melon", "strawberry"];
ret = fruits.splice(1, 1);
console.log(ret);                   // ['orange']
console.log(fruits);                // ['apple', 'melon', 'strawberry']

ret = fruits.splice(1, 1, "mango", "kiwi");
console.log(ret);                   // ['melon']
console.log(fruits);                // ['apple', 'mango', 'kiwi', 'strawberry']