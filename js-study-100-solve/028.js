// No.28 짝수 홀수 개수
/* prettier-ignore */

/*
정수가 담긴 리스트 nums가 주어질 때,
nums의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

const solution = nums => [nums.filter(n => n % 2 === 0).length, nums.filter(n => n % 2 !== 0).length]

console.log(solution([1, 2, 3, 4, 5])) // [2, 3]
console.log(solution([1, 3, 5, 7])) // [0, 4]
