// No.77 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

/*
문자열 str과 part가 주어집니다.
str의 부분 문자열중 part로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
*/

const solution = (str, part) => str.slice(0, str.lastIndexOf(part) + part.length)

console.log(solution('AbCdEFG', 'dE')) // 'AbCdE'
console.log(solution('AAAAaaaa', 'a')) // 'AAAAaaaa'
