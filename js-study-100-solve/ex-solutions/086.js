const findDivisors = n => {
  const res = []

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) res.push(i)
  }

  return [...res, n]
}

// 합성 수 : 약수가 3개 이상인 수

// const findDivisors = n => {
//   const set = new Set()

//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       set.add(i).add(n / 1)
//     }
//   }

//   return [...set].sort((a, b) => a - b)
// }

console.log(findDivisors(1)) // [1]
console.log(findDivisors(15)) // [1, 3, 5, 15]
console.log(findDivisors(16)) // [1, 2, 4, 8, 16]
console.log(findDivisors(24)) // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors(29)) // [1, 29]
