// No.27 배열 두배 만들기

/*
정수 배열 nums가 매개변수로 주어집니다.
nums의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = nums => nums.map(n => n * 2)

console.log(solution([1, 2, 3, 4, 5])) // [2, 4, 6, 8, 10]
console.log(solution([1, 2, 100, -99, 1, 2, 3])) // [2, 4, 200, -198, 2, 4, 6]
