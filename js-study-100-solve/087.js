// No.87 flat

/*
중첩된 정수 배열 arr이 주어지면 평탄화한 배열을 반환하는 함수를 구현한다.
- Array#flat, Array#flatMap은 사용하지 않는다.
*/

const flat = arr => {
  if (!Array.isArray(arr)) {
    return [arr]
  }

  return arr.reduce((acc, cur) => acc.concat(flat(cur)), [])
}

console.log(flat([1, 2, 3, [4, 5, [6, 7], 8], 9])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat([1, 2, 3])) // [1, 2, 3]
console.log(flat([])) // []
