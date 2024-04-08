// O(1)    n, n + 1, n + 2, ..... m
const sum = (n, m) => ((n + m) * (m - n + 1)) / 2

// [1, 2, 3, ... n - 1, n]
// const sum = n => Array.from({ length: n }, (_, i) => i + 1).reduce((res, n) => res + n, 0)

// 재귀 호출 방법
// const sum = n => (n === 0 ? 0 : sum(n - 1) + n)

console.log(sum(10)) // 55
console.log(sum(2)) // 3
console.log(sum(1)) // 1
