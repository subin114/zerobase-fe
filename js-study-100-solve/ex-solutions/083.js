const solution = common => {
  const [first, second, third] = common
  if (second - first === third - second) {
    return common.at(-1) + second - first
  }

  return common.at(-1) * (second / first)
}

console.log(solution([1, 2, 3, 4])) // 5
console.log(solution([2, 4, 8])) // 16
