// No.86 약수 구하기

/*
정수 n이 매개변수로 주어질 때,
n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

const findDivisors = n => Array.from({ length: n }, (_, i) => i + 1).filter(v => n % v === 0)

console.log(findDivisors(1)) // [1]
console.log(findDivisors(15)) // [1, 3, 5, 15]
console.log(findDivisors(16)) // [1, 2, 4, 8, 16]
console.log(findDivisors(24)) // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors(29)) // [1, 29]
