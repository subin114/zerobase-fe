// No.60 문자열 뒤집기

/*
문자열 str과 정수 s, e가 매개변수로 주어질 때,
str에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

const solution = (str, s, e) => {
  const re = str
    .slice(s, e + 1)
    .split('')
    .reverse()
    .join('')

  return str.slice(0, s) + re + str.slice(e + 1)
}

console.log(solution('Progra21Sremm3', 6, 12)) // 'ProgrammerS123'
console.log(solution('Stanley1yelnatS', 4, 10)) // 'Stanley1yelnatS'
