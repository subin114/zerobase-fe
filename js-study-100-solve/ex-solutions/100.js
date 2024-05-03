const threeSum = nums => {
  const res = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k]

        if (sum === 0) res.push([nums[i], nums[j], nums[k]])
      }
    }
  }

  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([-2, 0, 1, 1, 2])) // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum([0, 1, 1])) // []
console.log(threeSum([0, 0, 0])) // [[0, 0, 0]]
