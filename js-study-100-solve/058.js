// No.58 글자 이어 붙여 문자열 만들기

/*
문자열 str과 정수 배열 indices가 매개변수로 주어집니다.
str의 indices의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

const solution = (str, indices) => indices.map(i => str[i]).join('')

console.log(solution('cvsgiorszzzmrpaqpe', [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]))
// 'programmers'
console.log(solution('zpiaz', [1, 2, 0, 0, 3]))
// 'pizza'
