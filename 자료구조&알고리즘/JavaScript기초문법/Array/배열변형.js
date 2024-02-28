/*
배열 정렬 : Array.sort(), 배열 반전 : Array.reverse()
*/

let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort());   // [-1, 0, 1, 2, 4, 5]
console.log(nums.reverse());   // [5, 4, 2, 1, 0, -1]

let fruits = ["apple", "orange", "banana", "melon"];
console.log(fruits.sort());   // ['apple', 'banana', 'melon', 'orange']
console.log(fruits.reverse());   // ['orange', 'melon', 'banana', 'apple']


/*
배열 값을 문자열로 변환 : Array.join(separator)
*/

let fruit = ["apple", "orange", "banana", "melon"];
let str = fruit.join();
console.log(str);   // apple,orange,banana,melon

let str_separator = fruit.join(";");
console.log(str_separator);   // apple;orange;banana;melon

let result = str.split(";");  // 문자열이 배열 요소로 변경
console.log(result);          // ['apple', 'orange', 'banana', 'melon']