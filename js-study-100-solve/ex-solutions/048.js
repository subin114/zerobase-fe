const solution = nums => nums.findIndex(n => n < 0)

// const solution = nums => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) return i
//   }

//   return -1
// }

console.log(solution([12, 4, 15, 46, 38, -2, 15])) // 5
console.log(solution([13, 22, 53, 24, 15, 6])) // -1

/*
[filter와 find의 차이]

filter 반환 값: 배열
find 반환 값 : 요소
*/
