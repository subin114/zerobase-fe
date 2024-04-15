const solution = (nums, n) => [...nums.slice(n), ...nums.slice(0, n)]
// const solution = (nums, n) => [...nums.filter((_, i) => i >= n), ...nums.filter((_, i) => i < n)]

console.log(solution([2, 1, 6], 1)) // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)) // [7, 5, 5, 2, 1]
