const solution = names => names.filter((_, i) => i % 5 === 0)

// const solution = names => {
//   let res = []

//   for (let i = 0; i < names.length; i += 5) {
//     res.push(names[i])
//   }

//   return res
// }

console.log(solution(['nami', 'ahri', 'jayce', 'garen', 'ivern', 'vex', 'jinx'])) // ["nami", "vex"]
