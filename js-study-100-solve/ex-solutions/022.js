// 선언형(함수형)
const solution = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => i + start)
console.log(solution(3, 10)) // [3, 4, 5, 6, 7, 8, 9, 10]

// 명령형(절차지향)
// const solution = (start, end) => {
//   let res = []

//   for (let i = start; i <= end; i++) res.push(i)

//   return res
// }
