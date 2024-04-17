const solution = nums => +nums.filter(n => n % 2 === 0).join('') + +nums.filter(n => n % 2 !== 0).join('')

// const solution = nums => {
//   const [sum1, sum2] = nums.reduce(([s1, s2], n) => (n % 2 === 0 ? [s1 + n, s2] : [s1, s2 + n]), ['', ''])

//   return +sum1 + +sum2
// }

console.log(solution([3, 4, 5, 2, 1])) // 393
console.log(solution([5, 7, 8, 3])) // 581
