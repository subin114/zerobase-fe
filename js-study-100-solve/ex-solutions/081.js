const solution = scores => {
  // 1. 평균 구하기
  const averages = []

  for (const [eng, math] of scores) {
    averages.push((eng + math) / 2)
  }

  // 2. 등수를 구하기 위해 평균을 내림차순으로 정렬
  const sorted = averages.toSorted((a, b) => b - a)

  // 3. 1과 2의 결과를 비교하여 등수를 구함
  const rank = []

  for (const average of averages) {
    rank.push(sorted.indexOf(average) + 1)
  }
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
)
// [1, 2, 4, 3]
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
)
// [4, 4, 6, 2, 2, 1, 7]
