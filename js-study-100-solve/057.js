// No.57 이어 붙인 수

/*
정수가 담긴 리스트 nums가 주어집니다.
nums의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
*/

const solution = nums => +nums.filter(n => n % 2 !== 0).join('') + +nums.filter(n => n % 2 === 0).join('')

console.log(solution([3, 4, 5, 2, 1])) // 393
console.log(solution([5, 7, 8, 3])) // 581
