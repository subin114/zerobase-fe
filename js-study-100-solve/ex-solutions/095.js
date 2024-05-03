const solution = nums => {
  const counts = nums.reduce((map, n) => map.set(n, (map.get(n) || 0) + 1), new Map())
  const max = Math.max(...counts.values())
  const res = [...counts].filter(([, val]) => val === max).map(([key]) => key)

  return res.length === 1 ? res.at(0) : -1
}

// const solution = nums => {
//   // [1, 2, 3, 3, 3, 4] = {1:1, 2:1, 3:3, 4:1}
//   const counts = nums.reduce((hash, n) => {
//     hash[n] = (hash[n] || 0) + 1
//     return hash
//   }, {})

//   const max = Math.max(...Object.values(counts))

//   const res = Object.entries(counts)
//     .filter(([, val]) => val === max)
//     .map(([key]) => key)

//   return res.length === 1 ? res.at(0) : -1
// }

console.log(solution([1, 2, 3, 3, 3, 4])) // 3
console.log(solution([1, 1, 2, 2])) // -1
console.log(solution([1])) // 1
