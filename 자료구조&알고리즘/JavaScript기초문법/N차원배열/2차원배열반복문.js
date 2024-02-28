/* 이중 for loop를 사용한 2차원 배열 접근 */

let array = [ [101, 102, 103], [201, 202, 203], [301, 302, 303] ];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);     // 101 ... 303
  }
}

let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];

for (let i = 0; i < array.length; i++) {
  console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}
/*
fruit: strawberry, amount: 50
fruit: banana, amount: 100
fruit: ice, amount: 150
*/