// No.81 등수 매기기

/*
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
영어 점수와 수학 점수를 담은 2차원 정수 배열 scores가 주어질 때,
영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = scores => {
  let arr = []
  scores.map(i => arr.push((i[0] + i[1]) / 2))
  let result = [...arr].sort((a, b) => b - a)

  return arr.map(i => result.indexOf(i) + 1)
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
