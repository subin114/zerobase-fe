// n = 항의 개수
// 2 * (1 + 2 + 3 + ... + n)
// 2 * (1 + n) * (n / 2) = (2 + 2n) * n / 2

// O(1 + 1) = O(1)
const solution = n => {
  const count = Math.trunc(n / 2)
  return count ** 2 + count
}

// const solution = n => {
//   let evenSum = 0

//   for (let i = 2; i <= n; i += 2) evenSum += i

//   return evenSum
// }

console.log(solution(10)) // 30
console.log(solution(4)) // 6
console.log(solution(3)) // 2
console.log(solution(1)) // 0
