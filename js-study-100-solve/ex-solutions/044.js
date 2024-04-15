const solution = (nums, n) => nums.filter((_, idx) => idx % n === 0)

// const solution = (nums, n) => {
//   const res = []

//   for (let i = 0; i < nums.length; i += n) {
//     res.push(nums[i])
//   }

//   return res
// }

console.log(solution([4, 2, 6, 1, 7, 6], 2)) // [4, 6, 7]
console.log(solution([4, 2, 6, 1, 7, 6], 4)) // [4, 7]
