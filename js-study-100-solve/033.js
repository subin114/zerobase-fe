// No.33 배열 자르기

/*
정수 배열 nums와 정수 num1, num2가 매개변수로 주어질 때,
nums의 num1번째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
*/

const solution = (nums, num1, num2) => nums.slice(num1, num2 + 1)

console.log(solution([1, 2, 3, 4, 5], 1, 3)) // [2, 3, 4]
console.log(solution([1, 3, 5], 1, 2)) // [3, 5]
