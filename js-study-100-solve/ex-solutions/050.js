const solution = (nums, n) => nums.reduce((sum, num) => (sum > n ? sum : sum + num), 0)

// const solution = (nums, n) =>
//   nums.reduce((sum, num) => {
//     if (sum <= n) sum += num
//     return sum
//   }, 0)

console.log(solution([34, 5, 71, 29, 100, 34], 123)) // 139
console.log(solution([58, 44, 27, 10, 100], 139)) // 239
