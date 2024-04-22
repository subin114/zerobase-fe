const solution = (str, part) =>
  +[...str]
    .map(c => (c === 'A' ? 'B' : 'A'))
    .join('')
    .includes(part)

// const solution = (str, part) => {
//   let res = ''

//   for (const c of str) {
//     res += c === 'A' ? 'B' : 'A'
//   }

//   return +res.includes(part)
// }

console.log(solution('ABBAA', 'AABB')) // 1
console.log(solution('ABAB', 'ABAB')) // 0
