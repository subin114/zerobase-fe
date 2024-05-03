// No.93 문자열 묶기

/*
문자열 배열 strings가 주어집니다.
strings의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때
가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
*/

const solution = strings => {
  let arr = strings.map(c => c.length)
  let res = {}

  arr.forEach(c => (res[c] = (res[c] || 0) + 1))

  return Math.max(...Object.values(res))
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi'])) // 2
