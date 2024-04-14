// No.47 순서 바꾸기

/*
정수 리스트 nums와 정수 n이 주어질 때,
nums를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을
n 번째까지의 원소들 앞에 붙인 리스트를 return 하도록 solution 함수를 완성해주세요.
*/

const solution = (nums, n) => nums.slice(n).concat(nums.splice(0, n))

console.log(solution([2, 1, 6], 1)) // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)) // [7, 5, 5, 2, 1]
