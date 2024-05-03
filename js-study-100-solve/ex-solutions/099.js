const twoSum = (nums, target) => {
  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i]

    if (hash[pair] !== undefined) return [hash[pair], i]

    hash[nums[i]] = i
  }
}

// O(n^2)
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j]
//     }
//   }
// }

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([3, 2, 4], 6)) // [1, 2]
console.log(twoSum([3, 3], 6)) // [0, 1]
