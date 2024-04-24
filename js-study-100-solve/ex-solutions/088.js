const deepReverse = arr => arr?.map?.(v => (Array.isArray(v) ? deepReverse(v) : v)).reverse() ?? arr

// const deepReverse = arr => (Array.isArray(arr) ? arr.map(v => deepReverse(v)).reverse() : arr)

// const deepReverse = arr => {
//   if (!Array.isArray(arr)) return arr
//   const res = []

//   for (const v of arr) {
//     if (Array.isArray(v)) res.push(deepReverse(v))
//     else res.push(v)
//   }

//   return res.reverse()
// }

console.log(deepReverse([1, [2, [3, [4, 5]]]])) // [[[[5, 4], 3], 2], 1]
console.log(deepReverse(1)) // 1
console.log(deepReverse(null)) // null
console.log(deepReverse()) // undefined
