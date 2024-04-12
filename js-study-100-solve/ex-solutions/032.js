const solution = arr => arr.toReversed() // toReversed()를 사용하면 arr을 변환시키지 X

// unshift는 O(n)이기 때문에 잘 사용하지 X
// /** @param {number[]} arr */
// const solution = arr => {
//   const res = []

//   for (let i = 0; i < arr.length; i++) {
//     res.unshift(arr[i])
//   }

//   return res
// }

// const solution = arr => arr.map((_, i) => arr.at(-1 - i))

console.log(solution([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])) // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5])) // [5, 3, 1, 1, 1, 0, 1]
