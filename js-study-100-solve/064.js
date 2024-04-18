// No.64 x 사이의 개수

/*
문자열 str이 주어집니다.
str을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
*/

const solution = str => str.split('x').map(c => c.length)

console.log(solution('oxooxoxxox')) // [1, 2, 1, 0, 1, 0]
console.log(solution('xabcxdefxghi')) // [0, 3, 3, 3]
