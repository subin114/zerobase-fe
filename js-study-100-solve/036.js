// No.36 배열 만들기 2

/*
정수 l과 r이 주어졌을 때, l 이상 r 이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를
오름차순으로 저장한 배열을 return하는 solution 함수를 완성해 주세요.

만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
*/

const solution = (l, r) => {
  let arr = []

  for (let i = l; i <= r; i++) {
    if (i % 5 === 0) {
      if ([...String(i)].every(e => e === '0' || e === '5')) arr.push(i)
    }
  }

  return arr.length ? arr.sort((a, b) => a - b) : [-1]
}

console.log(solution(5, 555)) // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)) // [-1]
