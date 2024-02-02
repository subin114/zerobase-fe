/*
다양한 반복문 문법을 통해 배열 요소에 접근 가능
반복문 문법 : for ~ length(index 접근), for ~ of (element 접근), for ~ in (key 접근)
*/

let fruits = ["apple", "orange", "melon"];

// 1. use for (index)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);    // apple, orange, melon
}

// 2. use for (element) of
for (let fruit of fruits) {
  console.log(fruit);        // apple, orange, melon
}

// 3. use for (key) in
for (let key in fruits) {
  console.log(fruits[key]);  // apple, orange, melon
}