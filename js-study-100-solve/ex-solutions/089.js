const solution = answers => {
  /**
   * 1번 수포자
   * 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
   * 1, 2, 3, 4, 5의 반복
   * correct1 = [1, 2, 3, 4, 5].at(i % 5) === answers[i]
   *
   *  2번 수포자
   * 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
   * 2, 1, 2, 3, 2, 4, 2, 5의 반복
   * correct2 = [2, 1, 2, 3, 2, 4, 2, 5].at(i % 8) === answers[i]
   *
   * 3번 수포자
   * 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
   * 3, 3, 1, 1, 2, 2, 4, 4, 5, 5의 반복
   * correct3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5].at(i % 10) === answers[i]
   */
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ]

  // [1번 수포자가 맞춘 문제 개수, 2번 수포자가 맞춘 문제 개수, 3번 수포자가 맞춘 문제 개수]
  const scores = []

  // 수포자들이 맞춘 문제 개수를 카운트한다. O(n * 3)
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (patterns[j].at(i % patterns[j].length) === answers[i]) {
        scores[j] = (scores[j] || 0) + 1
      }
    }
  }

  // 가장 높은 점수를 구한다. O(3)
  const highestScore = Math.max(...scores)

  // 가장 높은 점수를 받은 사람
  const res = []

  // 가장 높은 점수를 받은 사람(scores의 인덱스 + 1)을 찾는다. O(3)
  // [ 5, 0, 0 ] => [ 1 ]
  // [ 2, 2, 2 ] => [ 1, 2, 3 ]
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highestScore) res.push(i + 1)
  }

  // SC=O(1) => res는 언제나 3개 이하다.
  return res
}

console.log(solution([1, 2, 3, 4, 5])) // [1]
console.log(solution([1, 3, 2, 4, 2])) // [1, 2, 3]
