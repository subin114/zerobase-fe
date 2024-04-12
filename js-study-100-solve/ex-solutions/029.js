const solution = nums => {
  let [product, sum] = nums.reduce(([product, sum], n) => [product * n, sum + n], [1, 0])

  return product < sum ** 2 ? 1 : 0
}

console.log(solution([3, 4, 5, 2, 1])) // 1
console.log(solution([5, 7, 8, 3])) // 0
