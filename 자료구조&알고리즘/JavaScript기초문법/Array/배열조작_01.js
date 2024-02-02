/*
[ 배열 추가/삭제 (LIFO - Back) ]
배열 추가 : Array.push(element)  &  배열 삭제 : Array.pop()
*/

let fruits = ["apple", "orange", "melon"];

ret = fruits.push("watermelon");
console.log(fruits);  // ['apple', 'orange', 'melon', 'watermelon']
console.log(ret);     // 4
ret = fruits.pop();
console.log(fruits);  // ['apple', 'orange', 'melon']
console.log(ret);     // watermelon


/*
[ 배열 추가/삭제 (LIFO - Front) ]
배열 추가 : Array.unshift(element)  &  배열 삭제 : Array.shift()
*/

let fruit = ["apple", "orange", "melon"];

ret = fruit.unshift("watermelon");
console.log(fruit);          // ['watermelon', 'apple', 'orange', 'melon']
console.log(fruit.length);   // 4
console.log(ret);            // 4

ret = fruit.shift();         // ['apple', 'orange', 'melon']
console.log(fruit.length);   // 3
console.log(ret);            // watermelon