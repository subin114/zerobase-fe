// No.49 2의 영역

/*
정수 배열 nums가 주어집니다.
배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

단, nums에 2가 없는 경우 [-1]을 return 합니다.
*/

const solution = nums => {
  const start = nums.indexOf(2)
  const end = nums.lastIndexOf(2)

  return start + end > 1 ? nums.slice(start, end + 1) : [-1]
}

console.log(solution([1, 2, 1, 4, 5, 2, 9])) // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])) // [2]
console.log(solution([1, 1, 1])) // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])) // [2, 1, 2, 1, 10, 2]
