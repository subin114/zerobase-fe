const solution = nums => (nums.includes(2) ? nums.slice(nums.indexOf(2), nums.lastIndexOf(2) + 1) : [-1])

// const solution = nums => {
//   const sliced = nums.slice(nums.indexOf(2), nums.lastIndexOf(2) + 1)

//   return sliced.length === 0 ? [-1] : sliced
// }

console.log(solution([1, 2, 1, 4, 5, 2, 9])) // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])) // [2]
console.log(solution([1, 1, 1])) // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])) // [2, 1, 2, 1, 10, 2]
