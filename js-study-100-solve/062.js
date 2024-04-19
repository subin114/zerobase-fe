// No.62 7의 개수

/*
머쓱이는 행운의 숫자 7을 가장 좋아합니다.
정수 배열 nums가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
*/

const solution = nums =>
  nums
    .join('')
    .split('')
    .filter(n => n.includes('7')).length

console.log(solution([7, 77, 17])) // 4
console.log(solution([10, 29])) // 0
