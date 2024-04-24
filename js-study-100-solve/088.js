// No.88 deepReverse

/*
주어진 중첩된 배열 arr을 뒤집은 새로운 배열을 반환하는 함수를 구현한다. 

- arr은 반드시 배열이다.
- for 문, for…in 문, for…of 문, Array#forEach는 사용하지 않는다.
*/

// const deepReverse = arr => {
// }

console.log(deepReverse([1, [2, [3, [4, 5]]]])) // [[[[5, 4], 3], 2], 1]
console.log(deepReverse(1)) // 1
console.log(deepReverse(null)) // null
console.log(deepReverse()) // undefined
