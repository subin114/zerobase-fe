// No.76 문자열 바꿔서 찾기

/*
문자 "A"와 "B"로 이루어진 문자열 str과 part가 주어집니다.
str의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중
part이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.
*/

const solution = (str, part) => (str.replaceAll(/A|B/g, c => (c === 'A' ? 'B' : 'A')).includes(part) ? 1 : 0)

console.log(solution('ABBAA', 'AABB')) // 1
console.log(solution('ABAB', 'ABAB')) // 0
