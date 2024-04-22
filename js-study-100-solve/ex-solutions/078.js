const sumMatrix = matrix => matrix.flat().reduce((sum, n) => sum + n, 0)

// const sumMatrix = matrix => {
//   let sum = 0

//   for (const nums of matrix) {
//     for (const n of nums) {
//       sum += n
//     }
//   }

//   return sum
// }

console.log(
  sumMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
) // 45
console.log(sumMatrix([])) // 0
