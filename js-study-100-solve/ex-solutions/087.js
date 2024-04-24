const flat = arr => arr.reduce((flatten, v) => [...flatten, ...(Array.isArray(v) ? flat(v) : [v])], [])

// const flat = arr => {
//   const res = []

//   for (const v of arr) {
//     res.push(...(Array.isArray(v) ? flat(v) : [v]))
//   }

//   return res
// }

// const flat = arr => {
//   const res = []

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) res.push(...flat(arr[i]))
//     else res.push(arr[i])
//   }

//   return res
// }

console.log(flat([1, 2, 3, [4, 5, [6, 7], 8], 9])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat([1, 2, 3])) // [1, 2, 3]
console.log(flat([])) // []
