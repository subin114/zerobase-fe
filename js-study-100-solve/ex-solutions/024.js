const sum = (n, m) => Array.from({ length: m - n + 1 }, (_, i) => i + n).reduce((sum, n) => sum + n, 0)

console.log(sum(3, 8)) // 33
console.log(sum(3, 3)) // 3
console.log(sum(3, 2)) // 0
