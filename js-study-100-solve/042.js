// No.42 홀수 vs 짝수

/*
정수 리스트 nums가 주어집니다.
가장 첫 번째 원소를 1번 원소라고 할 때,
홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요.
두 값이 같을 경우 그 값을 return합니다.
*/

const solution = nums => {
  const res = nums.reduce(
    (acc, n, idx) => {
      if ((idx + 1) % 2 !== 0) acc.odd += n
      else acc.even += n

      return acc
    },
    { odd: 0, even: 0 }
  )

  return Math.max(res.odd, res.even)
}

console.log(solution([4, 2, 6, 1, 7, 6])) // 17
console.log(solution([-1, 2, 5, 6, 3])) // 8
