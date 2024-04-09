// No.35 배열 만들기 1

/*
정수 n과 k가 주어졌을 때,
1 이상 n 이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return하는 solution 함수를 완성해 주세요.
*/

const solution = (n, k) => {
  let arr = []

  for (let i = 1; i <= n; i++) {
    if (i % k === 0) arr.push(i)
  }

  return arr
}

console.log(solution(10, 3)) // [3, 6, 9]
console.log(solution(15, 5)) // [5, 10, 15]
