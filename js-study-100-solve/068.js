// No.68 문자열 정렬하기 (1)

/*
문자열 str이 매개변수로 주어질 때,
str 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
*/

const solution = str =>
  [...str]
    .filter(n => !isNaN(n))
    .map(Number)
    .sort()

console.log(solution('hi12392')) // [1, 2, 2, 3, 9]
console.log(solution('p2o4i8gj2')) // [2, 2, 4, 8]
console.log(solution('abcde0')) // [0]
