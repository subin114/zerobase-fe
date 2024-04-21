// No.75 부분 문자열 이어 붙여 문자열 만들기

/*
길이가 같은 문자열 배열 strings와 이차원 정수 배열 parts가 매개변수로 주어집니다.
parts[i]는 [s, e] 형태로, strings[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다.
각 strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

const solution = (strings, parts) =>
  strings
    .map((c, i) => {
      const [s, e] = parts[i]

      return c.slice(s, e + 1)
    })
    .join('')

// prettier-ignore
console.log(
  solution(
    ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
) // "programmers"
