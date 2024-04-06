// No.7 공배수

/*
정수 number와 n, m이 주어집니다.
number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (num, n, m) => (num % n === 0 && num % m === 0 ? 1 : 0)

console.log(solution(60, 2, 3)) // 1
console.log(solution(55, 10, 5)) // 0
