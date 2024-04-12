// [0, 1, 2] => [3, 6, 9] => (i + 1) * k
const solution = (n, k) => Array.from({ length: n / k }, (_, i) => (i + 1) * k)

// const solution = (n, k) => {
//   let res = []

//   for (let i = k; i <= n; i += k) {
//     res.push(i)
//   }

//   return res
// }

console.log(solution(10, 3)) // [3, 6, 9]
console.log(solution(15, 5)) // [5, 10, 15]
