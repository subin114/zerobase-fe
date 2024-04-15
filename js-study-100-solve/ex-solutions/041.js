const solution = (arr, divisor) => {
  const filtered = arr.filter(n => n % divisor === 0)
  return filtered.length === 0 ? [-1] : filtered.sort((a, b) => a - b)
}

console.log(solution([5, 9, 7, 10], 5)) // [5, 10]
console.log(solution([2, 36, 1, 3], 1)) // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)) // [-1]
