const solution = (a, d, included) => included.reduce((sum, bool, i) => (bool ? sum + a + d * i : sum), 0)

// const solution = (a, d, included) => {
//   let sum = 0

//   for (let i = 0; i < included.length; i++) {
//     if (included[i]) sum += a + d * i
//   }

//   return sum
// }

console.log(solution(3, 4, [true, false, false, true, true])) // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])) // 10
