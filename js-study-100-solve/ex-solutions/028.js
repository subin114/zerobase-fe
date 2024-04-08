const solution = nums =>
  nums.reduce(
    (res, n) => {
      res[n % 2 === 0 ? 0 : 1] += 1
      return res
    },
    [0, 0]
  )

console.log(solution([1, 2, 3, 4, 5])) // [2, 3]
console.log(solution([1, 3, 5, 7])) // [0, 4]
