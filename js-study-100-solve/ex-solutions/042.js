const solution = nums => {
  let sum = nums.reduce(
    (acc, n, i) => {
      acc[i % 2] += n
      return acc
    },
    [0, 0]
  )

  /* 배열을 새로 만드는 방법 */
  // const sum = nums.reduce(([s1, s2], n, i) => (i % 2 ? [s1 + n, s2] : [s1, s2 + n]), [0, 0])

  return Math.max(...sum)
}

console.log(solution([4, 2, 6, 1, 7, 6])) // 17
console.log(solution([-1, 2, 5, 6, 3])) // 8
